import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './common/service/userservice';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      this.userService.isAuthenticated().subscribe({
        next: (response) => {
          console.log(response);
          if (response.status == 200) {
            console.log("data: " + JSON.stringify(response));
            resolve(true);
          } else {
            this.router.navigate(['login']);
            reject(false);
          }
        },
        error: (error) => {
          console.error("An error occurred:", error);
          this.router.navigate(['login']);
          reject(false);
        }
      });
    });
  }
}