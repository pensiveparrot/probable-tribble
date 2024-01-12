import { Component, OnInit } from '@angular/core';
import { ForumService } from '../common/service/forum.service';
import { Post, Thread } from '../home/message';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../common/service/userservice';
import { HLUser } from '../home/hluser';

@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.css']
})
export class ThreadDetailComponent implements OnInit {
  user!: HLUser;
  thread: Thread = {
    id: 0,
    content: '',
    sender: {
      id: 0,
      username: '',
      statusmsg: '',
      profileimg: ''
    },
    date_sent: new Date(),
    title: '',
    category: '',
  };
  newPost: Post = {
    id: 0,
    content: '',
    sender: {
      id: 0,
      username: '',
      statusmsg: '',
      profileimg: ''
    },
    date_sent: new Date()
  };

  id: number = 0;

  ngOnInit(): void {
    this.id = this.aRoute.snapshot.params['id'];
    this.getThread();
    this.getUser();
  }
  constructor(private forumService: ForumService, private userService: UserService, private aRoute: ActivatedRoute, private router: Router) { }
  getUser() {
    this.userService.getUser().subscribe(
      (response) => {
        console.log(response);
        this.user = {
          id: response.id,
          username: response.username,
          statusmsg: response.statusmsg,
          profileimg: response.profileimg
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getThread() {
    this.forumService.getThreadById(this.id).subscribe(
      (response) => {
        console.log(response);
        this.thread = {
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
          category: response.category
        }
      },
      (error) => {
        console.log(error);
      }
    );
    this.getPosts();
  }
  getPostContent(postValue: any): string {
    return (postValue as Post).content;
  }
  addPost(event: any) {
    this.newPost.content = event.target.value;
    this.newPost.sender.id = this.user.id;
    this.newPost.sender.username = this.user.username;
    this.newPost.sender.statusmsg = this.user.statusmsg;
    this.newPost.sender.profileimg = this.user.profileimg;
    this.newPost.date_sent = new Date();
    this.forumService.addPost(this.newPost).subscribe(
      (response) => {
        console.log(response);
        this.newPost = {
          id: response.id,
          content: response.content,
          sender: {
            id: response.sender.id,
            username: response.sender.username,
            statusmsg: response.sender.statusmsg,
            profileimg: response.sender.profileimg
          },
          date_sent: response.date_sent
        };
        this.getPosts();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getPosts() {
    this.forumService.getPostsByThreadId(this.id).subscribe(
      (response) => {
        console.log(response);
        this.thread.posts = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
