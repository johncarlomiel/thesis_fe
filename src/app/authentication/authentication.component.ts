import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  login: Boolean = true;
  loader: Boolean = false;
  genderOptions = ["Male", "Female"]
  selectedGender: string;

  @ViewChild('registerUsername') regUser: ElementRef;
  @ViewChild('registerPassword') regPass: ElementRef;
  @ViewChild('registerFullname') regName: ElementRef;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  change(qwe) {
    if (qwe == "signup") this.login = false;
    else this.login = true;
  }



  register(username, password, name, gender) {
    if (username != "" && password != "" && name != "" && gender != undefined) {
      let dp_path = "";
      if (gender == "Male") {
        dp_path = "assets/images/defaults/male.jpg";
      } else {
        dp_path = "assets/images/defaults/female.jpg";
      }
      this.authService.register(username, password, name, gender, dp_path).subscribe((data) => {
        this.selectedGender = "";

        this.loader = true;
        setTimeout(() => {
          this.loader = false
          swal({
            title: 'Registered Successfully',
            text: 'You may now login your account',
            type: 'success',

          })
        }, 1500)
        this.regUser.nativeElement.value = "";
        this.regPass.nativeElement.value = "";
        this.regName.nativeElement.value = "";



      },
        error => {
          swal({
            title: 'Username already taken',
            type: 'error',

          })
        });
    } else {
      swal({
        title: "Please fill all fields",
        type: "error"
      })
    }

  }



  userLogin(username, password) {
    // console.log(username, password)
    if (username == "admin" && password == "admin") {
      this.router.navigate(["/admin-auth"])
    } else {
      this.authService.login(username, password).subscribe((successData) => {

        localStorage.setItem("Authorization", "Bearer " + successData);
        this.loader = true;
        setTimeout(() => {
          this.loader = false

          this.router.navigate(["/"]);
        }, 1500)

      },
        (error) => {

          swal({
            title: error.error.message,
            type: "error"
          })
        });
    }

  }

}
