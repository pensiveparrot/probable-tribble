import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Image } from 'primeng/image';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hidden: boolean = false;
  showText: boolean = false;
  ngOnInit(): void {
    setTimeout(() => {this.hidden=true}, 3000);
    setTimeout(() => {
      this.showText=true;
    }, 4000);
  }


}
