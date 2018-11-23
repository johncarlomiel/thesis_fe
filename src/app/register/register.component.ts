import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { KeyRegistry } from '@angular/core/src/di/reflective_key';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register(username, password, name) {
    this.authService.register(username, password, name).subscribe((data) => {

      Swal({
        title: 'Registered Successfully',
        type: 'success',

      })
      this.router.navigate(["/login"])


    },
      error => {
        Swal({
          title: 'Username already taken',
          type: 'error',

        })
      });

  }

}
