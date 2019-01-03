import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../interfaces/userInfo';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  server_url = "http://localhost:5000/";
  constructor(private http: HttpClient) { }

  checkSdsStatus() {
    const url = this.server_url + "api/checkSdsStatus";
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem("Authorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    }
    return this.http.get<SDS[]>(url, httpOptions);
  }
}
interface SDS {
  id: number,
  user_id: number,
  code: string
}
