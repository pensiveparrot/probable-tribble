import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CsrfInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Bypass CSRF token setting for login and register routes
    if (req.url.includes('/login') || req.url.includes('/register')) {
      return next.handle(req);
    }

    const csrfToken = this.getCookie("XSRF-TOKEN");  // assuming you have a method to get the cookie


    // ...

    if (csrfToken) {
      const clonedRequest = req.clone({
        headers: req.headers.set('X-XSRF-TOKEN', csrfToken)
      });
      return next.handle(clonedRequest).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            console.log('Redirecting to login page');  // Log when the redirection is triggered
            this.router.navigate(['login']);
          }
          return new Observable<HttpEvent<any>>(subscriber => subscriber.error(error));
        })
      );
    } else {
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            console.log('Redirecting to login page');  // Log when the redirection is triggered
            this.router.navigate(['login']);
          }
          return new Observable<HttpEvent<any>>(subscriber => subscriber.error(error));
        })
      );
    }
  }

  // ...



  getCookie(name: string): string | null {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
}