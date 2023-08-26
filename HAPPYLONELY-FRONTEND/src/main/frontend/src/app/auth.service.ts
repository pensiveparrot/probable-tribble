import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   headers = new HttpHeaders({ /* other headers if needed */ });
   options = { headers: this.headers, withCredentials: true };
  constructor(private http:HttpClient) {   }
   getUserRole():Observable<any> {
          return this.http.get<number>("http://"+window.location.hostname+":8080/" +"api/user/getUserRole",{withCredentials: true});
    }
   }

