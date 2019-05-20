import { Component, OnInit } from '@angular/core';
import * as date_fns from 'date-fns';
import { AdminService } from '../services/admin.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  date: any;
  takers: any;
  isPrinting = false;
  isLoading = false;
  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  generateReport() {
    if (this.takers.length > 0) {
      this.isPrinting = true;
      setTimeout(() => {
        window.print();
        setTimeout(() => {
          this.isPrinting = false;
        }, 500);
      }, 500);
    } else {
      swal({
        title: "Error printing",
        text: "There is no result of takers",
        type: "warning"
      })
    }
  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/admin-auth"])

  }

  changeDate() {
    this.isLoading = true;
    let date = date_fns.format(this.date, "YYYY-MM-DD")
    console.log(date)
    this.adminService.getTakersByDate(date.toString()).subscribe((takers) => {
      this.isLoading = false;
      console.log(takers)
      this.takers = takers;
    }, err => console.error(err));
  }

  convert(date, format) {
    return date_fns.format(date, format);
  }

}
