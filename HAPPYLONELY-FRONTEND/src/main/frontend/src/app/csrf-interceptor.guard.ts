import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class CsrfInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const csrfToken = this.getCookie("XSRF-TOKEN");
    if (csrfToken) {
      req = req.clone({
        withCredentials: true,
        headers: req.headers.set('X-XSRF-TOKEN', csrfToken)
      });
    }

    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status === 200 && (req.url.includes('/login') || req.url.includes('/register'))) {
          this.router.navigate(['home']);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.log('Redirecting to login page');
          this.router.navigate(['login']);
        }
        return throwError(error);
      })
    );
  }

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