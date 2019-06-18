import { Component, OnInit, NgZone } from '@angular/core';
import { criteria } from '../data/criteria';
import { problems } from '../data/problems';
import { AdminService } from '../services/admin.service';
import * as FusionCharts from 'fusioncharts';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-admin-graph',
  templateUrl: './admin-graph.component.html',
  styleUrls: ['./admin-graph.component.css']
})
export class AdminGraphComponent implements OnInit {
  printing: Boolean = false;
  isPrinting = false;
  isEventModal: Boolean = false;
  chartWidth = "100%";
  events: Array<any>;
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
  problems;
  criteria;
  problem_variables: any;
  criteria_variables: any;
  caption: any;
  subCaption: any;
  loader: Boolean = false;
  category_header: any;
  constructor(private adminService: AdminService, private zone: NgZone, private router: Router, private chatService: ChatService) {

  }

  ngOnInit() {
    this.criteria = criteria;
    this.problems = problems.problems;

    this.getEvents();



  }

  getEvents() {
    this.adminService.getEvents().subscribe((events) => {
      this.events = events;


    }, (err) => console.log(err));
  }

  inviteAll(event) {
    let invitations = [];
    this.dataPlotData.forEach((element) => {

      invitations.push([event.event_id, element.id]);
    });
    this.chatService.sendInvitation(this.dataPlotData, invitations);
    Swal({
      title: 'Invitation Sent.',
      type: 'success',
      confirmButtonText: 'Okay'
    });

  }
  trim(string: string) {
    return string.substring(0, 200);
  }

  getCaptions() {
    this.caption = Array.apply(null, Array());
    this.subCaption = Array.apply(null, Array());
    this.criteria.forEach((first, firstIndex) => {
      let counter = 0;
      let gotValue = false;
      first.values.forEach((second, secondIndex) => {

        if (second.isChecked) {
          gotValue = true;
          if (counter == 0) {
            this.caption.push(first.fieldname + ": " + second.label)
            counter++;
          } else {
            this.caption.push(second.label)
          }
        }
      });
      if (gotValue) {

        this.caption.push("<br>")
      }

    });



    this.problems.forEach((first, firstIndex) => {
      first.questions.forEach((second, secondIndex) => {
        if (second.value) {
          this.subCaption.push(" " + second.label)
        }
      });
    });

    if (this.caption.length != 0) {
      let caption = this.replaceAll(this.caption.toString(), ",", " ")

      this.dataSource.chart["caption"] = "All students that have the ff criteria: <br>" + caption;
      this.dataSource.chart["subCaption"] = "With problems of the ff: <br>" + this.subCaption.toString();
    } else {
      this.dataSource.chart["caption"] = "All students that have the ff problem(s)"
      this.dataSource.chart["subCaption"] = this.subCaption.toString();
    }



  }
  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }


  try() {

    this.dataSource.data = Array.apply(null, Array())
    //Get all checked criteria variables
    this.criteria_variables = Array.apply(null, Array())
    this.criteria.forEach((first, index) => {
      let lalagyan = Array.apply(null, Array());
      first.values.forEach(element => {

        if (element.isChecked) {
          lalagyan.push(element.label)
        }

      });
      if (lalagyan.length > 0) {
        this.criteria_variables.push({ fieldname: first.fieldname, value: lalagyan })
      }


    });








    this.problem_variables = Array.apply(null, Array())
    //Get all checked problem variables
    this.problems.forEach((element, index) => {
      element.questions.forEach(element => {
        //If question is true push it to problem variables array
        if (element.value) {
          this.problem_variables.push(element.fieldname)
        }
      });

    });



    //Place it to formated variable before sending to service for fetching
    let data = {
      criteria: this.criteria_variables,
      value: this.problem_variables
    }
    //check if value is empty
    if (this.problem_variables.length > 0) {
      this.loader = true;
      this.adminService.graph(data).subscribe((successData) => {
        setTimeout(() => this.loader = false, 1200)

        if (successData.conditionMet.value == 0 && successData.notCondition.value == 0) {

          this.withResult = false;

        } else {
          let holder = Object.values(successData);
          holder.forEach((element) => {
            this.dataSource.data.push(element)
          });
          this.withResult = true;

        }


      }, (error) => console.log(error))
    }
    this.getCaptions();

  }
  print(e) {
    this.loader = true;
    this.chartWidth = "550";
    setTimeout(_ => {
      FusionCharts.batchExport({
        exportFormat: 'pdf'
      })
      this.loader = false;
    }, 1000)
    setTimeout(_ => this.chartWidth = "100%", 1000);

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
      this.dataPlotData = this.dataSource.data[dataObj.dataIndex].data;

    });
  }
  maPrint() {
    this.printing = true;
    setTimeout(_ => window.print(), 1000)
    setTimeout(_ => this.printing = false, 1500)
  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/admin-auth"])

  }

}
