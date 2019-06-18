import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css']
})
export class AdminSettingsComponent implements OnInit {

  allUsers: any;
  isLoading = false;
  page = 1;
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }


  getAllUsers() {
    this.adminService.getAllUsers().subscribe((successData) => {
      this.allUsers = successData;
      // console.log(this.allUsers)

    }, (error) => console.log(error))
  }

  changeType(type, id) {

    swal({
      title: 'Are you sure?',
      text: "This change may affect some situations.",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, change it!'
    }).then((result) => {
      if (result.value) {
        this.isLoading = true;
        this.adminService.changeType(type, id).subscribe((successData) => {
          // console.log(successData);
          this.isLoading = false;
          this.getAllUsers();
          swal(
            'Changed!',
            'Account role is changed',
            'success'
          )
        }, (error) => console.log(error))

      }
    })

  }
  onSearchChange(searchValue: string) {
    this.adminService.search('all', searchValue).subscribe((successData) => {
      this.allUsers = successData;
    }, (error) => console.log(error))

  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/admin-auth"])

  }
}
