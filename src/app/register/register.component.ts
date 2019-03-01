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



}
