import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../interfaces/userInfo';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  server_url = "http://localhost:5000/";

  constructor(private http: HttpClient) { }

  deleteUser(id) {
    const url = this.server_url + "api/admin/users";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params: new HttpParams().set('id', id)
    }
    return this.http.delete(url, httpOptions);


  }
  getUsers() {
    const url = this.server_url + "api/admin/users";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    }

    return this.http.get<Users>(url, httpOptions);


  }

  getInfo(id) {
    const url = this.server_url + "api/admin/getInfo";
    let params = new HttpParams().set('id', id);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params: params

    }



    return this.http.get<Info>(url, httpOptions)
  }

  getMoreInfo(id) {
    const url = this.server_url + "api/admin/getMoreInfo";
    let params = new HttpParams().set('id', id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params: params

    }
    return this.http.get<MoreInfo>(url, httpOptions)
  }

  getProblems(id) {
    const url = this.server_url + "api/admin/getProblems";
    let params = new HttpParams().set('id', id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params: params

    }
    return this.http.get(url, httpOptions)

  }
  getEform(id) {
    const url = this.server_url + "api/admin/getEform";
    let params = new HttpParams().set('id', id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params: params

    }
    return this.http.get<Eform>(url, httpOptions)
  }

  getMySDS(id) {
    const url = this.server_url + "api/admin/getSDS";
    let params = new HttpParams().set('id', id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params: params

    }
    return this.http.get<SDS[]>(url, httpOptions)

  }
  search(keyword) {
    const url = this.server_url + "api/admin/searchUsers";
    let params = new HttpParams().set('keyword', keyword);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params: params

    }
    return this.http.get(url, httpOptions)

  }


  graph(data) {
    console.log(data)
    const url = this.server_url + "api/admin/graph";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })

    }
    return this.http.post<GraphResult>(url, data, httpOptions);


  }

}
interface SDS {
  name: string,
  result: [{ code: string, description: string, id: number, link: string, occupation: string, type: string }]
}
interface Eform {
  hasEform: boolean,
  url: string
}

interface Users {
  id: number,
  username: string,
  name: string
}
interface Info {
  addr: string,
  age: string,
  allowed_night: string,
  course: string,
  cp_num: number,
  father_job: string,
  father_name: string,
  father_religion: string,
  gender: string,
  have_friends: string,
  hobby: string,
  mother_job: string,
  mother_name: string,
  mother_religion: string,
  name: string,
  not_livingwith_parents: string,
  place_birth: string,
  religion: string,
  study_helper: string,
  study_status: string,
  transpo: string,
}

interface MoreInfo {
  ambition: string,
  downful_expi: string,
  happiest_expi: string,
  someone_to_talk: string,
  troubling_problems: string,
  want_to_change: string,
}
interface Problems {
  answer: number,
  cat: string,
  id: number,
  label: string,
  problem_id: number,
  title: string,
  user_id: number,
  value: number
}
interface GraphResult {
  conditionMet: { value: number, data: [], label: string },
  notCondition: { value: number, data: [], label: string },
  allResult: { value: number, data: [], label: string }
}