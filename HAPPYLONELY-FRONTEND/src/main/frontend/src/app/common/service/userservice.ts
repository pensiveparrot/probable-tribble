import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HLUser } from 'src/app/home/hluser';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    headers = new HttpHeaders({ /* other headers if needed */ });
    options = { headers: this.headers, withCredentials: true };
    constructor(private http: HttpClient) { }
    getUser(): Observable<any> {
        return this.http.get<HLUser>("https://" + window.location.hostname + ":8443/" + "api/user/getUserByUsername", { observe: 'response', withCredentials: true }
        );
    }
    editUser(user: HLUser): Observable<any> {
        return this.http.post<HLUser>("https://" + window.location.hostname + ":8443/" + "api/user/editUser", user, { observe: 'response', withCredentials: true }
        );
    }
}