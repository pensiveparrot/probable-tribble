import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent {
  threads: any = []; // Replace with the appropriate type
  newPost = { content: '' };


  constructor(private router: Router) {
    // Load threads here, for example, from a service
    this.threads = [{ title: '', category: '', posts: [{ title: '', content: '' }] }]; // Replace with the appropriate type


  };

  addThread(): void {
    // Add a new thread to the list
    this.router.navigate(['/create-thread']);

  }

}
