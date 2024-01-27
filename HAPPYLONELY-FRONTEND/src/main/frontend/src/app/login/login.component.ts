import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Message } from 'primeng/api';

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

  constructor(private http: HttpClient) { }
  login() {
    const url = `https://${window.location.hostname}:8443/login`;
    this.http.post(url, { username: this.username, password: this.password })
      .subscribe({
        next: () => {
          this.failedAttempts = 0;
          this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Login successful' });
        },
        error: () => {
          this.failedAttempts++;
          if (this.failedAttempts === 1) {
            this.firstFailedAttempt = new Date();
          }
          this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Login failed. Please try again.' });
        }
      });
  }
}