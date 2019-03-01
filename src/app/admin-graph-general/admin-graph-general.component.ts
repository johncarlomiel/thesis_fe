import { Component, OnInit, NgZone } from '@angular/core';
import { criteria } from '../data/criteria';
import { problems } from '../data/problems';
import { tables } from '../models/tables';
import { GraphLabel } from '../models/graphLabel';
import { Label } from '../models/tryLabel';
import * as FusionCharts from 'fusioncharts';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-graph-general',
  templateUrl: './admin-graph-general.component.html',
  styleUrls: ['./admin-graph-general.component.css']
})
export class AdminGraphGeneralComponent implements OnInit {
  loader = false;
  filterValue = 0;
  problems: any;
  criteria: any;
  criteria_variables: any;
  graphLbl: any;
  isPanelOpen = false;
  printing: Boolean = false;
  chartWidth = "100%";
  category_header: any;
  catModal = false;
  catModalData = Array.apply(null, Array());
  catModalHeader = "";


  dataplotModal: Boolean = false;
  dataPlotData = Array.apply(null, Array())
  withResult: Boolean = false;
  chartObj: any;
  chart: any = 'column2d';
  message: string;
  handler: any;
  initMessage: any;
  iMsg: string;
  clickPlotMsg: string;
  attached: boolean;
  dataSource = {
    chart: {
      caption: "",
      subCaption: "",
      xAxisName: "Labels",
      yAxisName: "Values",
      numberSuffix: "",
      theme: "candy",
      "palettecolors": "5d62b5,29c3be,f2726f"
    },
    data: [],
  }
  sql = "";
  constructor(private adminService: AdminService, private zone: NgZone, private router: Router) { }

  ngOnInit() {
    this.criteria = criteria;
    this.problems = problems.problems;
    this.graphLbl = new Label().label;
    // this.graphLbl[0].value = 23
    // console.log(this.graphLbl)
    this.withResult = true;
  }
  criteriaChange() {

    this.graphLbl = new Label().label;
    this.dataSource.data = [];
    // this.graphLbl.forEach((element, index) => this.graphLbl[index].value = 0);
    let sqlTable = tables;
    this.criteria_variables = Array.apply(null, Array())

    //Iterate thru all criteria checkboxes check boxes that are checked
    this.criteria.forEach((firstElement, firstIndex) => {
      let lalagyan = Array.apply(null, Array());
      firstElement.values.forEach(element => {
        if (element.isChecked) {
          lalagyan.push(element.label)
        }
      });
      if (lalagyan.length > 0) {
        this.criteria_variables.push({ fieldname: firstElement.fieldname, value: lalagyan })
      }
    });
    //Iterate thru all criteria checkboxes check boxes that are checked

    // console.log(this.criteria_variables)

    //Create the conditions for sql
    this.sql = "";
    this.criteria_variables.forEach((firstElement, firstIndex) => {

      this.sql += `(`;
      firstElement.value.forEach((secondElement, secondIndex) => {
        if (this.criteria_variables[firstIndex].value[secondIndex].length > 1) {
          if (this.criteria_variables[firstIndex].value.length - 1 != secondIndex) {
            this.sql += `users.${firstElement.fieldname} = '${secondElement}' OR `;

          } else {
            this.sql += `users.${firstElement.fieldname} = '${secondElement}'`;
          }
        } else {
          this.sql += `users.${firstElement.fieldname} = '${secondElement}'`;
        }

      });
      this.sql += `)`;
      // console.log(this.criteria_variables.length)
      if (this.criteria_variables.length - 1 != firstIndex) {
        this.sql += ` AND `
      }

    });
    //Create the conditions for sql

    //Send to services to do a http request to server
    let graphData = {
      sql: this.sql,
      sqlTable
    }
    // console.log(graphData)
    //Check if there is an criteria
    if (graphData.sql != "") {

      this.adminService.generalGraph(graphData).subscribe((successData) => {
        //Loop thru all users check all of their problems
        console.log(graphData)
        successData.forEach((element, index) => {
          // console.log(element)
          Object.keys(element).forEach((element, index) => {
            // console.log(element + "==" + this.graphLbl[index].fieldname)
            if (element == this.graphLbl[index].fieldname) {
              console.log("Tama");

            } else {
              console.log("Mali")
            }

          })
          Object.values(element).forEach((secondElement, secondIndex) => {
            if (secondElement) {
              this.graphLbl[secondIndex].value++;
            }
          });



        });
        //Loop thru all users check all of their problems

        //Sort the array
        this.graphLbl.sort((a, b) => b.value - a.value); // For ascending sort
        let sortedData = this.graphLbl.map((x) => {
          return x
        })
        // console.log(this.graphLbl)
        for (let index = 0; index < 10; index++) {
          this.dataSource.data.push(this.graphLbl[index])

        }
        console.log(this.dataSource.data)





      }, (error) => console.log(error))
    }



    //Send to services to do a http request to server
  }
  //Filter the quantity of the result
  filterQuantity(value) {
    this.dataSource.data = [];
    for (let index = 0; index < value; index++) {
      this.dataSource.data.push(this.graphLbl[index]);
    }


  }

  selectSectCriteria(i) {
    this.criteria[i].values.forEach((element, index) => {

      this.criteria[i].values[index].isChecked = true;

    });
  }
  uncheckSectCriteria(i) {
    this.criteria[i].values.forEach((element, index) => {

      this.criteria[i].values[index].isChecked = false;

    });
  }

  selectAllCriteria() {
    this.criteria.forEach((element, index) => {
      element.values.forEach((element, secondIndex) => {
        this.criteria[index].values[secondIndex].isChecked = true;
      });
    });
    this.isPanelOpen = true;
  }

  deselectAllCriteria() {
    this.criteria.forEach((element, index) => {
      element.values.forEach((element, secondIndex) => {
        this.criteria[index].values[secondIndex].isChecked = false;
      });
    });
  }
  initialized($event) {
    this.chartObj = $event.chart; // saving chart instance
    // console.log(this.chartObj)
    this.handler = this.dataplotClickHandler.bind(this);
    this.initMessage = '';
    this.message = this.clickPlotMsg;
    this.attached = true;
    this.chartObj.addEventListener('dataplotClick', this.handler);
  }
  onSelectionChange(chart) {
    this.chart = chart;
    this.chartObj.chartType(chart); // Changing chart type using chart instance
  }


  dataplotClickHandler(eventObj, dataObj) {
    this.zone.run(() => {
      this.dataplotModal = true;
      this.category_header = dataObj.categoryLabel;
      this.dataPlotData = this.dataSource.data[dataObj.dataIndex].fieldname;
      // console.log(this.dataPlotData)
      // console.log(dataObj)
      // console.log(this.dataSource)
      let data = {
        problem: this.dataPlotData + " = 1",
        userCriteria: this.sql
      }
      // Send a request to service
      this.adminService.getUsersProblem(data).subscribe((successData) => {
        // console.log(successData)
        //Open the modal 
        this.catModal = true;
        this.catModalData = successData;
        this.catModalHeader = dataObj.categoryLabel;
        // console.log(this.catModalData)

      }, (error) => console.log(error))
    });
  }
  print(e) {
    this.loader = true;
    this.chartWidth = "800";
    setTimeout(_ => {
      FusionCharts.batchExport({
        exportFormat: 'pdf'
      })
      this.loader = false;
    }, 1000)
    setTimeout(_ => this.chartWidth = "100%", 1000);

  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/admin/auth"])

  }

}
