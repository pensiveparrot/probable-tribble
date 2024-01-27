import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './common/service/userservice'; // Import UserService

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private router: Router, private userService: UserService) { } // Inject UserService

  canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    return this.userService.getUser().pipe(
      map(response => {
        console.log('User status:', response.status); // Log user status
        if (response.status === 200) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}