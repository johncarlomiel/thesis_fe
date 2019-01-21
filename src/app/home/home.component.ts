import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userSession: Boolean = false;
  constructor(public authService: AuthService, public router: Router, public data: DataService) { }

  ngOnInit() {

    this.checkSession();


  }








  //Check user session
  private checkSession() {
    if (localStorage.getItem("Authorization") != "" && localStorage.getItem("Authorization") != null) {
      this.authService.checkSession().subscribe((successData) => {
        this.userSession = true;



        // console.log(this.userSession)

      },
        (error) => {
          this.userSession = false;


          // console.log(this.userSession)
          console.log(error)
        });
    }
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
