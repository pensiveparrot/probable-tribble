import { Component } from '@angular/core';
import { ProductService } from '../shop/product/product.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  errorMsgDetail: string = "";
  bFindClicked: boolean = false;
  bCreateClicked: boolean = false;
  errorMsg: Message[] = [];
  statusCode: number = 0;
  product:any = {id:0,productname:"",price:0,image:"",inventorystatus:"",shoplink:""};
 
  constructor(private productService: ProductService) { }

  get buttonLabel(): string {
    return `Update: ${this.product.productname}`;
  }

  getProductByName(){
    this.bFindClicked = true;
    this.bCreateClicked = false;
    return new Promise((resolve,reject) => {
    this.productService.getProductByName(this.product.productname).subscribe({next: (response) => {
      this.statusCode = response.status;
      this.product = response.body;
      console.log("product: " + JSON.stringify(this.product));
      console.log("status code: " + this.statusCode);
      resolve(this.product);
    },
    error: (error) => {
      this.statusCode = error.status;
      console.error("An error occurred:", error);
      console.log("status code: " + this.statusCode);
      this.errorMsgDetail = "Error getting product with name: "+this.product.productname +".  Response code: " + this.statusCode;
      this.errorMsg.pop();
      this.errorMsg.push({severity:'error', summary:'Error', detail:this.errorMsgDetail});
      reject(error);
    }
  });
  });
  }

onCreateButtonPressed(){
  this.bCreateClicked = true;
  this.bFindClicked = false;
}
createProduct(){
  return new Promise((resolve,reject) => {
  this.productService.addProduct(this.product).subscribe({next: (response) => {
    this.statusCode = response.status;
    this.product = response.body;
    console.log("product: " + JSON.stringify(this.product));
    console.log("status code: " + this.statusCode);
    resolve(this.product);
  },error: (error) => {
    this.statusCode = error.status;
    console.error("An error occurred:", error);
    console.log("status code: " + this.statusCode);
    this.errorMsgDetail = "Error adding product with name: "+this.product.productname +".  Response code: " + this.statusCode;
    this.errorMsg.pop();
    this.errorMsg.push({severity:'error', summary:'Error', detail:this.errorMsgDetail});
    reject(error);
  }});}
  );
}
  
  updateProduct(){
    return new Promise((resolve,reject) => {
    this.productService.updateProduct(this.product).subscribe({next: (response) => {
      this.statusCode = response.status;
      this.product = response.body;
      console.log("product: " + JSON.stringify(this.product));
      console.log("status code: " + this.statusCode);
      resolve(this.product);
    },error: (error) => {
      this.statusCode = error.status;
      console.error("An error occurred:", error);
      console.log("status code: " + this.statusCode);
      this.errorMsgDetail = "Error updating product with id: "+this.product.id +".  Response code: " + this.statusCode;
      this.errorMsg.pop();
      this.errorMsg.push({severity:'error', summary:'Error', detail:this.errorMsgDetail});
      reject(error);
    }});});
  }

  addProduct(){
  return new Promise((resolve,reject) => {
  this.productService.addProduct(this.product).subscribe({next: (response) => {
    this.statusCode = response.status;
    this.product = response.body;
    console.log("product: " + JSON.stringify(this.product));
    console.log("status code: " + this.statusCode);
    resolve(this.product);
  },error: (error) => {
    this.statusCode = error.status;
    console.error("An error occurred:", error);
    console.log("status code: " + this.statusCode);
    this.errorMsgDetail = "Error adding product with name: "+this.product.productname +".  Response code: " + this.statusCode;
    this.errorMsg.pop();
    this.errorMsg.push({severity:'error', summary:'Error', detail:this.errorMsgDetail});
    reject(error);
  }});}
  );
  
}
}
