import { Component, OnInit, Directive, ViewChild, AfterViewChecked, AfterContentInit, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { ChatService } from '../services/chat.service';
import * as io from 'socket.io-client';
import * as date_fns from 'date-fns';

import { CdkVirtualScrollViewport, CdkScrollable } from '@angular/cdk/scrolling';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';


@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.css']
})
export class AdminMessagesComponent implements OnInit {
  @ViewChild("userMsg") messageBox: any;
  contacts: Contacts[];
  messages: Messages[];
  selectedContact: any;
  throttle = 50;
  scrollDistance = 1;
  scrollUpDistance = 1;
  limit = 10;
  isLimit = false;
  isLoading = false;
  isInitialized = false;
  userData: any;
  printing = false;
  chatSocket: SocketIOClient.Socket;
  @ViewChild(CdkVirtualScrollViewport)
  public virtualScrollViewport?: CdkVirtualScrollViewport;


  //Handler when browser is closed


  constructor(private chatService: ChatService,
    private userService: UserService,
    private router: Router,
    private adminService: AdminService) {


  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/admin/auth"])

  }
  ngOnInit() {
    this.getContacts();
    this.chatService.getNewMessage().subscribe((msg) => {
      this.messages = msg.reverse();
    }, (err) => console.log(err));

    this.userData = this.userService.getPayload(localStorage.getItem('AdminAuthorization'));

    this.chatService.getSingleNewMessage().subscribe((msg) => {
      if (this.contacts.some((contact) => contact.convo_name === msg.convo_name)) {
        for (const key in this.contacts) {
          if (this.contacts[key].convo_name === msg.convo_name) {
            this.contacts[key].recent_msg = msg.message;
            break;
          }
        }
      }
    }, (err) => console.log(err));









  }






  scrollToBottom() {
    this.virtualScrollViewport.scrollTo({
      bottom: 0,
      behavior: 'auto'
    })
  }






  sendMessage(msg, convo_name) {
    let data = {
      msg,
      convo_name,
      token: localStorage.getItem("AdminAuthorization"),
      isAdmin: true,
      limit: this.limit
    }
    this.chatService.sendMessage(data);
    this.messageBox.nativeElement.value = "";

  }

  getNextBatch(event) {
    if (event === 0 && this.isInitialized) {
      this.isLoading = true;
      this.limit += 10;
      setTimeout(() => {
        this.adminService.getMessages(this.selectedContact.convo_name, this.limit)
          .subscribe((successData) => {
            this.messages = successData.reverse();
            this.isLoading = false;
            console.log(this.messages)
          }, (err) => console.log(err));
      }, 1000);
    }
  }

  getMessages(convo_name) {
    this.adminService.getMessages(convo_name, this.limit).subscribe((successData) => {
      this.messages = successData.reverse();
      setTimeout(() => {
        this.scrollToBottom();
        this.isInitialized = true;
      }, 100);


    }, (error) => console.log(error));

  }
  durationLastOnline(date) {
    return date_fns.distanceInWordsToNow(date);
  }


  getContacts() {
    this.adminService.getContacts().subscribe((successData) => {
      this.contacts = successData;
      console.log(this.contacts)
      //Join all of the conversion room for every contact user
      this.chatService.joinAllContactsRoom(this.contacts, this.userData);

      this.chatService.getNewOnlineUser().subscribe((id) => {
        console.log(id)
        if (this.contacts.some((contact) => contact.contact_user_id === id)) {
          for (const key in this.contacts) {
            //Check if it the id 
            //If not continue to next iteration
            if (this.contacts[key].contact_user_id === id) {
              this.contacts[key].isOnline = true;
              break;
            } else {
              continue;
            }
          }
        }
      });

      this.chatService.getNewOfflineUser().subscribe((data) => {
        console.log(data)
        if (this.contacts.some((contact) => contact.contact_user_id === data.id)) {
          for (const key in this.contacts) {
            //Check if it the id 
            //If not continue to next iteration
            if (this.contacts[key].contact_user_id === data.id) {
              this.contacts[key].isOnline = false;
              this.contacts[key].last_online = data.date;
              break;
            } else {
              continue;
            }
          }
        }
      });
      this.selectedContact = this.contacts[0];
      this.selectedContact.isSelected = true;
      console.log(this.selectedContact)
      // this.chatSocket.emit('join', { convo_name: this.selectedContact.convo_name, user: this.selectedContact.name });
      this.getMessages(this.contacts[0].convo_name);
    }, (error) => console.log(error));
  }

  selectContact(id) {
    //Disable the current selected contact
    this.selectedContact.isSelected = false;
    //Reinstantiate the limit for every clicked contact
    this.limit = 10;
    this.isInitialized = false;
    //Leave the room of the current selected contact
    this.chatService.leaveRoom({ convo_name: this.selectedContact.convo_name, user: this.selectedContact.name });
    //Invoke the new selected contact and join the corresponding room
    this.selectedContact = this.contacts[id];
    this.contacts[id].isSelected = true;
    this.chatService.joinRoom({ convo_name: this.selectedContact.convo_name, user: this.selectedContact.name });

  }

  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    // Your logic on beforeunload
    this.chatService.endSocket(this.userData.id);
  }

}
interface Contacts {
  contact_user_id: number,
  convo_name: string,
  dp_path: string,
  name: string,
  isOnline: boolean,
  isSelected: boolean,
  last_online: string,
  recent_msg: string
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