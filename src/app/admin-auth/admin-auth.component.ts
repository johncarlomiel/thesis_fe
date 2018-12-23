import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {
  isError = false;
  errorMsg = "";
  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit() {
  }



  login(username, password) {
    if (username != "" && password != "") {
      this.isError = false;

      //Transform username and password into json format
      let data = { username, password }
      //Send a request to service
      this.adminService.login(data).subscribe((successData) => {
        localStorage.setItem("AdminAuthorization", "Bearer " + successData)
        this.router.navigate(["/admin/home"])
      }, (error) => {
        this.isError = true;
        this.errorMsg = "Wrong username or password";
      })

    } else {
      this.isError = true;
      this.errorMsg = "Please fill all fields";


    }
  }
}
