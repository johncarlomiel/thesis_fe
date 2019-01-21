import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { UserService } from '../services/user.service';
import { Questions } from '../configs/questionClass';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userSession: Boolean = false;
  sdsTaken: Boolean = false;
  onSdsSession: Boolean = false;
  questions = new Questions;
  startLabel = "Start Now";


  constructor(private authService: AuthService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    if (localStorage.getItem("inSession") != null && localStorage.getItem("inSession") != "") {
      this.startLabel = "Continue Session";


    } else {
      this.startLabel = "Start Now";
    }

    if (localStorage.getItem("Authorization") != "" && localStorage.getItem("Authorization") != null) {
      this.checkUserSession();
      this.checkSdsStatus();
      if (this.router.url == "/questions" || this.router.url == "/self-estimates" || this.router.url == "/evaluate") {
        this.onSdsSession = true;


      } else {

        this.onSdsSession = false;
      }
    }
  }

  checkUserSession() {
    this.authService.checkSession().subscribe((successData) => {
      this.userSession = true;

    },
      (error) => {
        console.log(error)
        this.userSession = false;
        localStorage.removeItem("Authorization")
      })
  }

  checkSdsStatus() {
    this.userService.checkSdsStatus().subscribe((successData) => {
      if (successData.length == 0) {
        this.sdsTaken = false;
      } else {
        this.sdsTaken = true;
      }
    }, (error) => console.log(error))
  }

  logout() {

    localStorage.clear();
    this.startLabel = "Start Now";
    this.userSession = false;
    this.router.navigate(["/"])
    swal({
      title: "Logout Success",
      type: "success"
    })
  }

  start() {
    if (this.userSession) {
      if (localStorage.getItem('inSession') != "" && localStorage.getItem('inSession') != null) {
        this.router.navigate([localStorage.getItem("tsprog")]);

      } else {
        let res = Array.apply(null, Array(18));
        localStorage.setItem("qstResult", JSON.stringify(res));
        localStorage.setItem("tsprog", "questions");
        localStorage.setItem("tsqts", JSON.stringify(this.questions.questions));
        localStorage.setItem("qtsIndex", "0");
        localStorage.setItem("inSession", btoa("true"));
        this.router.navigate(["questions"]);
      }


    } else {
      swal({
        title: "Please login first",
        type: "warning"
      });
      setTimeout(() => {
        this.router.navigate(["authentication"]);
      }, 1000);

    }
  }

}
