import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import swal from 'sweetalert2';
import { SuiModalService } from 'ng2-semantic-ui';
import { Router } from '@angular/router';
@Component({
  selector: 'app-archive-old',
  templateUrl: './archive-old.component.html',
  styleUrls: ['./archive-old.component.css']
})
export class ArchiveOldComponent implements OnInit {

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
  constructor(private adminService: AdminService, public modalService: SuiModalService, private router: Router) { }

  ngOnInit() {
    this.getOldResults();
  }

  onSearchChange(searchValue: string) {
    this.adminService.dynamicSearch("original-archive", searchValue).subscribe((successData) => {
      if (successData.length == 0) {
        this.noResult = true;
      } else {
        this.oldResultData = successData;

        // console.log(this.oldResultData)
        this.noResult = false;
      }

    }, (error) => console.log(error));
  }

  getOldResults() {
    this.adminService.getOldArchiveResults().subscribe((successData) => {
      if (successData.length == 0) {
        this.noResult = true;
      } else {
        this.oldResultData = successData;

        console.log(this.oldResultData)
        this.noResult = false;
      }
    }, (error) => console.log(error))
  }


  viewSingleResult(id, name) {
    console.log(id);
    this.adminService.getMySDS(id).subscribe((successData) => {
      this.singleResultData = successData;
      this.singleResultId = id;
      this.singleResultName = name;

      this.resultModal = true;
    })

  }

  printSingleResult(i) {
    this.loader = true;
    this.isSinglePrinting = true;
    this.resultModal = false;



    setTimeout(_ => this.loader = false, 900)
    setTimeout(_ => {
      window.print();
      this.isSinglePrinting = false
      this.resultModal = false;



    }, 1000)

  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/admin/auth"])

  }

}
