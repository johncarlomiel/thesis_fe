import { Component, OnInit, NgZone } from '@angular/core';
import { criteria } from '../data/criteria';
import { problems } from '../data/problems';
import { AdminService } from '../services/admin.service';
import * as FusionCharts from 'fusioncharts';


@Component({
  selector: 'app-admin-graph',
  templateUrl: './admin-graph.component.html',
  styleUrls: ['./admin-graph.component.css']
})
export class AdminGraphComponent implements OnInit {
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
  constructor(private adminService: AdminService, private zone: NgZone) {

  }

  ngOnInit() {
    this.criteria = criteria;
    this.problems = problems.problems;





  }

  getCaptions() {
    this.caption = Array.apply(null, Array());
    this.subCaption = Array.apply(null, Array());
    this.criteria.forEach((first, firstIndex) => {
      first.values.forEach((second, secondIndex) => {
        if (second.isChecked) {
          this.caption.push(second.label)
        }
      });

    });


    this.problems.forEach((first, firstIndex) => {
      first.questions.forEach((second, secondIndex) => {
        if (second.value) {
          this.subCaption.push(second.label)
        }
      });
    });

    console.log(this.caption);
    console.log(this.subCaption);
    this.dataSource.chart["caption"] = this.caption.toString();
    this.dataSource.chart["subCaption"] = this.subCaption.toString();

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
        console.log(successData)
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
    FusionCharts.batchExport({
      exportFormat: 'pdf'
    })
  }

  initialized($event) {
    this.chartObj = $event.chart; // saving chart instance
    console.log(this.chartObj)
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
      console.log(this.dataPlotData)
      console.log(dataObj)
      console.log(this.dataSource)
    });
  }

}
