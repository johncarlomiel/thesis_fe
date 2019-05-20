import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import swal from 'sweetalert2';
import { SuiModalService } from 'ng2-semantic-ui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  noResult = false;
  oldResultData: any;
  page = 1;
  loader = false;

  dateNow = new Date().toLocaleDateString();


  resultModal = false;
  isSinglePrinting = false;
  singleResultData: any;
  singleResultId: number;
  singleResultName: string;
  summaryCode: any;
  singleResultCode: string;
  allOccupations: any;
  constructor(private adminService: AdminService, public modalService: SuiModalService, private router: Router) { }

  ngOnInit() {
    this.getTempOldResults();
  }

  onSearchChange(searchValue: string) {
    this.adminService.dynamicSearch("old-archive", searchValue).subscribe((successData) => {
      // console.log(successData);
      if (successData.length == 0) {
        this.noResult = true;
      } else {
        this.oldResultData = successData;

        // console.log(this.oldResultData)
        this.noResult = false;
      }
    }, (error) => console.log(error))
  }

  getTempOldResults() {
    this.adminService.getTempOldResults().subscribe((successData) => {
      if (successData.length == 0) {
        this.noResult = true;
      } else {
        this.oldResultData = successData;

        // console.log(this.oldResultData)
        this.noResult = false;
      }
    }, (error) => console.log(error))
  }


  viewSingleResult(id, name) {
    // console.log(id);
    this.adminService.getMySDS(id).subscribe((successData) => {
      // console.log(successData)
      this.singleResultData = successData;
      this.allOccupations = successData[0].result;
      this.singleResultName = name;
      this.singleResultId = id;
      this.singleResultCode = successData[0].name;
      // console.log(this.singleResultCode)


      this.resultModal = true;
    })

  }

  printSingleResult(i) {
    this.loader = true;
    this.isSinglePrinting = true;

    this.summaryCode = this.singleResultCode.split("");

    setTimeout(() => this.loader = false, 500);
    setTimeout(() => {
      window.print();
      this.isSinglePrinting = false;
    }, 1000);





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
