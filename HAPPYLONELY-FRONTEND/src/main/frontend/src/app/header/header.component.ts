import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../common/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'HAPPYLONELY';
  items: MenuItem[] = [];
  activeItem!: MenuItem;
  constructor(private authService: AuthService, private router: Router) {
    this.getUserRole();
  }
  async ngOnInit() {

  }
  getUserRole() {
    this.authService.getUserRole().subscribe({
      next: (response) => {
        console.log(response);
        if (response > 5) {
          console.log("data: " + JSON.stringify(response));
          this.items = [
            { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['home'] },
            { label: 'Shop', icon: 'pi pi-fw pi-shopping-bag', routerLink: ['shop'] },
            { label: 'Art', icon: 'pi pi-fw pi-pencil', routerLink: ['art'] },
            { label: 'User', icon: 'pi pi-fw pi-user', routerLink: ['user'] },
            { label: 'Download YouTube', icon: 'pi pi-fw pi-youtube', routerLink: ['youtube-dl'] },
            { label: 'Admin', icon: 'pi pi-fw pi-user', routerLink: ['admin'] }
          ];
        }
      },
      error: (error) => {
        console.error("An error occurred:", error);
      }
    });
  }
}
