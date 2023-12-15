import { Component, OnInit } from '@angular/core';
import { ForumService } from '../common/service/forum.service';
import { Thread } from './thread';
import { UserService } from '../common/service/userservice';
import { HLUser } from '../home/hluser';
import { ChatService } from '../home/chat.service';
import { Message } from '../home/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thread-create',
  templateUrl: './thread-create.component.html',
  styleUrls: ['./thread-create.component.css']
})
export class ThreadCreateComponent implements OnInit {
  message: Message = { content: '', sender: { id: 0, username: '', statusmsg: '', profileimg: '' }, date_sent: new Date() };
  newThread: Thread = {
    title: '',
    category: '',
    posts: [this.message],
    id: 0
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


