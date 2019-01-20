import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../interfaces/userInfo';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  server_url = "http://localhost:5000/";

  constructor(private http: HttpClient) { }




  submitResult(result) {
    const url = this.server_url + "api/submitResult";
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
    console.log(letters)


    const url = this.server_url + "api/submitLetters";

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
    const url = this.server_url + "api/submitSummaryCode";
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
    console.log(firstLetter)

    return this.http.post(url, data, httpOptions);
  }
}
