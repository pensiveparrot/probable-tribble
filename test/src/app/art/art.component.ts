import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent {
  hidden: boolean = false;
  showText: boolean = false;
  ngOnInit(): void {
    setTimeout(() => {this.hidden=true}, 3000);
    setTimeout(() => {
      this.showText=true;
    }, 4000);
  }

  images: any[] = [{
          previewImageSrc: 
          '../../assets/1.jpg',
          thumbnailImageSrc: 
          '../../assets/1.jpg',
          alt: 'Description for Image 1',
          title: '1'
},
{
            previewImageSrc:'../../assets/2.jpg',
            thumbnailImageSrc: '../../assets/2.jpg',
            alt: 'Description for Image 2',
            title: '2'
},
{
            previewImageSrc: '../../assets/3.jpg',
            thumbnailImageSrc: '../../assets/3.jpg',
            alt: 'Description for Image 3',
            title: '3'
},
{
            previewImageSrc: '../../assets/4.jpg',
            thumbnailImageSrc: '../../assets/4.jpg',
            alt: 'Description for Image 4',
            title: '4'
}

]
}
