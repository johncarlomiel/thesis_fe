import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../interfaces/userInfo';
import { Router } from '@angular/router';
import * as io from 'socket.io-client';
import { config } from '../configs/config';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  server_url = config.ip;
  adminToken = localStorage.getItem("AdminAuthorization");
  chatSocket = io(config.ip + 'chat');
  constructor(private http: HttpClient, private router: Router) {
    console.log("chat Service hey");


  }
  sendInvitation(users, invitations) {
    this.chatSocket.emit('invitation to an event', users, invitations);
  }
  socketLogin(id) {
    this.chatSocket.emit('login', id);
  }
  endSocket(userId) {
    this.chatSocket.emit('end', userId);
  }
  leaveRoom(data) {
    this.chatSocket.emit('leave', data);
  }
  joinRoom(data) {
    this.chatSocket.emit('join', data);
  }

  sendMessage(msg) {
    this.chatSocket.emit('send msg', msg);
  }

  seenAllMessages(contact_info) {
    const url = config.ip + "user/seen?user_type=admin";
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': this.adminToken,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
    }
    return this.http.post(url, contact_info, httpOptions);
  }

  joinAllContactsRoom(contacts, user_data) {
    contacts.forEach(element => {
      this.chatSocket.emit('join', { convo_name: element.convo_name, user: user_data.username });
    });
  }
  getNewMessage() {
    return new Observable<any>((obs) => {
      this.chatSocket.on('new msg', (msg) => {
        obs.next(msg);
      })
    });
  }

  getNewOnlineUser() {
    return new Observable((obs) => {
      this.chatSocket.on('new online user', (id) => {
        obs.next(id);
      });
    })
  }

  getNewOfflineUser() {
    return new Observable<Offline>((obs) => {
      this.chatSocket.on('new offline user', (id, date) => {
        console.log(id, date);

        let data = {
          id,
          date
        }
        obs.next(data);
      })
    })
  }
  getSingleNewMessage() {
    return new Observable<Messages>((obs) => {
      this.chatSocket.on('new single message for contact', (msg) => {
        obs.next(msg);
      })
    });
  }






}
interface Messages {
  convo_name: string,
  dp_path: string,
  id: number,
  message: string,
  message_id: number,
  name: string,
  timestamp: string
}
interface Offline {
  date: string,
  id: number
}