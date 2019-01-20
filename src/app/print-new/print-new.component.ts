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

  isEmpty = false;

  singleResultData: any;
  singleResultName: string;
  singleResultId: number;

  resultModal = false;
  loader = false;
  isNewPrinting = false;
  riasec = Array.apply(null, Array());
  summaryCode = Array.apply(null, Array());
  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit() {
    this.getNewResult();
  }

  onSearchChange(searchValue: string) {
    this.adminService.dynamicSearch("print-section-new", searchValue).subscribe((successData) => {
      this.newResultData = successData;
      console.log(this.newResultData)
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
      console.log(this.newResultData)
      if (successData.length > 0) {
        this.isEmpty = false;
      } else {
        this.isEmpty = true;
      }
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


  printNewSingleResult(i) {
    this.riasec = [];
    this.summaryCode = [];
    this.loader = true;
    this.isNewPrinting = true;

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
      console.log(this.summaryCode)
    }, (error) => console.log(error))


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


}
