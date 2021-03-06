import { Component, OnInit, NgZone } from '@angular/core';
import { criteria } from '../data/criteria';
import { problems } from '../data/problems';
import { tables } from '../models/tables';
import { GraphLabel } from '../models/graphLabel';
import { Label } from '../models/tryLabel';
import * as FusionCharts from 'fusioncharts';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';
import Swal from 'sweetalert2'
import { colors } from '../data/colors';


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
  events: Array<any>;
  selectEventModal = false;

  isPrinting = false;


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
      "palettecolors": colors
    },
    data: [],
  }
  sql = "";
  constructor(private adminService: AdminService, private zone: NgZone, private router: Router, private chatService: ChatService) { }

  ngOnInit() {
    this.getEvents();
    this.criteria = criteria;
    this.problems = problems.problems;
    this.graphLbl = new Label().label;
    // this.graphLbl[0].value = 23
    this.withResult = true;
  }

  inviteAll(event) {
    let invitations = [];
    this.catModalData.forEach((element) => {

      invitations.push([event.event_id, element.id]);
    });
    this.chatService.sendInvitation(this.catModalData, invitations);
    Swal({
      title: 'Invitation Sent.',
      type: 'success',
      confirmButtonText: 'Okay'
    });

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
    //Check if there is an criteria
    if (graphData.sql != "") {
      this.adminService.generalGraph(graphData).subscribe((successData) => {
        //Loop thru all users check all of their problems

        successData.forEach((element, index) => {


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
        for (let index = 0; index < 10; index++) {
          this.dataSource.data.push(this.graphLbl[index])
        }
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

      let data = {
        problem: this.dataPlotData + " = 1",
        userCriteria: this.sql
      }
      // Send a request to service
      this.adminService.getUsersProblem(data).subscribe((successData) => {

        //Open the modal 
        this.catModal = true;
        this.catModalData = successData;
        this.catModalHeader = dataObj.categoryLabel;


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
    this.router.navigate(["/admin-auth"])

  }
  getEvents() {
    this.adminService.getEvents().subscribe((events) => {
      this.events = events;
    }, (err) => console.log(err));
  }
  trim(string: string) {
    return string.substring(0, 200);
  }

  printResult() {
    // this.catModal = false;
    this.isPrinting = true;
    setTimeout(() => {
      window.print();
      this.isPrinting = false;
    }, 2000);
  }

}
