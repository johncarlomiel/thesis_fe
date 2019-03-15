import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../interfaces/userInfo';
import { config } from '../configs/config';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  server_url = config.ip;

  constructor(private http: HttpClient) { }




  submitResult(result) {
    const url = this.server_url + "user/submitResult";
    const data = {
      result
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem("Authorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    }
    return this.http.post(url, data, httpOptions);


  }
  submitLetters(letters) {
    // console.log(letters)


    const url = this.server_url + "user/submitLetters";

    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem("Authorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    let data = {
      letters
    };

    return this.http.post(url, data, httpOptions);



  }

  submitSummaryCode(firstLetter, secondLetter, thirdLetter) {
    const url = this.server_url + "user/submitSummaryCode";
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem("Authorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    let data = {
      code: firstLetter + secondLetter + thirdLetter
    };
    // console.log(firstLetter)

    return this.http.post(url, data, httpOptions);
  }

  payload(token, type) {

    const url = this.server_url + "auth/payload";
    const params = new HttpParams().set("user_type", type)
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': token,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params
    };



    return this.http.get<Payload>(url, httpOptions);
  }
}
interface Payload {
  dp_path: string,
  exp: number,
  iat: number,
  id: number,
  name: string,
  username: string
}
