import { Component, OnInit, Directive, ViewChild, AfterViewChecked, AfterContentInit, AfterViewInit, ElementRef, HostListener, ChangeDetectionStrategy, IterableDiffers, ChangeDetectorRef, NgZone } from '@angular/core';
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
  @ViewChild("chatZone") chatZone: any;
  @ViewChild("msg_section") msg_section: any;
  contacts: Contacts[];
  messages: Messages[];
  dummy = ["Hey", "QWE"]
  selectedContact: any;
  isScrollingDisabled = false;
  limit = 10;
  isLimit = false;
  isLoading = false;
  isInitialized = false;
  userData: any;
  printing = false;
  firstScroll = false;
  chatSocket: SocketIOClient.Socket;
  iterableDiffer: any;


  messageLastLimit = 0;

  contactsLimit = 10;
  lastLengthContacts = 0;
  isContactReachLimit = false;

  //Handler when browser is closed


  constructor(private chatService: ChatService,
    private userService: UserService,
    private router: Router,
    private adminService: AdminService,
    private cdRef: ChangeDetectorRef,
    private zone: NgZone
  ) {


  }

  searchContacts(keyword) {
    this.adminService.searchContacts(keyword, this.contactsLimit).subscribe((response) => {
      this.contacts = response;
      this.isContactReachLimit = false;
    }, err => console.error(err));
  }

  onScrollDownContacts() {
    if (!this.isContactReachLimit) {

      this.contactsLimit += 10;
      setTimeout(() => {
        this.adminService.getContacts(this.contactsLimit).subscribe((successData) => {
          this.contacts = successData;
          if (this.lastLengthContacts == successData.length) {
            this.isContactReachLimit = true;
          } else {
            this.lastLengthContacts = successData.length;
          }

        }, err => console.error(err));

      }, 500);
    }
  }
  onScrollUp() {
    if (this.isInitialized) {
      this.isLoading = true;
      this.limit += 10;
      setTimeout(() => {
        this.adminService.getMessages(this.selectedContact.convo_name, this.limit)
          .subscribe((successData) => {

            this.messages = successData.reverse();
            this.isLoading = false;
            // this.scrollToBottom();
          }, (err) => console.log(err));
      }, 1000);
    }
  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/admin-auth"])

  }



  scrollToBottom(): void {
    try {
      this.msg_section.nativeElement.scrollTop = this.msg_section.nativeElement.scrollHeight;
    } catch (err) { }
  }

  notifyMe(message, dp_path, name, convo_name) {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support system notifications");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification(name, {
        body: message,
        icon: dp_path,
        tag: convo_name,
      });
      setTimeout(notification.close.bind(notification), 4000);
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification(name, {
            body: message,
            icon: dp_path,
            tag: convo_name,

          });
          setTimeout(notification.close.bind(notification), 4000);
        }
      });
    }

    // Finally, if the user has denied notifications and you 
    // want to be respectful there is no need to bother them any more.
  }


  convertDate(date) {
    return date_fns.format(date, 'MMMM Do YYYY hh:mm A');
  }


  ngOnInit() {

    this.getContacts();
    this.chatService.getNewMessage().subscribe((msg) => {


      if (msg.id != this.userData.id) {
        let newMessage = msg;
        this.notifyMe(newMessage.message, newMessage.dp_path, newMessage.name, newMessage.convo_name);
      }

      if (msg.convo_name == this.selectedContact.convo_name) {
        this.messages.push(msg)
        if (msg.id == this.userData.id) {
          setTimeout(() => {
            this.scrollToBottom();
          }, 100);

        }

      }


      this.refreshContacts();
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


  messageBoxClicked() {
    this.readConvo(this.selectedContact.contact_user_id, this.selectedContact.convo_name);
  }

  getMessages(convo_name) {
    this.adminService.getMessages(convo_name, this.limit).subscribe((successData) => {
      this.messages = successData.reverse();

      setTimeout(() => {
        this.isInitialized = true;
        this.scrollToBottom();
      });




    }, (error) => console.log(error));

  }
  durationLastOnline(date) {
    if (date_fns.distanceInWordsToNow(date) != 'almost NaN years') {
      return date_fns.distanceInWordsToNow(date);
    } else {
      return 'No record of online'
    }

  }
  refreshContacts() {
    this.adminService.getContacts(this.contactsLimit).subscribe((successData) => {
      this.contacts = successData;
      this.lastLengthContacts = successData.length

    }, err => console.error(err));
  }


  getContacts() {
    this.adminService.getContacts(this.contactsLimit).subscribe((successData) => {
      this.contacts = successData;
      this.lastLengthContacts = successData.length;

      //Join all of the conversion room for every contact user
      this.chatService.joinAllContactsRoom(this.contacts, this.userData);

      this.chatService.getNewOnlineUser().subscribe((id) => {

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
      this.readConvo(this.selectedContact.contact_user_id, this.selectedContact.convo_name);
      this.getMessages(this.contacts[0].convo_name);



    }, (error) => console.log(error));
  }



  readConvo(contact_user_id, convo_name) {
    let contact_info = {
      contact_user_id,
      convo_name
    }
    this.chatService.seenAllMessages(contact_info).subscribe((response) => {

      this.refreshContacts();

    }, err => console.log(err));
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
    this.readConvo(this.selectedContact.contact_user_id, this.selectedContact.convo_name);

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