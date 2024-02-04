import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtComponent } from './art/art.component';
import { HomeComponent } from './home/home.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { DialogModule } from 'primeng/dialog';
import { ShopComponent } from './shop/shop.component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { UserComponent } from './user/user.component';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YoutubeDLComponent } from './youtube-dl/youtube-dl.component';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';
import { ThreadCreateComponent } from './thread-create/thread-create.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { HeaderComponent } from './header/header.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MessageModule } from 'primeng/message';
export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    ArtComponent,
    HomeComponent,
    ShopComponent,
    AdminComponent,
    UserComponent,
    YoutubeDLComponent,
    ThreadListComponent,
    ThreadDetailComponent,
    ThreadCreateComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule, ToastModule,
    ImageModule,
    GalleriaModule,
    DialogModule,
    ButtonModule,
    CarouselModule,
    TagModule, MessageModule,
    InputTextModule,
    InputTextareaModule,
    MessagesModule,
    CardModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    FileUploadModule,
    TableModule,
    ToolbarModule,
    HttpClientModule, ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['https://localhost:8443'],  // replace with your API domain
        disallowedRoutes: []  // optional, routes that don't need the token
      }
    })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
