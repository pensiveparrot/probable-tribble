import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, Thread } from 'src/app/home/message';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }
  currentThreadId: string = "";
  addPost(post: Post): Observable<any> {
    return this.http.post<Post>(`https://${window.location.hostname}:8443/api/forum/addPost`, post, { observe: 'response', withCredentials: true });
  }
  addThread(thread: Thread): Observable<any> {
    return this.http.post<Thread>(`https://${window.location.hostname}:8443/api/forum/addThread`, thread, { observe: 'response', withCredentials: true });
  }

  fetchThreadsList(): Observable<any> {
    return this.http.get<any>(`https://${window.location.hostname}:8443/api/forum/getThreads`, { observe: 'response', withCredentials: true });
  }
  isOwnerOrModerator(senderId: string): Observable<any> {
    return this.http.get<boolean>(`https://${window.location.hostname}:8443/api/forum/isOwnerOrModerator/${senderId}`, { observe: 'response', withCredentials: true });
  }

  getThreadById(id: string): Observable<any> {
    return this.http.get<any>(`https://${window.location.hostname}:8443/api/forum/getThreadById/${id}`, { observe: 'response', withCredentials: true });
  }
  addProfileComment(comment: any): Observable<any> {
    return this.http.post<any>(`https://${window.location.hostname}:8443/api/forum/addProfileComment`, comment, { observe: 'response', withCredentials: true });
  }
  addCredits(credits: any): Observable<any> {
    return this.http.post<any>(`https://${window.location.hostname}:8443/api/forum/addCredits`, credits, { observe: 'response', withCredentials: true });
  }
  getPostsByThreadId(id: string): Observable<any> {
    return this.http.get<any>(`https://${window.location.hostname}:8443/api/forum/getPostsByThreadId/${id}`, { observe: 'response', withCredentials: true });
  }
}
