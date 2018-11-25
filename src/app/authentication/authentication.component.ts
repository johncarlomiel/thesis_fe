import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  login: Boolean = true;
  constructor() { }

  ngOnInit() {
  }

  change(qwe) {
    if (qwe == "signup") this.login = false;
    else this.login = true;
  }

}
