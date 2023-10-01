import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/service/userservice';
import { HLUser } from '../home/hluser';
import { Message } from 'primeng/api';
import { AuthService } from '../common/service/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService, private authService: AuthService) { }
  user: HLUser = { id: 0, username: "", statusmsg: "", profileimg: "" };
  updatedUser: HLUser = { id: 0, username: "", statusmsg: "", profileimg: "" };
  statusCode: number = 0;
  errorMsgDetail: string = "";
  errorMsg: Message[] = [];
  ngOnInit(): void {

  }
  async getUser() {
    return new Promise((resolve, reject) => {
      this.userService.getUser().subscribe({
        next: (response) => {
          this.statusCode = response.status;
          this.user = response.body;
          console.log("user: " + JSON.stringify(this.user));
          console.log("status code: " + this.statusCode);
          resolve(this.user);
        }, error: (error) => {
          this.statusCode = error.status;
          console.error("An error occurred:", error);
          console.log("status code: " + this.statusCode);
          this.errorMsgDetail = "Error getting user.  Response code: " + this.statusCode;
          this.errorMsg.pop();
          this.errorMsg.push({ severity: 'error', summary: 'Error', detail: this.errorMsgDetail });
          reject(error);
        }
      });
    });
  }
  async updateUser() {
    await this.getUser();
    if (this.user !== null) {
      this.updatedUser.username = this.user.username;
      this.updatedUser.id = this.user.id;
    }
    return new Promise((resolve, reject) => {
      this.userService.editUser(this.updatedUser).subscribe({
        next: (response) => {
          this.statusCode = response.status;
          this.updatedUser = response.body;
          console.log("user: " + JSON.stringify(this.updatedUser));
          console.log("status code: " + this.statusCode);
          resolve(this.updatedUser);
        }, error: (error) => {
          this.statusCode = error.status;
          console.error("An error occurred:", error);
          console.log("status code: " + this.statusCode);
          this.errorMsgDetail = "Error updating user with id: " + this.updatedUser.id + ".  Response code: " + this.statusCode;
          this.errorMsg.pop();
          this.errorMsg.push({ severity: 'error', summary: 'Error', detail: this.errorMsgDetail });
          reject(error);
        }
      });
    });
  }
}
