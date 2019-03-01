import { Component, OnInit, Directive } from '@angular/core';
import { ChatService } from '../services/chat.service';
import * as io from 'socket.io-client';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.css']
})
export class AdminMessagesComponent implements OnInit {
  contacts: Contacts[];
  messages: Messages[];
  selectedContact: any;
  throttle = 50;
  scrollDistance = 1;
  scrollUpDistance = 1;
  limit = 10;
  chatSocket: SocketIOClient.Socket;
  constructor(private chatService: ChatService) {
    this.chatSocket = io("http://localhost:5000/chat");
    this.chatSocket.on('new msg', (msg) => {
      this.messages = msg;
    });
    this.getContacts();
  }
  ngOnInit() {
  }
  onScroll() {
    console.log('scrolled!!');
  }
  sendMessage(msg, convo_name) {
    let data = {
      msg,
      convo_name,
      token: localStorage.getItem("AdminAuthorization"),
      isAdmin: true
    }
    this.chatSocket.emit('send msg', data);
  }

  getMessages(convo_name) {
    this.chatService.getMessages(convo_name, this.limit).subscribe((successData) => {
      this.messages = successData;
    }, (error) => console.log(error));

  }

  getContacts() {
    this.chatService.getContacts().subscribe((successData) => {
      this.contacts = successData;
      this.selectedContact = this.contacts[0];
      this.chatSocket.emit('join', { convo_name: this.selectedContact.convo_name, user: this.selectedContact.name });
      this.getMessages(this.contacts[0].convo_name);
    }, (error) => console.log(error));
  }

  selectContact(id) {
    this.chatSocket.emit('leave', { convo_name: this.selectedContact.convo_name, user: this.selectedContact.name });
    this.selectedContact = this.contacts[id];
    this.chatSocket.emit('join', { convo_name: this.selectedContact.convo_name, user: this.selectedContact.name });
  }

}
interface Contacts {
  contact_user_id: number,
  convo_name: string,
  dp_path: string,
  name: string
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