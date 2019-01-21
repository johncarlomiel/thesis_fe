import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../interfaces/userInfo';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus: boolean = false;
  userInfo: Observable<UserInfo>;
  server_url = "http://192.168.215.185:5000/";




  constructor(private http: HttpClient, private router: Router) {

  }

  setLoggedIn(value) {
    this.loggedInStatus = value;
    // console.log(this.loggedInStatus)
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }



  //Check user session
  checkSession() {
    //Check if there is a token inside localStorage
    if (localStorage.getItem("Authorization") != null) {
      //Verify the token
      const url = this.server_url + "api/checkSession";
      const httpOptions = {
        headers: new HttpHeaders({
          'authorization': localStorage.getItem("Authorization"),
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      }
      return this.http.get<UserInfo>(url, httpOptions);


    }



  }

  //Register
  register(username, password, name) {
    const url = this.server_url + "api/register";
    const data = {
      username,
      password,
      name
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post(url, data, httpOptions);

  }


  //Code for getting the data from post method
  // return this.http.post(url, data, httpOptions).pipe(
  //   map(res => {
  //     return JSON.stringify(res)
  //   })
  // );




  //:Login
  login(username, password) {
    const url = this.server_url + "api/login";
    const data = {
      username,
      password
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };



    return this.http.post(url, data, httpOptions).pipe(
      map((data) => {
        return data;
      })
    );

  }



}
