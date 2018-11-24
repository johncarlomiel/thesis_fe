import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService, private profileService: ProfileService) { }

  ngOnInit() {



    //Check session
    this.authService.checkSession().subscribe((successData) => {
      console.log(successData)
    },
      (error) => {
        console.log(error)
      });

    //Get user code information
    this.profileService.getMyCode().subscribe((successData) => {
      console.log(successData)
    },
      (error) => {
        console.log(error)
      });
  }

}
