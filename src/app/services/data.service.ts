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
}
