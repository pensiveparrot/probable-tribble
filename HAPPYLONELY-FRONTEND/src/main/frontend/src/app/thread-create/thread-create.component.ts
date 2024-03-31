import { Component } from '@angular/core';
import { ForumService } from '../common/service/forum.service';
import { UserService } from '../common/service/userservice';
import { ChatService } from '../home/chat.service';
import { Router } from '@angular/router';
import { Thread } from '../home/message';
import { firstValueFrom } from 'rxjs';
import { HLUser } from '../home/hluser';
@Component({
  selector: 'app-thread-create',
  templateUrl: './thread-create.component.html',
  styleUrls: ['./thread-create.component.css']
})
export class ThreadCreateComponent {
  newThread: Thread = { id: '', content: '', sender: { id: '', username: '', statusmsg: '', profileimg: '' }, date_sent: new Date(), title: '', category: '', posts: [] };
  categories: string[] = ['Art', 'Music', 'Games', 'Movies', 'Books', 'Other'];

  constructor(private forumService: ForumService, private userService: UserService, private router: Router) {

  }

  async onSubmit() {
    try {
      await this.getUsername() as HLUser; // Wait for getUsername to complete and typecast 'sender' to 'HLUser'
      // Set the sender of the new thread
      console.log("Submitting new thread:", JSON.stringify(this.newThread)); // Extra logging
      const response = await firstValueFrom(this.forumService.addThread(this.newThread));
      console.log(response);
      this.forumService.currentThreadId = response.body.id;
      this.router.navigate(['/thread', this.forumService.currentThreadId]);
    } catch (error) {
      console.error(error);
    }
  }

  async getUsername() {
    try {
      const response = await firstValueFrom(this.userService.getUser());
      this.newThread.sender = {
        id: response.body.id,
        username: response.body.username,
        statusmsg: response.body.statusmsg,
        profileimg: response.body.profileimg
      }
    } catch (error) { console.error(error); }
    return this.newThread.sender!;
  }
}




