import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterRequest } from './RegisterRequest';
import { Message } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Util } from '../common/util/util';

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

  async onSubmit(): Promise<void> {
    if (this.registerForm.valid) {
      const url = `https://${window.location.hostname}:8443/register`;
      const registerRequest: RegisterRequest = {
        username: this.registerForm.get('username')?.value,
        password: this.registerForm.get('password')?.value,
        email: this.registerForm.get('email')?.value
      };
      try {
        const response: any = await firstValueFrom(this.http.post(url, registerRequest));
        if (response.id) {
          this.failedAttempts = 0;
          this.msgs = [{ severity: 'success', summary: 'Success Message', detail: 'Register successful.  You may now login' }];
          Util.setDelay(2);
          this.router.navigate(['login']);
        }
        else {
          this.failedAttempts++;
          switch (this.failedAttempts) {
            case 1:
              this.firstFailedAttempt = new Date();
              this.msgs = [{ severity: 'error', summary: 'Error Message', detail: 'Registration failed. Please try again.' }];
              break;
            case 10:
              Util.setDelay(600);
              this.msgs = [{ severity: 'error', summary: 'Error Message', detail: 'Timed out for 10 minutes.  Please wait for new registration attempt' }];
              break;
            default:
              const numFailedAttemptsLeft = 10 - this.failedAttempts;
              const errorMsg = ("You have " + numFailedAttemptsLeft + " attempts left until you are temporarily blocked from registering.").toString();
              this.msgs = [{ severity: 'error', summary: 'Error Message', detail: errorMsg }];
              break;

          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
}