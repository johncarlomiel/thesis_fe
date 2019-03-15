import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import * as io from 'socket.io-client';
import { DataService } from '../services/data.service';
import { ChatService } from '../services/chat.service';
@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {
  isError = false;
  errorMsg = "";
  chatSocket: SocketIOClient.Socket;
  constructor(
    private adminService: AdminService,
    private chatService: ChatService,
    private router: Router,
    private dataService: DataService
  ) {
    this.chatSocket = io("http://localhost:5000/chat");
  }

  ngOnInit() {
  }



  login(username, password) {
    if (username != "" && password != "") {
      this.isError = false;

      //Transform username and password into json format
      let data = { username, password }
      //Send a request to service
      this.adminService.login(data).subscribe((successData) => {
        this.dataService.payload("Bearer " + successData, "admin").subscribe((successData2) => {
          localStorage.setItem("AdminAuthorization", "Bearer " + successData);
          this.chatService.socketLogin(successData2.id)
          this.router.navigate(["/admin-home"]);
        }, (error) => console.log(error));
      }, (error) => {
        this.isError = true;
        this.errorMsg = "Wrong username or password";
      })

    } else {
      this.isError = true;
      this.errorMsg = "Please fill all fields";


    }
  }
}
