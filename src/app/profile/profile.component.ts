import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';

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
  constructor(private authService: AuthService, private profileService: ProfileService) {

  }

  ngOnInit() {

    //Check session
    this.authService.checkSession().subscribe((successData) => {

      this.userInfo = successData
      console.log(this.userInfo)
    },
      (error) => {
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


}

interface UserInfo {
  name: string,
  username: string,
  id: number,
  iat: number,
  exp: number
}
