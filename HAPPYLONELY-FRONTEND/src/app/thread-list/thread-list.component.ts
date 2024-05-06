import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Thread } from '../home/message';
import { ForumService } from '../common/service/forum.service'; // Import the service
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {
  threads: Thread[] = [];

  constructor(private router: Router, private forumService: ForumService) { } // Inject the service

  async ngOnInit() {
    await this.getThreads();
  }

  async getThreads() {
    const response: any = await firstValueFrom(this.forumService.fetchThreadsList());
    console.log(response!);

  }

  addThread(): void {
    this.router.navigate(['/create-thread']);
  }

  viewThread(id: string): void {
    this.forumService.currentThreadId = id;
    this.router.navigate(['/thread', this.forumService.currentThreadId]);
  }
}