import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../interfaces/userInfo';
import * as jwt_decode from 'jwt-decode';
import { config } from '../configs/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  server_url = config.ip;
  constructor(private http: HttpClient) { }

  checkSdsStatus() {
    const url = this.server_url + "user/checkSdsStatus";
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem("Authorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    }
    return this.http.get<SDS[]>(url, httpOptions);
  }

  getPayload(token) {
    let payload = token.split(" ")[1];
    return jwt_decode(payload);
  }
}
interface SDS {
  id: number,
  user_id: number,
  code: string
}
