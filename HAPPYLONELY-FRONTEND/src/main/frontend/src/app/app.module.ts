import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtComponent } from './art/art.component';
import { HomeComponent } from './home/home.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import {DialogModule} from 'primeng/dialog';
import { ShopComponent } from './shop/shop.component';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {TagModule} from 'primeng/tag';
import { ProductService } from './shop/product/product.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ArtComponent,
    HomeComponent,
    ShopComponent
    
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
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
