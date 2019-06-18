import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-print-old',
  templateUrl: './print-old.component.html',
  styleUrls: ['./print-old.component.css']
})
export class PrintOldComponent implements OnInit {



  page: number = 1;
  loader = false;
  dateNow = new Date().toLocaleDateString();

  isSinglePrinting = false;
  isAllPrinting = false;
  isEmpty = false;

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
  onSearchChange(searchValue: string) {
    this.adminService.dynamicSearch("original-print", searchValue).subscribe((successData) => {
      this.newResultData = successData;

      if (successData.length > 0) {
        this.isEmpty = false;
      } else {
        this.isEmpty = true;
      }
    }, (error) => console.log(error))
  }

  getNewResult() {
    this.adminService.getOldPrintResults().subscribe((successData) => {
      this.newResultData = successData;

    }, (error) => console.log(error))
  }

  viewSingleResult(i, name) {

    //Get Sds result
    this.adminService.getMySDS(i).subscribe((successData) => {

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
