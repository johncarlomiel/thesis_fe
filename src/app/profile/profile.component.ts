import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  emptyResult = true;
  codes: any;
  userInfo = {
    name: "",
    username: "",
    id: 0,
    iat: 0,
    exp: 0

  };
  colors = [];
  constructor(private authService: AuthService,
    private profileService: ProfileService,
    private router: Router,
    private userService: UserService) {

  }

  ngOnInit() {

    //Check SDS Result
    this.userService.checkSdsStatus().subscribe((successData) => {
      if (successData.length == 0) {
        this.emptyResult = true;
      } else {
        this.emptyResult = false;
      }
    }, (error) => console.log(error))
    //Check SDS Result

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
      console.log(this.codes.length)
      for (let i = 0; i < this.codes.length; i++) {
        this.colors.push(this.randColor());
      }
    },
      (error) => {
        console.log(error)
      });
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  randColor() {
    let mycolors = ["red", "orange",
      "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey",]
    return mycolors[Math.floor((Math.random() * mycolors.length) + 0)]
  }


}

interface UserInfo {
  name: string,
  username: string,
  id: number,
  iat: number,
  exp: number
}
