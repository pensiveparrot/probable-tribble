import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';
import { HLUser } from './hluser';


@Injectable({
    providedIn: 'root'
})
export class ChatService {

    // private apiUrl = "http://" + window.location.hostname + ":8080/" + "api/Message/"; // Change this to your own API URL

    constructor(private http: HttpClient) { }

    // Fetch all Messages
    getMessages(): Observable<Message[]> {
        return this.http.get<Message[]>("http://" + window.location.hostname + ":8080/" + "api/chat/messages", { withCredentials: true });
    }

    // Send a new Message
    sendMessage(Message: Message): Observable<Message> {
        return this.http.post<Message>("http://" + window.location.hostname + ":8080/" + "api/chat/messages", Message, { withCredentials: true });
    }


    getUserDetails(): Observable<HLUser> {
        return this.http.get<HLUser>("http://" + window.location.hostname + ":8080/" + "api/user/getUserByUsername", { withCredentials: true });
    }
}
