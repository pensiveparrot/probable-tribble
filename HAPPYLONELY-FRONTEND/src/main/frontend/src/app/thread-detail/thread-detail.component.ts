import { Component, OnInit } from '@angular/core';
import { ForumService } from '../common/service/forum.service';
import { Message } from '../home/message';
import { Thread } from '../thread-create/thread';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.css']
})
export class ThreadDetailComponent implements OnInit {
  newPost: Message = { content: '', sender: { id: 0, username: '', statusmsg: '', profileimg: '' }, date_sent: new Date() };
  thread: Thread = {
    title: '',
    category: '',
    posts: [this.newPost],
    id: 0
  };

  id: number = 0;

  ngOnInit(): void {
    this.id = this.aRoute.snapshot.params['id'];
    this.getThread();
  }
  constructor(private forumService: ForumService, private aRoute: ActivatedRoute, private router: Router) { }

  getThread() {
    this.forumService.getThreadById(this.id).subscribe(
      (response) => {
        console.log(response);
        this.thread = {
          title: response.body.title,
          category: response.body.category,
          posts: response.body.posts,
          id: response.body.id
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addPost() {
    this.forumService.addPost(this.newPost).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/thread', this.id]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
