import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from '@/interfaces/message';
interface Answer {
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  messages_ = new BehaviorSubject<Message[]>([{role: 'ai', message: 'Hola, Pregúntame lo que quieras sobre Iván Navas!'}]);
  messages$ = this.messages_.asObservable();

  constructor(public http: HttpClient) { }

  sendMessage(message: string) {
    return this.http.post<Message>('https://portfolio-hono.onrender.com/chat',
      { message }
    );
  }
}
