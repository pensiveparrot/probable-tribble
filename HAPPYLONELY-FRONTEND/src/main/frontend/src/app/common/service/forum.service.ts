import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }
  addPost(post: any): Observable<any> {
    return this.http.post<any>("https://" + window.location.hostname + ":8443/" + "api/forum/addPost", post, { observe: 'response', withCredentials: true }
    );
  }
  addThread(thread: any): Observable<any> {
    return this.http.post<any>("https://" + window.location.hostname + ":8443/" + "api/forum/addThread", thread, { observe: 'response', withCredentials: true }
    );
  }

  getThreadById(id: number): Observable<any> {
    return this.http.get<any>("https://" + window.location.hostname + ":8443/" + "api/forum/getThreadById/" + id, { observe: 'response', withCredentials: true }
    );
  }
  addProfileComment(comment: any): Observable<any> {
    return this.http.post<any>("https://" + window.location.hostname + ":8443/" + "api/forum/addProfileComment", comment, { observe: 'response', withCredentials: true }
    );
  }
  addCredits(credits: any): Observable<any> {
    return this.http.post<any>("https://" + window.location.hostname + ":8443/" + "api/forum/addCredits", credits, { observe: 'response', withCredentials: true }
    );
  }
  getPostsByThreadId(id: number): Observable<any> {
    return this.http.get<any>("https://" + window.location.hostname + ":8443/" + "api/forum/getPostsByThreadId/" + id, { observe: 'response', withCredentials: true }
    );
  }
}
