import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router'; // Import CanActivate
import { of } from 'rxjs'; // Import Observable
import { map, catchError } from 'rxjs/operators'; // Import operators
import { UserService } from './common/service/userservice';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard { // Implement CanActivate interface

  constructor(private userService: UserService, private router: Router) { }

  canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
    return this.userService.isAuthenticated().pipe(
      map((response) => {
        if (response.status == 200) {
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      }),
      catchError((error) => {
        this.router.navigate(['login']);
        return of(false);
      })
    );
  }
  /*
  return new Observable((observer) => {
    this.userService.isAuthenticated().subscribe({
      next: (response) => {
        if (response.status == 200) {
          observer.next(true);
        } else {
          this.router.navigate(['login']);
          observer.next(false);
        }
        observer.complete();
      },
      error: () => {
        this.router.navigate(['login']);
        observer.next(false);
        observer.complete();
      }
    });
  });
}*/
}