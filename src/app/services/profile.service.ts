import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../interfaces/userInfo';
import { config } from '../configs/config';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  server_url = config.ip;
  constructor(private http: HttpClient) { }

  getMyCode() {
    const url = this.server_url + "user/getMyCode";
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
