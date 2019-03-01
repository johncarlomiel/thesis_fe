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
  server_url = "http://localhost:5000/";




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
      const url = this.server_url + "auth/users/checkSession";
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
  register(username, password, name, gender, dp_path) {
    const url = this.server_url + "auth/users/register";
    const data = {
      username,
      password,
      name,
      gender,
      dp_path
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
    const url = this.server_url + "auth/users/login";
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
