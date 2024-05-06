import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router: any
  headers = new HttpHeaders({ /* other headers if needed */ });
  options = { headers: this.headers, withCredentials: true };
  constructor(private http: HttpClient, private route: Router) {
    this.router = route;
  }
  getUserRole(): Observable<any> {
    return this.http.get<number>(`https://${window.location.hostname}:8443/api/user/getUserRole`, { withCredentials: true });
  }
  loggedIn() {
    return (localStorage.getItem('token') ?? '').length > 0;
  }
}

