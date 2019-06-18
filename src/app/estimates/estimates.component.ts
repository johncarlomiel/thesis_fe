import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-estimates',
  templateUrl: './estimates.component.html',
  styleUrls: ['./estimates.component.css']
})
export class EstimatesComponent implements OnInit {
  myArray = [1, 2, 3, 4, 5, 6, 7];
  view: Boolean = true;
  loader: Boolean = false;
  part1Results = Array.apply(null, Array(6))
  part2Results = Array.apply(null, Array(6))
  //Part 1
  mechanical = { val: 0, color: "" }
  scientific = { val: 0, color: "" }
  artistic = { val: 0, color: "" }
  teaching = { val: 0, color: "" }
  sales = { val: 0, color: "" }
  clerical = { val: 0, color: "" }
  //Part 2
  manual = { val: 0, color: "" }
  math = { val: 0, color: "" }
  musical = { val: 0, color: "" }
  uof = { val: 0, color: "" }
  managerial = { val: 0, color: "" }
  office = { val: 0, color: "" }

  //Result storage
  selfEstiRes = { part1: this.part1Results, part2: this.part2Results }

  constructor(public data: DataService, public router: Router) { }
  checkProgress(section) {
    if (section == localStorage.getItem("tsprog")) {
      return true;
    }

    return false;
  }
  ngOnInit() {
    if (!this.checkProgress("self-estimates")) {
      this.router.navigate([localStorage.getItem("tsprog")]);
    }
  }
  setValue(name, value) {
    if (name == 'mechanical') {
      this.mechanical.val = value;
      this.mechanical.color = this.determineColor(value);

    } else if (name == 'scientific') {
      this.scientific.val = value;
      this.scientific.color = this.determineColor(value);

    } else if (name == 'artistic') {
      this.artistic.val = value;
      this.artistic.color = this.determineColor(value);

    } else if (name == 'teaching') {
      this.teaching.val = value;
      this.teaching.color = this.determineColor(value);

    } else if (name == 'sales') {
      this.sales.val = value;
      this.sales.color = this.determineColor(value);

    } else if (name == 'clerical') {
      this.clerical.val = value;
      this.clerical.color = this.determineColor(value);

    } else if (name == 'manual') {
      this.manual.val = value;
      this.manual.color = this.determineColor(value);

    } else if (name == 'math') {
      this.math.val = value;
      this.math.color = this.determineColor(value);

    } else if (name == 'musical') {
      this.musical.val = value;
      this.musical.color = this.determineColor(value);

    } else if (name == 'uof') {
      this.uof.val = value;
      this.uof.color = this.determineColor(value);

    } else if (name == 'managerial') {
      this.managerial.val = value;
      this.managerial.color = this.determineColor(value);

    } else if (name == 'office') {
      this.office.val = value;
      this.office.color = this.determineColor(value);

    }





  }

  determineColor(value) {
    if (value <= 3) {
      return "#f44336";
    } else if (value <= 5) {
      return "#ff9800";
    } else {
      return "#4caf50";
    }

  }
  submit() {
    if (this.mechanical.val && this.scientific.val && this.artistic.val
      && this.teaching.val && this.sales.val && this.clerical.val
      && this.manual.val && this.math.val && this.musical.val
      && this.uof.val && this.managerial.val && this.office.val != 0) {

      //Store the results in to an linear array

      //Part 1
      this.part1Results[0] = this.mechanical.val;
      this.part1Results[1] = this.scientific.val;
      this.part1Results[2] = this.artistic.val;
      this.part1Results[3] = this.teaching.val;
      this.part1Results[4] = this.sales.val;
      this.part1Results[5] = this.clerical.val;



      //Part 2
      this.part2Results[0] = this.manual.val;
      this.part2Results[1] = this.math.val;
      this.part2Results[2] = this.musical.val;
      this.part2Results[3] = this.uof.val;
      this.part2Results[4] = this.managerial.val;
      this.part2Results[5] = this.office.val;

      localStorage.setItem('selfEstiRes', btoa(JSON.stringify(this.selfEstiRes)));
      this.view = false;
      this.loader = true;
      setTimeout(() => {
        this.loader = false;
        this.view = true;
        localStorage.setItem("tsprog", "evaluate");
        this.router.navigate(["evaluate"]);

      }, 2000)

    } else {
      swal({
        title: 'Please fill all the question',
        type: 'error'
      })
    }
  }

}
