import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HAPPYLONELY';
  items: MenuItem[] = [];
  activeItem!: MenuItem;

  ngOnInit() {
    this.items.push({ label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['home'] });
    this.items.push({ label: 'Shop', icon: 'pi pi-fw pi-shopping-bag', routerLink: ['shop'] });
    this.items.push({ label: 'Art', icon: 'pi pi-fw pi-pencil', routerLink: ['art'] });
    this.items.push({ label: 'Admin', icon: 'pi pi-fw pi-user', routerLink: ['admin'] });
    this.items.push({ label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['login'] });
    this.activeItem = this.items[0];
  }

}
