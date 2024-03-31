import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../common/service/auth.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'HAPPYLONELY';
  items: MenuItem[] = [
    { icon: 'pi pi-home', routerLink: 'home' },
    { icon: 'pi pi-comments', routerLink: 'threads' },
    { icon: 'pi pi-shopping-bag', routerLink: 'shop' },
    { icon: 'pi pi-pencil', routerLink: 'art' },
    { icon: 'pi pi-user', routerLink: 'user' },
    { icon: 'pi pi-youtube', routerLink: 'youtube-dl' }
  ];

  constructor(private authService: AuthService, private router: Router) { }

  async ngOnInit() {
    await this.getUserRole();
  }

  async getUserRole() {
    try {
      const response: any = await firstValueFrom(this.authService.getUserRole());
      console.log(response);
      if (response >= 5) {
        this.items = [
          { icon: 'pi pi-home', routerLink: 'home' },
          { icon: 'pi pi-comments', routerLink: 'threads' },
          { icon: 'pi pi-shopping-bag', routerLink: 'shop' },
          { icon: 'pi pi-pencil', routerLink: 'art' },
          { icon: 'pi pi-user', routerLink: 'user' },
          { icon: 'pi pi-youtube', routerLink: 'youtube-dl' },
          { icon: 'pi pi-lock', routerLink: 'admin' }
        ];
      }
    }
    catch (error) {
      console.error(error);
    }

  }
}