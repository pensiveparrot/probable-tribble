import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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

    changeEmail(hlUser: HLUser): Observable<any> {
        return this.http.put(`https://${window.location.hostname}:8443/api/user/changeEmail`, hlUser, this.options);
    }
    getUser(): Observable<any> {
        return this.http.get<HLUser>("https://" + window.location.hostname + ":8443/" + "api/user/getUserByUsername", { observe: 'response', withCredentials: true }
        );
    }
    editUser(user: HLUser): Observable<any> {
        return this.http.post<HLUser>("https://" + window.location.hostname + ":8443/" + "api/user/editUser", user, { observe: 'response', withCredentials: true }
        );
    }
    addArt(art: any): Observable<any> {
        return this.http.post<any>("https://" + window.location.hostname + ":8443/" + "api/art/addArt", art, { observe: 'response', withCredentials: true }
        );
    }
    uploadArt(file: File, artName: string, artAuthor: string): Observable<HttpResponse<string>> {
        const apiUrl = `https://${window.location.hostname}:8443/api/art/uploadArt`;

        const formData = new FormData();
        formData.append('file', file);
        formData.append('artName', artName);
        formData.append('artAuthor', artAuthor);

        return this.http.post<string>(apiUrl, formData, {
            observe: 'response',
            responseType: 'text' as 'json',
            withCredentials: true,
        });
    }
    deleteUser(userId: number): Observable<any> {
        return this.http.delete(`https://${window.location.hostname}:8443/api/user/deleteUser/${userId}`, this.options);
    }

    updateUser(user: HLUser): Observable<any> {
        return this.http.put(`https://${window.location.hostname}:8443/api/user/updateUser`, user, this.options);
    }

    banUser(userId: number): Observable<any> {
        return this.http.put(`https://${window.location.hostname}:8443/api/user/banUser/${userId}`, null, this.options);
    }

    unbanUser(userId: number): Observable<any> {
        return this.http.put(`https://${window.location.hostname}:8443/api/user/unbanUser/${userId}`, null, this.options);
    }

    changeUserRole(userId: number, newRole: string): Observable<any> {
        return this.http.put(`https://${window.location.hostname}:8443/api/user/changeUserRole/${userId}`, { role: newRole }, this.options);
    }

}