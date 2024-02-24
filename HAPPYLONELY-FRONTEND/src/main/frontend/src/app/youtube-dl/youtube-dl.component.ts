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
  filename = '';
  selectedType: string | undefined;
  types: DownloadType[] = [
    { name: 'Music', value: 'music' },
    { name: 'Video', value: 'video' }
  ];

  constructor(private http: HttpClient) { }

  download() {
    if (this.url && this.selectedType && this.filename) {
      const body = { url: this.url, type: this.selectedType };
      this.http.post('https://' + window.location.hostname + ':8443' + '/download', body, { observe: 'response', responseType: 'blob' }).subscribe(response => {
        let filename = this.filename;
        // Append the file extension based on the selected type
        filename += this.selectedType === 'music' ? '.mp3' : '.mp4';
        if (response.body) {
          this.createAndDownloadBlobFile(response.body, filename);
        }
      });
    } else {
      alert('Please enter a URL, select a type, and enter a filename.');
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