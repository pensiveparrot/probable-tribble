import { HttpClient, HttpResponse } from '@angular/common/http';
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
      this.http.post('https://' + window.location.hostname + ':8443' + '/download', body, { observe: 'response', responseType: 'blob' }).subscribe(response => {
        const contentDisposition = response.headers.get('Content-Disposition');
        let filename = 'download';
        if (contentDisposition) {
          const matches = /filename="?([^;]+)"?;?/.exec(contentDisposition);
          if (matches?.length === 2) {
            filename = matches[1];
          }
        }
        if (response.body) {
          this.createAndDownloadBlobFile(response.body, filename);
        }
      });
    } else {
      alert('Please enter a URL and select a type.');
    }
  }

  private createAndDownloadBlobFile(blob: Blob, filename: string) {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(link.href);
  }
}

interface DownloadType {
  name: string;
  value: string;
}
