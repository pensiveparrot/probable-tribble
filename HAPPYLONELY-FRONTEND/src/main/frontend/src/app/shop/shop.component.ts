import { Component, OnInit } from '@angular/core';
import { Product } from './objects/product';
import { ProductService } from './product/product.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  showText: boolean =false;
  hidden: boolean = false;
  products: Product[] = [ ];
  product:any = {id:0,productname:"",price:0,image:"",inventorystatus:"",shoplink:""};

  constructor(private productService:ProductService){}
  ngOnInit(): void {
    setTimeout(() => {this.hidden=true}, 3000);
    setTimeout(() => {
      this.showText=true;
    }, 4000);
  //   this.productService.getProductById(1).subscribe((data) =>{
  //       if(data && data.id > 0) {
  //       this.product.id = data.id;
  //       this.product.productname = data.productname;
  //       this.product.price = data.price;
  //       this.product.inventorystatus = data.inventorystatus; 
  //       this.product.image = data.image;
  //       this.product.shoplink = data.shoplink;
  //       }

  //   console.log("product: "+JSON.stringify(this.product));
  //   this.products.push(this.product);
   
  // });
  this.loadAllProducts();
  
}

loadAllProducts(){
  return new Promise((resolve, reject) => {
      this.productService.getAllProducts().subscribe((data) =>{
        if(data && data.length > 0) {
          data.forEach((product: any) => {
          product.id = product.id;
          product.productname = product.productname;
          product.price = product.price;
          product.inventorystatus = product.inventorystatus;
          product.image = product.image;
          product.shoplink = product.shoplink;
          this.products.push(product);
          });}
    console.log("products: "+JSON.stringify(this.products));
    resolve(data);
  });
  });
}
loadProduct(){
  return new Promise((resolve, reject) => {
      this.productService.getProductById(1).subscribe((data) =>{
        if(data && data.id > 0) {
        this.product.id = data.id;
        this.product.productname = data.productname;
        this.product.price = data.price;
        this.product.inventorystatus = data.inventorystatus; 
        this.product.image = data.image;
        this.product.shoplink = data.shoplink;
        }

    console.log("product: "+JSON.stringify(this.product));
    this.products.push(this.product);
    resolve(data);
  });
  });
}
// loadProduct(): Promise<any> {
//   return new Promise((resolve, reject) => {
//     this.productService.getProductById(1).subscribe({
//       next: (data: any) => {
//         resolve(data);
//       },
//       error: (error: any) => {
//         reject(error);
//       }
//     });
//     }
//     );
 //products: Product[] = [ { name: 'Shirt', price: 30, inventoryStatus:'In Stock', image: 'assets/products/1.jpg',productLink:'https://buy.stripe.com/test_8wM5mQcoKcxhdHOcMM' }, { name: 'Jeans', price: 50, inventoryStatus:'Out Of Stock', image: '../assets/products/2.jpg',productLink:'' }, { name: 'Sneakers', price: 60, inventoryStatus:'Low Stock', image: '../assets/products/3.jpg',productLink:'' }];
// }
// loadProduct(): Promise<any> {
//   return new Promise((resolve, reject) => {
//     this.productService.getProductById(1).subscribe(
//       data => resolve(data),
//       error => reject(error)
//     );
//   });
// }
responsiveOptions: any[] = [ { breakpoint: '1024px', numVisible: 3, numScroll: 3 }, { breakpoint: '768px', numVisible: 2, numScroll: 2 }, { breakpoint: '560px', numVisible: 1, numScroll: 1 } ];
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
setDisabled(status: string){
 return status === "Out Of Stock";
}
onClick(productLink:string){
  if(productLink!='')
  window.open(productLink,"_self");
}
}
