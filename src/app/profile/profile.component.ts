import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  codes: any;
  userInfo = {
    name: "",
    username: "",
    id: 0,
    iat: 0,
    exp: 0

  };
  constructor(private authService: AuthService, private profileService: ProfileService, private router: Router) {

  }

  ngOnInit() {

    //Check session
    this.authService.checkSession().subscribe((successData) => {

      this.userInfo = successData
      this.userInfo.name = this.capitalizeFirstLetter(this.userInfo.name)
      console.log(this.userInfo)
    },
      (error) => {
        this.router.navigate(["/"])
        console.log(error)
      });





    //Get user code information
    this.profileService.getMyCode().subscribe((successData) => {
      this.codes = successData;
      console.log(this.codes)
    },
      (error) => {
        console.log(error)
      });
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  randColor() {
    let colors = ["red", "orange",
      "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey",]
    return colors[Math.floor((Math.random() * colors.length) + 0)]
  }


}

interface UserInfo {
  name: string,
  username: string,
  id: number,
  iat: number,
  exp: number
}
