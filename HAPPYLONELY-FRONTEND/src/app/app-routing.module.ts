import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtComponent } from './art/art.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { YoutubeDLComponent } from './youtube-dl/youtube-dl.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { ThreadCreateComponent } from './thread-create/thread-create.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'art', component: ArtComponent, canActivate: [authGuard] },
  { path: 'shop', component: ShopComponent, canActivate: [authGuard] },
  { path: 'user', component: UserComponent, canActivate: [authGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [authGuard] },
  { path: 'youtube-dl', component: YoutubeDLComponent, canActivate: [authGuard] },
  { path: 'threads', component: ThreadListComponent, canActivate: [authGuard] },
  { path: 'create-thread', component: ThreadCreateComponent, canActivate: [authGuard] },
  { path: 'thread/:id', component: ThreadDetailComponent, canActivate: [authGuard] },
  { path: 'header', component: HeaderComponent, canActivate: [authGuard] },
  { path: "**", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
