import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Thread } from '../thread-create/thread';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {
  threads: Thread[] = [];
  ngOnInit(): void {
    this.threads = [{ content: '', title: 'Welcome to HAPPYLONELY', category: 'Music', posts: [{ content: 'Super Soldier', sender: { id: -1, username: 'Demon', statusmsg: 'RottenTeeth', profileimg: 'https://img.buzzfeed.com/buzzfeed-static/complex/images/eys5ntxw6zjcxijbdznf/yeat-what-you-need-to-know.jpg' }, date_sent: new Date() }], id: -77 }];
  }



  constructor(private router: Router) {
    // Load threads here, for example, from a service

  };

  addThread(): void {
    // Add a new thread to the list
    this.router.navigate(['/create-thread']);

  }
  viewThread(id: number): void {
    // View a thread
    this.router.navigate(['/thread', id]);

  }

}
