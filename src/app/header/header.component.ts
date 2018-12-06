import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userSession: Boolean = false;
  sdsTaken: Boolean = false;
  onSdsSession: Boolean = false;

  constructor(private authService: AuthService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    console.log(this.router.url)
    if (localStorage.getItem("Authorization") != "" && localStorage.getItem("Authorization") != null) {
      this.checkUserSession();
      this.checkSdsStatus();
      if (this.router.url == "/questions" || this.router.url == "/self-estimates" || this.router.url == "/evaluate") {
        this.onSdsSession = true;
        console.log('true')

      } else {

        this.onSdsSession = false;
      }
    }
  }

  checkUserSession() {
    this.authService.checkSession().subscribe((successData) => {
      this.userSession = true;
      console.log(this.userSession)
    },
      (error) => {
        console.log(error)
        this.userSession = false;
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
    localStorage.setItem("Authorization", "");
    this.userSession = false;
    this.router.navigate(["/"])
  }

  start() {
    if (this.userSession) {
      this.router.navigate(["questions"]);
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
