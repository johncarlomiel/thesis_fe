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
  riasec: any;
  summaryCode = Array.apply(null, Array());
  val = 25;
  value = 50;
  r = "r";
  page: number = 1;
  loader = false;
  dateNow = new Date().toLocaleDateString();

  isSinglePrinting = false;
  isAllPrinting = false;
  isNewPrinting = false;
  isEmpty = false;

  newResultData: [];

  singleResultData: any;
  singleResultName: string;
  singleResultId = 0;
  singleResultCode: string;

  allOccupations = Array.apply(null, Array())


  resultModal = false;

  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getTempResults();

  }

  onSearchChange(searchValue: string) {

    this.adminService.dynamicSearch("print-section-old", searchValue).subscribe((successData) => {
      this.newResultData = successData;

      if (successData.length > 0) {
        this.isEmpty = false;
      } else {
        this.isEmpty = true;
      }
    }, (error) => console.log(error))
  }

  getTempResults() {
    this.adminService.getTempResults().subscribe((successData) => {
      this.newResultData = successData;

      if (successData.length > 0) {
        this.isEmpty = false;
      } else {
        this.isEmpty = true;
      }
    }, (error) => console.log(error))
  }

  viewSingleResult(i, name) {

    //Get Sds result
    this.adminService.getMySDS(i).subscribe((successData) => {

      this.singleResultData = successData;
      this.allOccupations = successData[0].result;
      this.singleResultName = name;
      this.singleResultId = i;
      this.singleResultCode = successData[0].name;


      //Open the modal
      this.resultModal = true;

    }, (error) => console.log(error))
  }

  printSingleResult(i) {
    this.loader = true;
    this.isSinglePrinting = true;

    this.summaryCode = this.singleResultCode.split("");

    setTimeout(() => this.loader = false, 500);
    setTimeout(() => {
      window.print();
      this.adminService.setSinglePrint(i).subscribe((successData) => {
        swal({
          title: `Printed Sds result of ${this.singleResultName}`,
          type: "success"
        });

        this.resultModal = false;
        this.getTempResults();
      }, (error) => console.log(error));


      this.isSinglePrinting = false;
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
            this.getTempResults();
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
  getColor(letter) {
    if (letter == "R") {
      return "#F1463C";
    } else if (letter == "I") {
      return "#F79517";

    }
    else if (letter == "A") {
      return "#FFCF00";

    }
    else if (letter == "S") {
      return "#01723B";

    }
    else if (letter == "E") {
      return "#0073A5";

    } else {
      return "#9279B7";

    }
  }
  getWord(letter) {
    if (letter == "R") {
      return "Realistic";
    } else if (letter == "I") {
      return "Investigative";

    }
    else if (letter == "A") {
      return "Artistic";

    }
    else if (letter == "S") {
      return "Social";

    }
    else if (letter == "E") {
      return "Enterprising";

    } else {
      return "Conventional";

    }
  }







}
