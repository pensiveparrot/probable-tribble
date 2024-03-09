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

  constructor(private authService: AuthService, private router: Router) {
    this.getUserRole();
  }

  async ngOnInit() {
  }

  getUserRole() {
    this.authService.getUserRole().subscribe({
      next: (response) => {
        console.log(response);
        if (response >= 5) {
          console.log("data: " + JSON.stringify(response));
          this.items = [
            { icon: 'pi pi-home', routerLink: 'home' },
            { icon: 'pi pi-shopping-bag', routerLink: 'shop' },
            { icon: 'pi pi-pencil', routerLink: 'art' },
            { icon: 'pi pi-user', routerLink: 'user' },
            { icon: 'pi pi-youtube', routerLink: 'youtube-dl' },
            { icon: 'pi pi-lock', routerLink: 'admin' }
          ];
        }
        else if (response > 2 && response < 5) {
          this.items = [
            { icon: 'pi pi-home', routerLink: 'home' },
            { icon: 'pi pi-shopping-bag', routerLink: 'shop' },
            { icon: 'pi pi-pencil', routerLink: 'art' },
            { icon: 'pi pi-user', routerLink: 'user' },
            { icon: 'pi pi-youtube', routerLink: 'youtube-dl' }
          ];
        }
      },
      error: (error) => {
        console.error("An error occurred:", error);
      }
    });
  }
}