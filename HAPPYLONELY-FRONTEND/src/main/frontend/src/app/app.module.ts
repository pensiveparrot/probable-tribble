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
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { CsrfInterceptor } from './csrf-interceptor.guard';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { UserComponent } from './user/user.component';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YoutubeDLComponent } from './youtube-dl/youtube-dl.component';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';
import { ThreadCreateComponent } from './thread-create/thread-create.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    ImageModule,
    GalleriaModule,
    DialogModule,
    ButtonModule,
    CarouselModule,
    TagModule,
    InputTextModule,
    InputTextareaModule,
    MessagesModule,
    CardModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    FileUploadModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),

  ],

  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CsrfInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
