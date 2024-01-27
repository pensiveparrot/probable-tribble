import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, Thread } from 'src/app/home/message';

@Injectable({
    providedIn: 'root'
})
export class DownloadService {
    constructor(private http: HttpClient) { }

    download(url, type) {
        return this.http.post("https://" + window.location.hostname + ":8443/" + "api/youtube-dl/download", { url, type }, { observe: 'response', responseType: 'blob' });
    }
}