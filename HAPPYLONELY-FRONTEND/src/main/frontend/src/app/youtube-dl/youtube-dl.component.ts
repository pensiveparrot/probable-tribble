import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-youtube-dl',
  templateUrl: './youtube-dl.component.html',
  styleUrls: ['./youtube-dl.component.css']
})

export class YoutubeDLComponent {

  url = '';
  selectedType: string | undefined;
  types: DownloadType[] = [
    { name: 'Music', value: 'music' },
    { name: 'Video', value: 'video' }
  ];

  constructor(private http: HttpClient) { }

  download() {
    if (this.url && this.selectedType) {
      const body = { url: this.url, type: this.selectedType };
      this.http.post('https://' + window.location.hostname + ':8443' + '/download', body, { responseType: 'blob' }).subscribe(blob => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = this.selectedType === 'music' ? 'output.mp3' : 'output.mp4';
        link.click();
        window.URL.revokeObjectURL(link.href);
      });
    } else {
      alert('Please enter a URL and select a type.');
    }
  }

}
interface DownloadType {
  name: string;
  value: string;
}