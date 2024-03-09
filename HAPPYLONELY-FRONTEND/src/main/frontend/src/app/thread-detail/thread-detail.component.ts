import { Component, OnInit } from '@angular/core';
import { ForumService } from '../common/service/forum.service';
import { Post, Thread } from '../home/message';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../common/service/userservice';
import { HLUser } from '../home/hluser';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.css']
})
export class ThreadDetailComponent implements OnInit {
  user: HLUser = {} as HLUser;
  thread: Thread = {} as Thread;
  newPost: Post = {} as Post;
  id: string = this.forumService.currentThreadId;


  ngOnInit(): void {
    this.id = this.aRoute.snapshot.params['id'];
    this.getThread();
  }
  constructor(private forumService: ForumService, private userService: UserService, private aRoute: ActivatedRoute, private router: Router) { }
  async getUser() {
    try {
      const response = await firstValueFrom(this.userService.getUser());
      this.user.id = response.body.id;
      this.user.username = response.body.username;
      this.user.statusmsg = response.body.statusmsg;
      this.user.profileimg = response.body.profileimg;
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  getThread() {

    this.forumService.getThreadById(this.id).subscribe(
      {
        next: (response) => {
          console.log(response);
          this.thread.id = response.body.id;
          this.thread.title = response.body.title;
          this.thread.category = response.body.category;
          this.thread.posts = response.body.posts;
          if (this.thread.posts != null) {
            this.thread.posts.forEach(post => {
              if (post.sender.id === this.user.id) {
                post.sender.profileimg = this.user.profileimg;
              }
            });
          }
          this.thread.date_sent = response.body.date_sent;
          this.thread.content = response.body.content;
          this.thread.sender = {} as HLUser;
          this.thread.sender.id = response.body.sender.id;
          this.thread.sender.username = response.body.sender.username;
          this.thread.sender.profileimg = response.body.sender.profileimg;
          this.thread.sender.statusmsg = response.body.sender.statusmsg;

          this.getPosts();
        },
        error: (error) => {
          console.error("An error occurred:", error);
        }
      }
    );

  }
  async addPost() {
    await this.getUser();
    this.newPost.sender = {} as HLUser; // Initialize newPost.sender
    this.newPost.sender.id = this.user.id;
    this.newPost.sender.username = this.user.username;
    this.newPost.sender.profileimg = this.user.profileimg;
    this.newPost.sender.statusmsg = this.user.statusmsg;
    this.newPost.date_sent = new Date();
    this.newPost.thread = {} as Thread;
    this.newPost.thread.id = this.aRoute.snapshot.paramMap.get('id')!;
    this.forumService.addPost(this.newPost).subscribe({
      next: (response) => {
        console.log(response);
        this.getPosts();
      },
      error: (error) => {
        console.error("An error occurred:", error);
      }
    });
  }
  getPosts() {
    const id = this.aRoute.snapshot.paramMap.get('id')!;
    this.forumService.getPostsByThreadId(id).subscribe({
      next: async (response) => {
        console.log(response);
        this.thread.posts = response.body;

        // Update the profileimg of the sender in each post
        for (let post of this.thread.posts!) {
          if (post.sender.id === this.user.id) {
            post.sender.profileimg = this.user.profileimg;
          } else {
            // If the sender is not the current user, fetch their details
            const userResponse = await firstValueFrom(this.userService.getUserById(post.sender.id));
            post.sender.profileimg = userResponse.body.profileimg;
          }
        }
      },
      error: (error) => {
        console.error("An error occurred:", error);
      }
    });
  }
}
