import { Component } from '@angular/core';
import { ForumService } from '../common/service/forum.service';

interface Thread {
  title: string;
  category: string;
}
@Component({
  selector: 'app-thread-create',
  templateUrl: './thread-create.component.html',
  styleUrls: ['./thread-create.component.css']
})
export class ThreadCreateComponent {

  newThread: Thread = { title: '', category: '' };
  categories: string[] = ['Art', 'Music', 'Games', 'Movies', 'Books', 'Other'];

  constructor(private forumService: ForumService) { }
  // Load categories here, for example, from a service


  onSubmit(): void {
    this.forumService.addThread(this.newThread).subscribe(
      (response) => {
        console.log(response);
        // this.router.navigate(['/threads']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}


