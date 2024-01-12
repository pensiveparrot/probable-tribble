import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Thread } from '../home/message';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {
  threads: Thread[] = [];
  ngOnInit(): void {
    this.threads = [ // Load threads here, for example, from a service
      {
        id: 1,
        content: 'Welcome to the club',
        sender: {
          id: 1,
          username: 'admin',
          statusmsg: 'owner',
          profileimg: 'https://i.imgur.com/iDv7xPz_d.png?maxwidth=520&shape=thumb&fidelity=high'
        },
        date_sent: new Date(),
        title: 'Welcome',
        category: 'Other',
        posts: [
          {
            id: 1,
            content: 'Welcome to the club',
            sender: {
              id: 1,
              username: 'admin',
              statusmsg: 'owner',
              profileimg: 'https://i.imgur.com/iDv7xPz_d.png?maxwidth=520&shape=thumb&fidelity=high'
            },
            date_sent: new Date()
          },
          {
            id: 2,
            content: 'Thanks',
            sender: {
              id: 2,
              username: 'user',
              statusmsg: 'member',
              profileimg: 'https://i.imgur.com/iDv7xPz_d.png?maxwidth=520&shape=thumb&fidelity=high'
            },
            date_sent: new Date()
          },
        ]
      },

    ];
  }



  constructor(private router: Router) {
    // Load threads here, for example, from a service

  };

  addThread(): void {
    // Add a thread
    this.router.navigate(['/thread-create']);


  }
  viewThread(id: number): void {
    // View a thread
    this.router.navigate(['/thread', id]);

  }

}
