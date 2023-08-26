import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class CsrfInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const csrfToken = this.getCookie("XSRF-TOKEN");  // assuming you have a method to get the cookie

    if (csrfToken) {
      const clonedRequest = req.clone({
        headers: req.headers.set('X-XSRF-TOKEN', csrfToken)
      });
      return next.handle(clonedRequest);
    } else {
      return next.handle(req);
    }
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
