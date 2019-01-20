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
        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params: new HttpParams().set('id', id)
    }
    return this.http.delete(url, httpOptions);


  }
  getUsers() {
    const url = this.server_url + "api/admin/users";
    let params = new HttpParams().set('type', "user");
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params: params
    }

    return this.http.get<Users>(url, httpOptions);


  }
  getAllUsers() {
    const url = this.server_url + "api/admin/users";
    let params = new HttpParams().set('type', "all");
    const httpOptions = {
      headers: new HttpHeaders({

        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params: params
    }

    return this.http.get<Users>(url, httpOptions);
  }

  changeType(type, id) {
    const url = this.server_url + "api/admin/account";
    let body = {
      fieldname: "type",
      value: type,
      id
    }
    const httpOptions = {
      headers: new HttpHeaders({

        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    }
    return this.http.put(url, body, httpOptions);

  }

  getInfo(id) {
    const url = this.server_url + "api/admin/getInfo";
    let params = new HttpParams().set('id', id);

    const httpOptions = {
      headers: new HttpHeaders({

        'authorization': localStorage.getItem("AdminAuthorization"),
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

        'authorization': localStorage.getItem("AdminAuthorization"),
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

        'authorization': localStorage.getItem("AdminAuthorization"),
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

        'authorization': localStorage.getItem("AdminAuthorization"),
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

        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params: params

    }
    return this.http.get<sds[]>(url, httpOptions)

  }
  search(type, keyword) {
    const url = this.server_url + "api/admin/searchUsers";
    let params = new HttpParams().set('keyword', keyword).set('type', type);
    const httpOptions = {
      headers: new HttpHeaders({

        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params: params

    }
    return this.http.get(url, httpOptions)

  }
  dynamicSearch(condition: string, keyword: string) {
    const url = this.server_url + "api/admin/resultSearch";

    let params = new HttpParams().set('keyword', keyword).set('condition', condition)
    const httpOptions = {
      headers: new HttpHeaders({

        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params: params

    }
    return this.http.get<[]>(url, httpOptions)
  }


  graph(data) {
    console.log(data)
    const url = this.server_url + "api/admin/graph";
    const httpOptions = {
      headers: new HttpHeaders({

        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })

    }
    return this.http.post<GraphResult>(url, data, httpOptions);


  }

  login(data) {
    const url = this.server_url + "api/admin/login";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })

    }
    return this.http.post<String>(url, data, httpOptions);

  }

  generalGraph(data) {
    console.log(data)
    const url = this.server_url + "api/admin/genGraph";
    const httpOptions = {
      headers: new HttpHeaders({

        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })

    }
    return this.http.post<[]>(url, data, httpOptions);
  }
  getUsersProblem(problem) {
    console.log(problem)
    const url = this.server_url + "api/admin/indivProb";
    const httpOptions = {
      headers: new HttpHeaders({

        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })

    }
    return this.http.post<[]>(url, problem, httpOptions);
  }

  getNewResults() {
    const url = this.server_url + "api/admin/newResults";
    const httpOptions = {
      headers: new HttpHeaders({

        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })

    }
    return this.http.get<[]>(url, httpOptions);
  }

  getTempResults() {
    const url = this.server_url + "api/admin/results";
    const httpOptions = {
      headers: new HttpHeaders({

        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })

    }
    return this.http.get<[]>(url, httpOptions);
  }

  getTempOldResults() {
    const url = this.server_url + "api/admin/oldTempResults";
    const httpOptions = {
      headers: new HttpHeaders({

        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })

    }
    return this.http.get<[]>(url, httpOptions);

  }
  getOldResults() {
    const url = this.server_url + "api/admin/oldResults";
    const httpOptions = {
      headers: new HttpHeaders({

        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })

    }
    return this.http.get<[]>(url, httpOptions);
  }

  setSinglePrint(i) {
    const url = this.server_url + "api/admin/singleResult";
    const data = {
      id: i
    }
    const httpOptions = {
      headers: new HttpHeaders({

        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),

    }
    return this.http.put(url, data, httpOptions)

  }
  setAllPrint() {
    const url = this.server_url + "api/admin/allResult";
    const httpOptions = {
      headers: new HttpHeaders({

        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),

    }
    return this.http.put(url, httpOptions);
  }
  getLetters(id) {
    const url = this.server_url + "api/admin/getLetters";
    let params = new HttpParams().set('id', id);

    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
      params

    }
    return this.http.get<RIASEC[]>(url, httpOptions);
  }

}
interface sds {
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
interface RIASEC {
  user_id: number,
  value: number,
  letter: string,
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