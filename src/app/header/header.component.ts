import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userSession: Boolean = false;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("Authorization") != "" && localStorage.getItem("Authorization") != null) {
      this.checkUserSession();
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

  logout() {
    localStorage.setItem("Authorization", "");
    this.userSession = false;
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
        this.router.navigate(["login"]);
      }, 1000);

    }
  }

}
