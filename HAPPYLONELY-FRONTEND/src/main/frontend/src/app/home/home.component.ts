import { Component, OnInit } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
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

  private chatSocket: WebSocketSubject<any> = webSocket('ws://localhost:8080/websocket');

  constructor(private ChatService: ChatService) {
    this.chatSocket.subscribe(
      msg => this.Messages.push(msg),
      err => console.log(err),
      () => console.log('complete')
    );
  }

  async ngOnInit(): Promise<void> {
    setTimeout(() => { this.hidden = true }, 3000);
    setTimeout(() => { this.showText = true }, 4000);
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
            this.Messages.push(message);
          });
          console.log("messages: " + JSON.stringify(this.Messages));
          resolve(data);
        } else {
          reject("error");
        }
      });
    });
  }

  hluser: HLUser = {
    id: 0,
    username: "",
    statusmsg: "",
    profileimg: "",
  };

  getUsername() {
    return new Promise((resolve, reject) => {
      this.ChatService.getUserDetails().subscribe((data: HLUser) => {
        if (data !== null) {
          this.hluser = {
            id: data.id,
            username: data.username,
            statusmsg: data.statusmsg,
            profileimg: data.profileimg
          };
          console.log("data: " + JSON.stringify(data));
          resolve(this.hluser);
        } else {
          reject("error");
        }
      });
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
            statusmsg: this.hluser.statusmsg,
            profileimg: this.hluser.profileimg,
          }
        };

        this.ChatService.sendMessage(newMessage).subscribe((data: any) => {
          this.Messages.push(data);
          this.newMessageContent = '';
        });

        let userCache = JSON.parse(localStorage.getItem('usernames') || '{}');
        userCache[this.hluser.id] = this.hluser.username;
        localStorage.setItem('usernames', JSON.stringify(userCache));
      } else {
        await this.getUsername();
        await this.sendMessage();
      }
    }
  }
}
