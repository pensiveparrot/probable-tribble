import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Message } from './message';
import { HLUser } from './hluser';
import * as SockJS from 'sockjs-client';
import { Client, Stomp } from '@stomp/stompjs';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    private stompClient: Client | undefined;
    private messageSubject = new Subject<Message>();

    constructor(private http: HttpClient) {
        this.initializeWebSocketConnection();
    }

    initializeWebSocketConnection(): void {
        const token = localStorage.getItem('token'); // get the JWT token from local storage
        if (token != null) {
            this.stompClient = new Client({
                webSocketFactory: () => new SockJS(`https://${window.location.hostname}:8443/websocket?token=${token}`),
                reconnectDelay: 5000,
                onConnect: (receipt) => {
                    console.log('Connected:', receipt);
                    this.stompClient?.subscribe('/topic/messages', (messageOutput: { body: string; }) => {
                        const message: Message = JSON.parse(messageOutput.body);
                        if (message) {
                            this.messageSubject.next(message);
                        }
                    });
                },
                onStompError: (error) => {
                    console.error('STOMP Error:', error);
                }
            });

            this.stompClient.activate();
        }
    }

    userHasChatGptApiKey(): Observable<boolean> {
        return this.http.get<boolean>(`https://${window.location.hostname}:8443/api/chat/userHasChatGptApiKey`, { withCredentials: true });
    }

    useChatGPT(request: { [key: string]: string }): Observable<string> {
        return this.http.post<string>(`https://${window.location.hostname}:8443/api/chat/useChatGPT`, request, { withCredentials: true });
    }
    getNewMessageObservable(): Observable<Message> {
        return this.messageSubject.asObservable();
    }

    // Fetch all Messages
    getMessages(): Observable<Message[]> {
        return this.http.get<Message[]>(`https://${window.location.hostname}:8443/api/chat/messages`, { withCredentials: true });
    }

    // Send a new Message
    sendMessage(message: Message): void {
        if (this.stompClient && this.stompClient.connected) {
            this.stompClient.publish({
                destination: "/app/chat/send",
                body: JSON.stringify(message)
            });
        }
    }

    getUserDetails(): Observable<HLUser> {
        return this.http.get<HLUser>(`https://${window.location.hostname}:8443/api/user/getUserByUsername`, { withCredentials: true });
    }
}