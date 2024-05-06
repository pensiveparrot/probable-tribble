import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import { firstValueFrom } from 'rxjs';

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

  async download() {
    if (this.url && this.selectedType) {
      const body = { url: this.url, type: this.selectedType };
      try {
        const response: HttpResponse<ArrayBuffer> = await firstValueFrom(
          this.http.post('https://' + window.location.hostname + ':8443/api/youtube-dl/download', body, { observe: 'response', responseType: 'arraybuffer' })
        );
        let filename = response.headers.get('Content-Disposition')?.split('=')[1];
        if (response.body && filename) {
          let blob = new Blob([response.body], { type: this.selectedType === 'music' ? 'audio/mpeg' : 'video/mp4' });
          this.createAndDownloadBlobFile(blob, filename);
        }
      } catch (error) {
        console.error(error);
      }
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