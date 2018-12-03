import { Component, OnInit } from '@angular/core';
import { criteria } from '../data/criteria';
import { problems } from '../data/problems';
import { AdminService } from '../services/admin.service';


@Component({
  selector: 'app-admin-graph',
  templateUrl: './admin-graph.component.html',
  styleUrls: ['./admin-graph.component.css']
})
export class AdminGraphComponent implements OnInit {
  dataSource: Object;
  problems;
  criteria;
  constructor(private adminService: AdminService) {
    this.dataSource = {
      "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
      },
      // Chart Data
      "data": [{
        "label": "Venezuela",
        "value": "290"
      }, {
        "label": "Saudi",
        "value": "260"
      }, {
        "label": "Canada",
        "value": "180"
      }, {
        "label": "Iran",
        "value": "140"
      }, {
        "label": "Russia",
        "value": "115"
      }, {
        "label": "UAE",
        "value": "100"
      }, {
        "label": "US",
        "value": "30"
      }, {
        "label": "China",
        "value": "30"
      }]
    }; // end of this.dataSource
  }

  ngOnInit() {
    this.criteria = criteria;
    this.getProblems();


  }
  getProblems() {
    this.adminService.getAllProblems().subscribe((successData) => {
      console.log(successData)
    }, (error) => console.log(error))
  }

  try() {
    console.log()
  }

}
