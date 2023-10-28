import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from './common/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HAPPYLONELY';
  items: MenuItem[] = [];
  activeItem!: MenuItem;
  constructor(private authService: AuthService) { }
  async ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['home'] },
      { label: 'Shop', icon: 'pi pi-fw pi-shopping-bag', routerLink: ['shop'] },
      { label: 'Art', icon: 'pi pi-fw pi-pencil', routerLink: ['art'] },
      { label: 'User', icon: 'pi pi-fw pi-user', routerLink: ['user'] },
      { label: 'YoutubeDL', icon: 'pi pi-fw pi-music', routerLink: ['youtube-dl'] },
    ];

    try {
      await this.getUserRole();
    } catch (error) {
      console.error('An error occurred:', error);
    }

    console.log("Items after getUserRole:", this.items);
    this.activeItem = this.items[0];
  }
  getUserRole() {
    return new Promise((resolve, reject) => {
      this.authService.getUserRole().subscribe((data) => {
        if (data == 5) {
          console.log("data: " + JSON.stringify(data));
          this.items = [{ label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['home'] },
          { label: 'Shop', icon: 'pi pi-fw pi-shopping-bag', routerLink: ['shop'] },
          { label: 'Art', icon: 'pi pi-fw pi-pencil', routerLink: ['art'] }, { label: 'User', icon: 'pi pi-fw pi-user', routerLink: ['user'] },
          { label: 'YoutubeDL', icon: 'pi pi-fw pi-music', routerLink: ['youtube-dl'] },
          { label: 'Admin', icon: 'pi pi-fw pi-user', routerLink: ['admin'] }];
          resolve(this.items);
        }
        else {
          reject("error");
        }
      })
    });
  }



}
