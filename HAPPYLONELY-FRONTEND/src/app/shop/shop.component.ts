import { Component, OnInit } from '@angular/core';
import { Product } from './objects/product';
import { ProductService } from './product/product.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  product: any = { id: "", productname: "", price: 0, image: "", inventorystatus: "", shoplink: "", isFavorite: false, rating: 0 };

  constructor(private productService: ProductService) { }

  async ngOnInit() {
    await this.loadAllProducts();
  }

  async loadAllProducts() {
    try {
      let product: Product;
      const response: any = await firstValueFrom(this.productService.getAllProducts());
      if (response && response.length > 0) {
        response.forEach((curProduct: any) => {
          product.id = curProduct.id!;
          product.productname = curProduct.productname!;
          product.price = curProduct.price!;
          product.inventorystatus = curProduct.inventorystatus!;
          product.image = curProduct.image!;
          product.shoplink = curProduct.shoplink!;
          product.isFavorite = curProduct.isFavorite!;
          product.rating = curProduct.rating!;
          this.products.push(product);
        });
        console.log("products: ", this.products);
      }
    } catch (error) {
      console.error(error);
    }

  }

  async loadProduct() {
    try {
      const response: any = await firstValueFrom(this.productService.getProductById(1));
      if (response && response.id > 0) {
        this.product.id = response.id!;
        this.product.productname = response.productname!;
        this.product.price = response.price;
        this.product.inventorystatus = response.inventorystatus;
        this.product.image = response.image;
        this.product.shoplink = response.shoplink;
        this.product.isFavorite = false;
        this.product.rating = Math.floor(Math.random() * 5) + 1; // Simulate random rating
        console.log("product: ", JSON.stringify(this.product!));
      }
    } catch (error) {
      console.error(error);
    }
  }

  responsiveOptions: any[] = [
    { breakpoint: '1024px', numVisible: 3, numScroll: 3 },
    { breakpoint: '768px', numVisible: 2, numScroll: 2 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 }
  ];

  getSeverity(status: string) {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Low Stock':
        return 'warning';
      case 'Out Of Stock':
        return 'danger';
      default:
        return 'medium';
    }
  }

  setDisabled(status: string) {
    return status === "Out Of Stock";
  }

  onClick(productLink: string) {
    if (productLink != '')
      window.open(productLink, "_self");
  }

  toggleFavorite(product: Product) {
    product.isFavorite = !product.isFavorite;
  }
}