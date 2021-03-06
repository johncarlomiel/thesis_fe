import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../interfaces/userInfo';
import { config } from '../configs/config';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  server_url = config.ip;

  constructor(private http: HttpClient) { }

  searchContacts(keyword, limit) {
    const url = this.server_url + "user/contacts/search";
    const params = new HttpParams().set("user_type", "admin").set("keyword", keyword).set("limit", limit);
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params
    }
    return this.http.get<[]>(url, httpOptions);
  }


  searchEvents(keyword) {
    const url = this.server_url + "admin/events/search";
    const params = new HttpParams().set("keyword", keyword);
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params
    }
    return this.http.get<[]>(url, httpOptions);
  }

  getTakersByDate(date) {
    const url = this.server_url + "admin/users/attendance";
    const params = new HttpParams().set("date", date);
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params
    }
    return this.http.get(url, httpOptions);
  }

  changeUserPermission(i, permission) {
    const url = this.server_url + "admin/users/permission";
    const body = {
      user_id: i,
      isGrantedAccess: permission
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    }

    return this.http.patch(url, body, httpOptions);
  }

  deleteUser(id) {
    const url = this.server_url + "admin/users";
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
    const url = this.server_url + "admin/users";
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
    const url = this.server_url + "admin/users";
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
    const url = this.server_url + "admin/account";
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
    const url = this.server_url + "admin/getInfo";
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
    const url = this.server_url + "admin/getMoreInfo";
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
    const url = this.server_url + "admin/getProblems";
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
    const url = this.server_url + "admin/getEform";
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
    const url = this.server_url + "admin/getSDS";
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
    const url = this.server_url + "admin/searchUsers";
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
    const url = this.server_url + "admin/resultSearch";

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
    // console.log(data)

    //Process Query

    let criteria_holder = "";
    let criteriaMet = "";
    let notCriteriaMet = "";



    data.criteria.forEach((first, firstIndex) => {
      notCriteriaMet += "(";
      criteriaMet += "(";
      first.value.forEach((element, index) => {
        notCriteriaMet += "users." + first.fieldname + " = " + `'${element}'`;
        criteriaMet += "users." + first.fieldname + " = " + `'${element}'`;
        if (index != first.value.length - 1) {
          notCriteriaMet += " OR "
          criteriaMet += " OR "
        }
      });
      notCriteriaMet += ")";
      notCriteriaMet += " AND "
      criteriaMet += ")"
      criteriaMet += " AND "
      console.log("done first event")
    });

    data.value.forEach((element, index) => {
      console.log("second start")
      notCriteriaMet += element + " = 0";
      criteriaMet += element + " = 1";
      if (index != data.value.length - 1) {
        criteriaMet += " AND "
        notCriteriaMet += " AND "
      }
      console.log("second end")
    });
    console.log(data);

    let request_data = {
      criteria_holder,
      criteriaMet,
      notCriteriaMet
    }
    console.log(request_data);




    const url = this.server_url + "admin/graph";
    const httpOptions = {
      headers: new HttpHeaders({

        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })

    }
    return this.http.post<GraphResult>(url, request_data, httpOptions);


  }

  login(data) {
    const url = this.server_url + "auth/admin/login";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })

    }
    return this.http.post<String>(url, data, httpOptions);

  }



  generalGraph(data) {
    // console.log(data)
    const url = this.server_url + "admin/genGraph";
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
    // console.log(problem)
    const url = this.server_url + "admin/indivProb";
    const httpOptions = {
      headers: new HttpHeaders({

        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })

    }
    return this.http.post<[]>(url, problem, httpOptions);
  }
  getOldPrintResults() {
    const url = this.server_url + "admin/old-print";
    const httpOptions = {
      headers: new HttpHeaders({

        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })

    }
    return this.http.get<[]>(url, httpOptions);
  }
  getOldArchiveResults() {
    const url = this.server_url + "admin/old-archive";
    const httpOptions = {
      headers: new HttpHeaders({

        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })

    }
    return this.http.get<[]>(url, httpOptions);
  }
  getNewResults() {
    const url = this.server_url + "admin/newResults";
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
    const url = this.server_url + "admin/results";
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
    const url = this.server_url + "admin/oldTempResults";
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
    const url = this.server_url + "admin/oldResults";
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
    const url = this.server_url + "admin/singleResult";
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
    const url = this.server_url + "admin/allResult";
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
    const url = this.server_url + "admin/getLetters";
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

  getEvents() {
    const url = this.server_url + "admin/events";
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    }
    return this.http.get<[]>(url, httpOptions);
  }
  deleteEvent(id) {
    const url = this.server_url + "admin/events";
    const params = new HttpParams().set("id", id);
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
      params
    }
    return this.http.delete<[]>(url, httpOptions);
  }

  updateEvent(field, value, id) {
    const url = this.server_url + "admin/events";
    var formData = new FormData();
    const params = new HttpParams().set("field_name", field).set("id", id);
    formData.append("value", value);
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem("AdminAuthorization"),
        'Access-Control-Allow-Origin': '*',
      }),
      params
    }
    return this.http.put(url, formData, httpOptions);
  }

  addEvent(data) {
    const url = this.server_url + "admin/events";

    var formData = new FormData();
    formData.append("name", data.name);
    formData.append("date", data.date);
    formData.append("location", data.location);
    formData.append("poster_url", data.poster);
    formData.append("time_from", data.time_from);
    formData.append("time_to", data.time_to);
    formData.append("description", data.description);

    console.log(formData.get("poster"))
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem("AdminAuthorization"),
      }),
    }
    return this.http.post(url, formData, httpOptions);
  }

  getContacts(limit) {
    const url = this.server_url + "user/contacts";
    const params = new HttpParams().set("user_type", "admin").set("limit", limit);
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params
    }
    return this.http.get<[]>(url, httpOptions);
  }

  getMessages(convo_name, limit) {
    const url = this.server_url + "user/messages";
    const params = new HttpParams().set("user_type", "admin").set("convo_name", convo_name).set("limit", limit);
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params
    }
    return this.http.get<[]>(url, httpOptions);
  }


  getInvitations(event_id) {
    const url = this.server_url + "admin/invitation/" + event_id;
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem("AdminAuthorization"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    }
    return this.http.get<[]>(url, httpOptions);
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
}interface Event {
  poster_url: string, name: string, location: string, date: Date, time_from: any, time_to: any
}
