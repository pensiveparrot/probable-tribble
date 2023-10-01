import { Component, OnInit, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { ChatService } from './chat.service';
import { Message } from './message';
import { HLUser } from './hluser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewChecked {
  Messages: Message[] = [];
  newMessageContent: string = '';
  hidden: boolean = false;
  showText: boolean = false;
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  hluser: HLUser = {
    id: 0,
    username: "",
    statusmsg: "",
    profileimg: "",
  };

  constructor(private chatService: ChatService) {
    // Subscribe to the message observable. WebSocket initialization is done in the service's constructor.
    this.chatService.getNewMessageObservable().subscribe((message: Message) => {
      // Ensure that you're not adding duplicate messages
      if (!this.Messages.some(m => m.date_sent === message.date_sent && m.content === message.content)) {
        this.Messages.push(message);
      }
    });
  }

  async ngOnInit(): Promise<void> {
    setTimeout(() => { this.hidden = true }, 3000);
    setTimeout(() => { this.showText = true }, 4000);
    await this.getUsername();  // Fetch the username once on initialization
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  private getUsername(): Promise<HLUser> {
    return new Promise((resolve, reject) => {
      this.chatService.getUserDetails().subscribe((data: HLUser) => {
        if (data !== null) {
          this.hluser = {
            id: data.id,
            username: data.username,
            statusmsg: data.statusmsg,
            profileimg: data.profileimg
          };
          console.log("final");
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
      if (this.hluser && this.hluser.username) {
        const newMessage: Message = {
          content: this.newMessageContent,
          sender: this.hluser,
          date_sent: new Date()
        };

        // Send the message. The response will be handled by the WebSocket subscription.
        this.chatService.sendMessage(newMessage);
        console.log("newMessage: " + JSON.stringify(newMessage));
        this.newMessageContent = '';  // Reset the newMessageContent
      } else {
        console.error("User details are not available");
      }
    }
  }
}
