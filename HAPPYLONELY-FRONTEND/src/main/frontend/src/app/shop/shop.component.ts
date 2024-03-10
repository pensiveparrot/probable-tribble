import { Component, OnInit } from '@angular/core';
import { Product } from './objects/product';
import { ProductService } from './product/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  product: any = { id: "", productname: "", price: 0, image: "", inventorystatus: "", shoplink: "" };

  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts() {
    return new Promise((resolve, reject) => {
      this.productService.getAllProducts().subscribe((data) => {
        if (data && data.length > 0) {
          data.forEach((product: any) => {
            product.id = product.id;
            product.productname = product.productname;
            product.price = product.price;
            product.inventorystatus = product.inventorystatus;
            product.image = product.image;
            product.shoplink = product.shoplink;
            this.products.push(product);
          });
        }
        console.log("products: " + JSON.stringify(this.products));
        resolve(data);
      });
    });
  }
  loadProduct() {
    return new Promise((resolve, reject) => {
      this.productService.getProductById(1).subscribe((data) => {
        if (data && data.id > 0) {
          this.product.id = data.id;
          this.product.productname = data.productname;
          this.product.price = data.price;
          this.product.inventorystatus = data.inventorystatus;
          this.product.image = data.image;
          this.product.shoplink = data.shoplink;
        }

        console.log("product: " + JSON.stringify(this.product));
        this.products.push(this.product);
        resolve(data);
      });
    });
  }

  responsiveOptions: any[] = [{ breakpoint: '1024px', numVisible: 3, numScroll: 3 }, { breakpoint: '768px', numVisible: 2, numScroll: 2 }, { breakpoint: '560px', numVisible: 1, numScroll: 1 }];
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
}
