import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Message } from 'primeng/api';
import { LoginRequest } from './LoginRequest';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Util } from '../common/util/util';

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
  async login() {
    const url = `https://${window.location.hostname}:8443/login`;
    const loginRequest: LoginRequest = {
      username: this.username,
      password: this.password,
      token: ''
    };
    try {
      const response: any = await firstValueFrom(this.http.post(url, loginRequest));
      if (response.token) {
        localStorage.setItem('token', response.token);
        this.failedAttempts = 0;
        this.msgs = [{ severity: 'success', summary: 'Success Message', detail: 'Login successful.' }];
        this.router.navigate(['home']);
      }
      else {
        this.failedAttempts++;
        switch (this.failedAttempts) {
          case 1:
            this.firstFailedAttempt = new Date();
            this.msgs = [{ severity: 'error', summary: 'Error Message', detail: 'Login failed. Please try again.' }];
            break;
          case 10:
            Util.setDelay(600);
            this.msgs = [{ severity: 'error', summary: 'Error Message', detail: 'Timed out for 10 minutes.  Please wait for new login attempt' }];
            break;
          default:
            const numFailedAttemptsLeft = 10 - this.failedAttempts;
            const errorMsg = ("You have " + numFailedAttemptsLeft + " attempts left until you are temporarily blocked from logging in.").toString();
            this.msgs = [{ severity: 'error', summary: 'Error Message', detail: errorMsg }];
            break;

        }
      }
    } catch (error) {
      console.error(error);
    }
  }
}