import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Thread } from '../home/message';
import { ForumService } from '../common/service/forum.service'; // Import the service
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {
  threads: Thread[] = [];

  constructor(private router: Router, private forumService: ForumService) { } // Inject the service

  ngOnInit() {
    this.getThreads();
  }

  getThreads(): void {
    this.forumService.fetchThreadsList()
      .subscribe(response => {
        console.log(response);
        this.threads = response.body;
      });
  }

  addThread(): void {
    this.router.navigate(['/create-thread']);
  }

  viewThread(id: string): void {
    this.forumService.currentThreadId = id;
    this.router.navigate(['/thread', this.forumService.currentThreadId]);
  }
}