import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Image } from 'primeng/image';


import { ChatService } from './chat.service';
import { Message } from './message';
import { HLUser } from './hluser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Messages: Message[] = [];
  newMessageContent: string = '';
  hidden: boolean = false;
  showText: boolean = false;

  value!: string;
  constructor(private ChatService: ChatService) { }
  async ngOnInit(): Promise<void> {
    setTimeout(() => { this.hidden = true }, 3000);
    setTimeout(() => {
      this.showText = true;
    }, 4000);

    await this.fetchMessages();
  }
  async fetchMessages() {

    return new Promise((resolve, reject) => {
      this.ChatService.getMessages().subscribe((data: Message[]) => {
        if (data.length > 0) {
          data.forEach((message: any) => {
            message.id = message.id;
            message.date_sent = message.date_sent;
            message.content = message.content;
            message.sender = message.sender;
            message.sender.password = "";
            message.sender.email = "";
            message.sender.registerdate = new Date(1970, 0, 1);
            message.sender.lastlogindate = new Date(1970, 0, 1);
            message.sender.unbandate = new Date(1970, 0, 1);
            message.sender.statusmsg = "";
            message.sender.userloggedin = false
            message.sender.role = 0;
            this.Messages.push(message);
          });
          console.log("messages: " + JSON.stringify(this.Messages));
          resolve(data);
        }
        else {
          reject("error");
        }
      })
    });

  }

  hluser: HLUser =
    {
      id: 0,
      username: "",
      password: "",
      email: "",
      registerdate: new Date(1970, 0, 1),  // Months are 0-indexed, so 0 is January
      lastlogindate: new Date(1970, 0, 1),
      unbandate: new Date(1970, 0, 1),
      statusmsg: "",
      profileimg: "",
      userloggedin: false,
      role: 0
    }
    ;
  getUsername() {
    return new Promise((resolve, reject) => {
      this.ChatService.getUserDetails().subscribe((data: HLUser) => {
        if (data !== null) {
          data.password = "";
          this.hluser = { id: data.id, username: data.username, password: data.password, email: data.email, registerdate: data.registerdate, lastlogindate: data.lastlogindate, unbandate: data.unbandate, statusmsg: data.statusmsg, profileimg: data.profileimg, userloggedin: data.userloggedin, role: data.role };

          console.log("data: " + JSON.stringify(data));


          resolve(this.hluser);
        }
        else {
          reject("error");
        }
      })
    });
  }

  async sendMessage(): Promise<void> {
    if (this.newMessageContent.trim()) {
      await this.getUsername();


      if (this.hluser !== null) {
        const newMessage: Message = {
          content: this.newMessageContent,
          sender: {
            id: this.hluser.id,
            username: this.hluser.username,
            password: this.hluser.password,
            email: this.hluser.email,
            registerdate: this.hluser.registerdate,
            lastlogindate: this.hluser.lastlogindate,
            unbandate: this.hluser.unbandate,
            statusmsg: this.hluser.statusmsg,
            profileimg: this.hluser.profileimg,
            userloggedin: this.hluser.userloggedin,
            role: this.hluser.role
          }
        };
        this.ChatService.sendMessage(newMessage).subscribe((data: any) => {
          this.Messages.push(data);
          this.newMessageContent = '';
        });
        let userCache = JSON.parse(localStorage.getItem('usernames') || '{}');
        userCache[this.hluser.id] = this.hluser.username;
        localStorage.setItem('usernames', JSON.stringify(userCache));
      }
      else {
        await this.getUsername();
        await this.sendMessage();
      }

    }
  }

}
