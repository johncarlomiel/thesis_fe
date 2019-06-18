import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-print-new',
  templateUrl: './print-new.component.html',
  styleUrls: ['./print-new.component.css']
})
export class PrintNewComponent implements OnInit {
  newResultData: any;
  isSinglePrinting = false;
  isEmpty = false;
  dateNow: any;
  singleResultData: any;
  singleResultName: string;
  singleResultId: number;
  recommendation: string;
  psychometrician: string;
  singleResultCode: any;
  resultModal = false;
  loader = false;
  isNewPrinting = false;
  riasec = Array.apply(null, Array());
  max = [55, 56, 56, 56, 56, 56];
  summaryCode = Array.apply(null, Array());
  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit() {
    this.getNewResult();
  }

  onSearchChange(searchValue: string) {
    this.adminService.dynamicSearch("print-section-new", searchValue).subscribe((successData) => {
      this.newResultData = successData;

      if (successData.length > 0) {
        this.isEmpty = false;
      } else {
        this.isEmpty = true;
      }
    }, (error) => console.log(error))
  }

  getNewResult() {
    this.adminService.getNewResults().subscribe((successData) => {
      this.newResultData = successData;

      if (successData.length > 0) {
        this.isEmpty = false;
      } else {
        this.isEmpty = true;
      }
    }, (error) => console.log(error))
  }

  viewSingleResult(i, name, summary_code, timestamp) {

    //Get Sds result
    this.adminService.getMySDS(i).subscribe((successData) => {

      this.dateNow = timestamp.split("T")[0];
      this.singleResultData = successData;
      this.singleResultName = name;
      this.singleResultId = i;
      this.singleResultCode = summary_code;

      //Open the modal
      this.resultModal = true;

    }, (error) => console.log(error))
  }


  printNewSingleResult(i, recommendation, psychometrician) {

    if (recommendation != "" && psychometrician != "") {
      this.resultModal = false;
      this.isSinglePrinting = true;
      this.recommendation = recommendation;
      this.psychometrician = psychometrician;

      this.riasec = [];
      this.summaryCode = [];
      this.loader = true;
      this.isNewPrinting = true;

      setTimeout(() => {
        //Get RIASEC Result
        this.adminService.getLetters(i).subscribe((successData) => {
          this.riasec = successData.sort((a, b) => b.value - a.value);

          // Get the summary code
          for (let i = 0; i < 3; i++) {
            this.summaryCode.push(this.riasec[i]);

          }
          this.loader = false;
          setTimeout(() => {
            window.print()
            this.adminService.setSinglePrint(i).subscribe((successData) => {
              swal({
                title: `Printed Sds result of ${this.singleResultName}`,
                type: "success"
              });
              this.resultModal = false;
              this.getNewResult();
            }, (error) => console.log(error));
          }, 500)

          setTimeout(() => this.isNewPrinting = false, 1000)

        }, (error) => console.log(error))
      }, 200)

    } else {
      swal({
        title: "Please fill all fields",
        type: "warning"
      })
    }


  }



  logout() {
    localStorage.clear();
    this.router.navigate(["/admin-auth"])
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


}
