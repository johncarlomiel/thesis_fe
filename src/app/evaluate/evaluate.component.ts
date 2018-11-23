import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-evaluate',
    templateUrl: './evaluate.component.html',
    styleUrls: ['./evaluate.component.css']
})
export class EvaluateComponent implements OnInit {
    activities = Array.apply(null, Array(6));
    competencies = Array.apply(null, Array(6));
    jobs = Array.apply(null, Array(6));
    self_estimates1 = Array.apply(null, Array(6));
    self_estimates2 = Array.apply(null, Array(6));
    summarys = Array.apply(null, Array(6));
    summaryHolder = Array.apply(null, Array(6));
    letters = ["R", "I", "A", "S", "E", "C"]
    constructor(public authService: AuthService, public router: Router, public data: DataService) { }

    ngOnInit() {
        let resultPart1 = JSON.parse(localStorage.getItem("ph1Res"));
        let resultPart2 = JSON.parse(localStorage.getItem("selfEstiRes"));

        this.activities[0] = resultPart1[0];
        this.activities[1] = resultPart1[1];
        this.activities[2] = resultPart1[2];
        this.activities[3] = resultPart1[3];
        this.activities[4] = resultPart1[4];
        this.activities[5] = resultPart1[5];

        this.competencies[0] = resultPart1[6];
        this.competencies[1] = resultPart1[7];
        this.competencies[2] = resultPart1[8];
        this.competencies[3] = resultPart1[9];
        this.competencies[4] = resultPart1[10];
        this.competencies[5] = resultPart1[11];

        this.jobs[0] = resultPart1[12];
        this.jobs[1] = resultPart1[13];
        this.jobs[2] = resultPart1[14];
        this.jobs[3] = resultPart1[15];
        this.jobs[4] = resultPart1[16];
        this.jobs[5] = resultPart1[17];

        this.self_estimates1 = resultPart2.part1;
        this.self_estimates2 = resultPart2.part2;

        //Get the summary
        for (let i = 0; i < this.summarys.length; i++) {
            this.summarys[i] = {
                value: this.activities[i] +
                    this.competencies[i] + this.jobs[i]
                    + this.self_estimates1[i] + this.self_estimates2[i],
                letter: this.letters[i]
            }
            this.summaryHolder[i] = {
                value: this.activities[i] +
                    this.competencies[i] + this.jobs[i]
                    + this.self_estimates1[i] + this.self_estimates2[i],
                letter: this.letters[i]
            }

        }

        console.log(this.summarys)
        let myFirst = this.calculateShit();
        let mySecond = this.calculateShit();
        let myThird = this.calculateShit();
    }

    calculateShit() {

        let myStorage = Array.apply(null, Array());
        let highestValue = {
            value: this.summaryHolder[0].value,
            index: 0,
            letter: ""
        }
        for (let i = 0; i < this.summaryHolder.length; i++) {
            if (highestValue.value < this.summaryHolder[i].value) {
                highestValue.value = this.summaryHolder[i].value;
                highestValue.index = i;
                highestValue.letter = this.summaryHolder[i].letter;



            }

        }
        //Remove the current highest in the array
        this.summaryHolder.splice(highestValue.index, 1)


        myStorage.push({
            value: highestValue.value,
            letter: highestValue.letter
        });


        for (let i = 0; i < this.summaryHolder.length; i++) {
            if (highestValue.value == this.summaryHolder[i].value) {
                myStorage.push({
                    value: this.summaryHolder[i].value,
                    letter: this.summaryHolder[i].letter
                });
                this.summaryHolder.splice(i, 1);


            }

        }

        return myStorage;
    }








    //Check user session







}
