import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from './common/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth: AuthService, private router: Router) { }
  userAuthenticated(): boolean {
    return this.auth.loggedIn();
  }
}
