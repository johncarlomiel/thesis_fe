import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css']
})
export class AdminSettingsComponent implements OnInit {

  allUsers: any;
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
    this.adminService.changeType(type, id).subscribe((successData) => {
      // console.log(successData);
      this.getAllUsers();
    }, (error) => console.log(error))
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
