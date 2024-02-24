import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HLUser } from 'src/app/home/hluser';
import { EmailRequest } from './emailRequest';

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    headers = new HttpHeaders({ /* other headers if needed */ });
    options = { headers: this.headers, withCredentials: true };
    constructor(private http: HttpClient) { }
    sendEmail(emailReq: EmailRequest): Observable<any> {
        return this.http.post<any>("https://" + window.location.hostname + ":8443/" + "api/email/sendEmail", { emailReq }, { observe: 'response', withCredentials: true });
    }
    getEmails(): Observable<EmailRequest[]> {
        return this.http.get<EmailRequest[]>("https://" + window.location.hostname + ":8443/" + "api/email/getEmails", { withCredentials: true });
    }

}