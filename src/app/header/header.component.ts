import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userSession: Boolean = false;
  constructor(private authService: AuthService) { }

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

}
