import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

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
      this.http.post('https://' + window.location.hostname + ':8443' + '/download', body, { observe: 'response', responseType: 'arraybuffer' }).subscribe(response => {
        let filename = response.headers.get('Content-Disposition')?.split('=')[1];
        if (response.body && filename) {
          let blob = new Blob([response.body], { type: this.selectedType === 'music' ? 'audio/mpeg' : 'video/mp4' });
          this.createAndDownloadBlobFile(blob, filename);
        }
      });
    } else {
      alert('Please enter a URL and select a type.');
    }
  }

  private createAndDownloadBlobFile(blob: Blob, filename: string) {
    saveAs(blob, filename);
  }
}

interface DownloadType {
  name: string;
  value: string;
}