import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Message } from 'primeng/api';
import { LoginRequest } from './LoginRequest';
import { UserService } from '../common/service/userservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  failedAttempts: number = 0;
  firstFailedAttempt!: Date;
  msgs: Message[] = [];

  constructor(private http: HttpClient, private router: Router) { }
  login() {
    const url = `https://${window.location.hostname}:8443/login`;
    const loginRequest: LoginRequest = {
      username: this.username,
      password: this.password,
      token: ''
    };
    this.http.post(url, loginRequest)
      .subscribe({
        next: (response: any) => {
          // Store the token in the local storage
          localStorage.setItem('token', response.token);

          this.failedAttempts = 0;
          this.msgs = [{ severity: 'success', summary: 'Success Message', detail: 'Login successful.' }];
          this.router.navigate(['home']);
        },
        error: () => {
          this.failedAttempts++;
          if (this.failedAttempts === 1) {
            this.firstFailedAttempt = new Date();
          }
          this.msgs = [{ severity: 'error', summary: 'Error Message', detail: 'Login failed. Please try again.' }];
        }
      });
  }
}