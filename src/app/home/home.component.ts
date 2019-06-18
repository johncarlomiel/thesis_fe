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
  chatSocket: any;
  takers: any;
  constructor(public authService: AuthService, public router: Router, public data: DataService) { }

  ngOnInit() {




    this.checkSession();
    this.getTakers();


  }









  //Check user session
  private checkSession() {
    if (localStorage.getItem("Authorization") != "" && localStorage.getItem("Authorization") != null) {
      this.authService.checkSession().subscribe((successData) => {
        this.userSession = true;




      },
        (error) => {
          this.userSession = false;


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

  getTakers() {
    this.data.getTakers().subscribe((takers) => {

      this.takers = takers[0].takers;
    }, err => console.log(err));
  }



}
