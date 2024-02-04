import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterRequest } from './RegisterRequest';
import { Message } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  email!: string;
  username!: string;
  password!: string;
  failedAttempts: number = 0;
  msgs: Message[] = [];
  firstFailedAttempt!: Date;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {

  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const url = `https://${window.location.hostname}:8443/register`;
      const registerRequest: RegisterRequest = {
        username: this.registerForm.get('username')?.value,
        password: this.registerForm.get('password')?.value,
        email: this.registerForm.get('email')?.value
      };
      this.http.post(url, registerRequest)
        .subscribe({
          next: () => {
            this.failedAttempts = 0;
            this.msgs = [{ severity: 'success', summary: 'Success Message', detail: 'Register successful.  You may now login' }];
            this.router.navigate(['login']);
          },
          error: () => {
            this.failedAttempts++;
            if (this.failedAttempts === 1) {
              this.firstFailedAttempt = new Date();
            }
            this.msgs = [{ severity: 'error', summary: 'Error Message', detail: 'Register failed. Please try again.' }];
          }
        });
    }
  }
}
