import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-results',
  templateUrl: './new-results.component.html',
  styleUrls: ['./new-results.component.css'],
  host: {
    '(document:onafterprint)': 'onafterprint($event)'
  }
})
export class NewResultsComponent implements OnInit {
  page: number = 1;
  loader = false;
  dateNow = new Date().toLocaleDateString();

  isSinglePrinting = false;
  isAllPrinting = false;


  newResultData: [];

  singleResultData: any;
  singleResultName: String;
  singleResultId = 0;


  resultModal = false;

  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getNewResult();

  }

  getNewResult() {
    this.adminService.getNewResults().subscribe((successData) => {
      this.newResultData = successData;
      console.log(this.newResultData)
    }, (error) => console.log(error))
  }

  viewSingleResult(i, name) {
    console.log(i)
    //Get Sds result
    this.adminService.getMySDS(i).subscribe((successData) => {
      console.log(successData);
      this.singleResultData = successData;
      this.singleResultName = name;
      this.singleResultId = i;


      //Open the modal
      this.resultModal = true;

    }, (error) => console.log(error))
  }

  printSingleResult(i) {
    this.loader = true;
    this.isSinglePrinting = true;
    setTimeout(_ => this.loader = false, 900)
    setTimeout(_ => {

      window.print();

      this.adminService.setSinglePrint(i).subscribe((successData) => {
        swal({
          title: `Printed Sds result of ${this.singleResultName}`,
          type: "success"
        });
        this.getNewResult();

      }, (error) => console.log(error))




      this.isSinglePrinting = false
      this.resultModal = false;
    }, 1000);

  }

  printAll() {

    swal({
      title: 'Are you sure?',
      text: "All of this users will be moved on archive",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, print it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: false
    }).then((result) => {
      if (result.value) {
        this.loader = true;
        this.isAllPrinting = true;

        setTimeout(_ => this.loader = false, 900)
        setTimeout(_ => {
          window.print();


          this.adminService.setAllPrint().subscribe((successData) => {
            this.getNewResult();
          }, (error) => console.log(error))




          this.isAllPrinting = false
        }, 1000)
      } else if (result.dismiss === swal.DismissReason.cancel) {

      }
    })

  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/admin/auth"])

  }





}
