import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../interfaces/userInfo';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  server_url = "http://192.168.215.185:5000/";
  constructor(private http: HttpClient) { }

  getMyCode() {
    const url = this.server_url + "api/getMyCode";
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem("Authorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    }

    return this.http.get<Codes>(url, httpOptions);


  }



}
interface Codes {
  result: any
}
