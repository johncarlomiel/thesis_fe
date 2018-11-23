import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(username, password) {
    this.authService.login(username, password).subscribe((successData) => {
      Swal({
        title: 'Login Success',
        type: 'success'
      })
      localStorage.setItem("Authorization", "Bearer " + successData);
      setTimeout(() => this.router.navigate(["/"]), 1000)
    },
      (error) => {
        Swal({
          title: error.error.message,
          type: "error"
        })
      });
  }

}
