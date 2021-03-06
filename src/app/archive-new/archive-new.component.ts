import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-archive-new',
  templateUrl: './archive-new.component.html',
  styleUrls: ['./archive-new.component.css']
})
export class ArchiveNewComponent implements OnInit {
  noResult = false;
  oldResultData: any;
  page = 1;
  loader = false;

  dateNow = new Date().toLocaleDateString();


  riasec = Array.apply(null, Array());
  summaryCode = Array.apply(null, Array());

  max = [55, 56, 56, 56, 56, 56];
  resultModal = false;
  isSinglePrinting = false;
  isNewPrinting = false;
  singleResultData: any;
  singleResultId: number;
  singleResultName: string;
  singleResultCode: string;

  recommendation: string;
  psychometrician: string;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.getOldResults();
  }
  onSearchChange(searchValue: string) {
    this.adminService.dynamicSearch("new-archive", searchValue).subscribe((successData) => {
      if (successData.length == 0) {
        this.noResult = true;
      } else {

        this.oldResultData = successData;

        this.noResult = false;
      }

    }, (error) => console.log(error));
  }

  getOldResults() {
    this.adminService.getOldResults().subscribe((successData) => {
      if (successData.length == 0) {
        this.noResult = true;
      } else {
        this.oldResultData = successData;

        this.noResult = false;
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
      this.riasec = [];
      this.summaryCode = [];
      this.loader = true;
      this.isNewPrinting = true;
      this.resultModal = false;
      this.recommendation = recommendation;
      this.psychometrician = psychometrician;

      //Get RIASEC Result
      this.adminService.getLetters(i).subscribe((successData) => {


        this.riasec = successData.sort((a, b) => b.value - a.value);

        // Get the summary code
        for (let i = 0; i < 3; i++) {
          this.summaryCode.push(this.riasec[i]);

        }
        this.loader = false;
        setTimeout(() => window.print(), 500)
        setTimeout(() => this.isNewPrinting = false, 1000);

      }, (error) => console.log(error))
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
