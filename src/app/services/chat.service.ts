import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../interfaces/userInfo';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  server_url = "http://localhost:5000/";
  adminToken = localStorage.getItem("AdminAuthorization");
  constructor(private http: HttpClient, private router: Router) {
    console.log(this.adminToken);

  }

  getContacts() {
    const url = this.server_url + "user/contacts";
    const params = new HttpParams().set("user_type", "admin");
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': this.adminToken,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params
    }
    return this.http.get<[]>(url, httpOptions);
  }

  getMessages(convo_name, limit) {
    const url = this.server_url + "user/messages";
    const params = new HttpParams().set("user_type", "admin").set("convo_name", convo_name).set("limit", limit);
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': this.adminToken,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params
    }
    return this.http.get<[]>(url, httpOptions);
  }

  sendMessage(msg, convo_name) {
    const url = this.server_url + "user/messages";
    const params = new HttpParams().set("user_type", "admin")
    const data = {
      msg,
      convo_name
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': this.adminToken,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params
    }
    return this.http.post(url, data, httpOptions);
  }
}
