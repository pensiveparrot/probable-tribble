import { Component } from '@angular/core';
import { Product } from './objects/product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  showText: boolean =false;
  hidden: boolean = false;
  ngOnInit(): void {
    setTimeout(() => {this.hidden=true}, 3000);
    setTimeout(() => {
      this.showText=true;
    }, 4000);
  }
products: Product[] = [ { name: 'Shirt', price: 30, inventoryStatus:'In Stock', image: 'assets/products/1.jpg',productLink:'https://buy.stripe.com/test_8wM5mQcoKcxhdHOcMM' }, { name: 'Jeans', price: 50, inventoryStatus:'Out of Stock', image: '../assets/products/2.jpg',productLink:'' }, { name: 'Sneakers', price: 60, inventoryStatus:'Low Stock', image: '../assets/products/3.jpg',productLink:'' }];


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
 return status === "Out of Stock";
}
onClick(productLink:string){
  if(productLink!='')
  window.open(productLink,"_self");
}
}
