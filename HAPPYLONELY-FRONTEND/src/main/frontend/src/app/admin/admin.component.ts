import { Component } from '@angular/core';
import { ProductService } from '../shop/product/product.service';
import { Message } from 'primeng/api';
import { UserService } from '../common/service/userservice';
import { firstValueFrom } from 'rxjs';

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
  product: any = { id: "", productname: "", price: 0, image: "", inventorystatus: "", shoplink: "" };
  user: any = { id: "", username: "", statusmsg: "", profileimg: "" };

  inventoryStatusOptions = [
    { label: 'In Stock', value: 'INSTOCK' },
    { label: 'Low Stock', value: 'LOWSTOCK' },
    { label: 'Out of Stock', value: 'OUTOFSTOCK' }
  ];
  constructor(private productService: ProductService, private userService: UserService) { }

  get buttonLabel(): string {
    return `Update: ${this.product.productname}`;
  }

  async getProductByName() {
    this.bFindClicked = true;
    this.bCreateClicked = false;
    try {
      const response = await firstValueFrom(this.productService.getProductByName(this.product.productname));
      this.statusCode = response.status!;
      if (this.statusCode === 200) {
        this.product = response.body!;
        console.log("product: ", this.product);
      }
      else {
        if (this.errorMsg.length > 0)
          this.errorMsg.pop();
        this.errorMsgDetail = "Error getting product with name: " + this.product.productname + ".  Response code: " + this.statusCode;
        this.errorMsg.push({ severity: 'error', summary: 'Error', detail: this.errorMsgDetail });
      }
      console.log("status: ", this.statusCode);
    } catch (error) {
      console.error(error);
    }
  }

  onCreateButtonPressed() {
    this.bCreateClicked = true;
    this.bFindClicked = false;
  }
  async createProduct() {
    try {
      const response: any = await firstValueFrom(this.productService.addProduct(this.product!));
      this.statusCode = response.status!;
      if (this.statusCode === 200) {
        this.product = response.body!;
        console.log("product: ", this.product!);
      }
      else {
        if (this.errorMsg.length > 0)
          this.errorMsg.pop();
        this.errorMsgDetail = "Error adding product with name: " + this.product.productname + ".  Response code: " + this.statusCode;
        this.errorMsg.push({ severity: 'error', summary: 'Error', detail: this.errorMsgDetail });

      }
      console.log("status code:", this.statusCode);
    }
    catch (error) {
      console.error(error);
    }
  }

  async updateProduct() {
    try {
      const response: any = await firstValueFrom(this.productService.updateProduct(this.product!));
      this.statusCode = response.status!;
      if (this.statusCode === 200) {
        this.product = response.body!;
        console.log("product: ", this.product!);
      }
      else {
        if (this.errorMsg.length > 0)
          this.errorMsg.pop();
        this.errorMsgDetail = "Error updating product with id: " + this.product.id + ".  Response code: " + this.statusCode;
        this.errorMsg.push({ severity: 'error', summary: 'Error', detail: this.errorMsgDetail });
      }
    }
    catch (error) {
      console.error(error);
    }
  }

  async addProduct() {
    try {
      const response: any = firstValueFrom(this.productService.addProduct(this.product!));
      this.statusCode = response.status!;
      if (this.statusCode === 200) {
        this.product = response.body!;
        console.log("product: ", this.product!);
      }
      else {
        if (this.errorMsg.length > 0)
          this.errorMsg.pop();
        this.errorMsgDetail = "Error adding product with name: " + this.product.productname + ".  Response code: " + this.statusCode;
        this.errorMsg.push({ severity: 'error', summary: 'Error', detail: this.errorMsgDetail });
      }
    } catch (error) {
      console.error(error);
    }
  }

  async deleteUser() {
    try {
      const response: any = await firstValueFrom(this.userService.deleteUser(this.user.id!));
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  updateUser() {
    try {
      const response: any = firstValueFrom(this.userService.updateUser(this.user!));
      this.statusCode = response.status;
      if (this.statusCode === 200) {
        this.user = response.body!;
        console.log("user: ", this.user!);
      }
      else {
        if (this.errorMsg.length > 0)
          this.errorMsg.pop();
        this.errorMsgDetail = "Error updating user with id: " + this.user.id + ".  Response code: " + this.statusCode;
        this.errorMsg.push({ severity: 'error', summary: 'Error', detail: this.errorMsgDetail });
      }
      console.log("status: ", this.statusCode!);
    } catch (error) {
      console.error(error);

    }
  }

  async banUser() {
    try {
      const response: any = await firstValueFrom(this.userService.banUser(this.user!));
      this.statusCode = response.status!;
      if (this.statusCode === 200) {
        this.user = response.body!;
        console.log("user: ", this.user!);
      }
      else {
        if (this.errorMsg.length > 0)
          this.errorMsg.pop();
        this.errorMsgDetail = "Error banning user with id: " + this.user.id + ".  Response code: " + this.statusCode;
        this.errorMsg.push({ severity: 'error', summary: 'Error', detail: this.errorMsgDetail });
      } console.log("status: ", this.statusCode!);
    } catch (error) {
      console.error(error);
    }
  }

  async unbanUser() {
    try {
      const response: any = await firstValueFrom(this.userService.unbanUser(this.user!));
      this.statusCode = response.status!;
      if (this.statusCode === 200) {
        this.user = response.body!;
        console.log("user: ", this.user!);
      } else {
        if (this.errorMsg.length > 0)
          this.errorMsg.pop();
        this.errorMsgDetail = "Error adding product with name: " + this.product.productname + ".  Response code: " + this.statusCode;
        this.errorMsg.push({ severity: 'error', summary: 'Error', detail: this.errorMsgDetail });
      }
      console.log("status: ", this.statusCode!);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteProduct() {
    try {
      const response: any = await firstValueFrom(this.productService.deleteProduct(this.product.id!));
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}

