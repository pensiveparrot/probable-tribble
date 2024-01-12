import { Component, OnInit } from '@angular/core';
import { ForumService } from '../common/service/forum.service';
import { UserService } from '../common/service/userservice';
import { HLUser } from '../home/hluser';
import { ChatService } from '../home/chat.service';
import { Message } from '../home/message';
import { Router } from '@angular/router';
import { Thread } from '../home/message';
@Component({
  selector: 'app-thread-create',
  templateUrl: './thread-create.component.html',
  styleUrls: ['./thread-create.component.css']
})
export class ThreadCreateComponent implements OnInit {
  /*
  export interface Message {
  id?: number;            // Optional since it might not be present before sending to the backend
  content: string;        // Content of the message
  sender: HLUser;         // The user who sent the message
  date_sent?: Date;        // Optional as it might be set by the backend when the message is stored
  category?: string;      // Optional as it might be set by the backend when the message is stored
}
  */
  message: Message = { content: '', sender: { id: 0, username: '', statusmsg: '', profileimg: '' }, date_sent: new Date(), category: '' };
  newThread: Thread = {
    content: '',
    title: '',
    category: '',
    posts: [this.message],
    id: 0,
    sender: { id: 0, username: '', statusmsg: '', profileimg: '' },
  };
  categories: string[] = ['Art', 'Music', 'Games', 'Movies', 'Books', 'Other'];
  hluser!: { id: number; username: string; statusmsg: string; profileimg: string; };

  constructor(private forumService: ForumService, private userService: UserService, private chatService: ChatService, private router: Router) { }

  ngOnInit(): void {
    this.getUsername().then((data: { id: number; username: string; statusmsg: string; profileimg: string; }) => {
      this.hluser = data;
      console.log("data: " + JSON.stringify(data));
    });
  }

  onSubmit(): void {
    this.forumService.addThread(this.newThread).subscribe(
      (response) => {
        console.log(response);
        this.newThread = {
          id: response.id,
          content: response.content,
          sender: {
            id: response.sender.id,
            username: response.sender.username,
            statusmsg: response.sender.statusmsg,
            profileimg: response.sender.profileimg
          },
          date_sent: response.date_sent,
          title: response.title,
          category: response.category,
          posts: response.posts
        };
        this.router.navigate(['/threads']);
      },
      (error) => {
        console.log(error);
      }
    );
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
}


