import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';
import { HLUser } from './hluser';


@Injectable({
    providedIn: 'root'
})
export class ChatService {


    constructor(private http: HttpClient) { }

    // Fetch all Messages
    getMessages(): Observable<Message[]> {
        return this.http.get<Message[]>("https://" + window.location.hostname + ":8443/" + "api/chat/messages", { withCredentials: true });
    }

    // Send a new Message
    sendMessage(Message: Message): Observable<Message> {
        return this.http.post<Message>("https://" + window.location.hostname + ":8443/" + "api/chat/messages", Message, { withCredentials: true });
    }


    getUserDetails(): Observable<HLUser> {
        return this.http.get<HLUser>("https://" + window.location.hostname + ":8443/" + "api/user/getUserByUsername", { withCredentials: true });
    }
}
