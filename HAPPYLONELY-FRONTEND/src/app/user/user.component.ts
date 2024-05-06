import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/service/userservice';
import { HLUser } from '../home/hluser';
import { Message } from 'primeng/api';
import { AuthService } from '../common/service/auth.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService, private authService: AuthService) { }
  user: HLUser = { id: "", username: "", statusmsg: "", profileimg: "" };
  updatedUser: HLUser = { id: "", username: "", statusmsg: "", profileimg: "" };
  statusCode: number = 0;
  errorMsgDetail: string = "";
  errorMsg: Message[] = [];
  ngOnInit(): void {

  }
  async getUser() {
    try {
      const response: any = await firstValueFrom(this.userService.getUser());
      this.statusCode = response.status!;
      if (this.statusCode === 200) {
        this.user = response.body!;
        console.log("user: ", this.user!);
      }
      else {
        if (this.errorMsg.length > 0)
          this.errorMsg.pop();
        this.errorMsgDetail = "Error getting user.  Response code: " + this.statusCode;
        this.errorMsg.push({ severity: 'error', summary: 'Error', detail: this.errorMsgDetail });
      }
    } catch (error) {
      console.error(error);
    }
  }

  async updateUser() {
    try {
      await this.getUser();
      if (this.user !== null) {
        this.updatedUser.username = this.user.username;
        this.updatedUser.id = this.user.id;
      }
      const response: any = await firstValueFrom(this.userService.editUser(this.updatedUser!));
      this.statusCode = response.status;
      if (this.statusCode === 200) {
        this.updatedUser = response.body!;
        console.log("user: ", this.updatedUser);
      }
      else {
        if (this.errorMsg.length > 0)
          this.errorMsg.pop();
        this.errorMsgDetail = "Error updating user with id: " + this.updatedUser.id + ".  Response code: " + this.statusCode;
        this.errorMsg.push({ severity: 'error', summary: 'Error', detail: this.errorMsgDetail });
      }
    } catch (error) {
      console.error(error);
    }
  }
  async changeEmail() {
    this.userService.changeEmail(this.updatedUser).subscribe({
      next: (response: { status: number; body: HLUser; }) => {
        this.statusCode = response.status;
        this.updatedUser = response.body;
        console.log("user: " + JSON.stringify(this.updatedUser));
        console.log("status code: " + this.statusCode);
      }, error: (error: { status: number; }) => {
        this.statusCode = error.status;
        console.error("An error occurred:", error);
        console.log("status code: " + this.statusCode);
        this.errorMsgDetail = "Error updating user with id: " + this.updatedUser.id + ".  Response code: " + this.statusCode;
        this.errorMsg.pop();
        this.errorMsg.push({ severity: 'error', summary: 'Error', detail: this.errorMsgDetail });
      }
    });
  }
}
