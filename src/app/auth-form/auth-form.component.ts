import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  submit(stdNo) {
    if (stdNo != "") {
      this.router.navigate(["questions"])
    } else {
      alert("Please fill the required field")
    }
  }

}
