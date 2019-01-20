import { Component, OnInit, ViewChild } from '@angular/core';
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

    firstString: String = "";
    secondString: String = "";
    thirdString: String = "";
    first: any;
    second: any;
    third: any;
    combinations = Array.apply(null, Array());
    @ViewChild('dito') ditoConfetti;
    letters = [
        {
            acronym: "R",
            word: "Realistic"
        },
        {
            acronym: "I",
            word: "Investigative"
        },
        {
            acronym: "A",
            word: "Artistic"
        },
        {
            acronym: "S",
            word: "Social"
        },
        {
            acronym: "E",
            word: "Enterprising"
        },
        {
            acronym: "C",
            word: "Convensional"
        },
    ]
    constructor(public authService: AuthService, public router: Router, public data: DataService) { }
    checkProgress(section) {
        if (section == localStorage.getItem("tsprog")) {
            return true;
        }

        return false;
    }
    ngOnInit() {

        if (!this.checkProgress("evaluate")) {
            this.router.navigate([localStorage.getItem("tsprog")]);
        } else {
            let resultPart1 = JSON.parse(atob(localStorage.getItem("ph1Res")));
            let resultPart2 = JSON.parse(atob(localStorage.getItem("selfEstiRes")));

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
            console.log(this.jobs)
            //Get the summary
            for (let i = 0; i < this.summarys.length; i++) {
                this.summarys[i] = {
                    value: this.activities[i] +
                        this.competencies[i] + this.jobs[i]
                        + this.self_estimates1[i] + this.self_estimates2[i],
                    letter: this.letters[i].acronym,
                    word: this.letters[i].word
                }
                this.summaryHolder[i] = {
                    value: this.activities[i] +
                        this.competencies[i] + this.jobs[i]
                        + this.self_estimates1[i] + this.self_estimates2[i],
                    letter: this.letters[i].acronym,
                    word: this.letters[i].word
                }

            }
            //Get the ranking


            // For testing purpose
            // console.log(this.summaryHolder)
            // this.summaryHolder = [
            //     { value: 33, letter: "R" },
            //     { value: 33, letter: "I" },
            //     { value: 50, letter: "A" },
            //     { value: 55, letter: "S" },
            //     { value: 55, letter: "E" },
            //     { value: 55, letter: "C" },
            // ]
            // For testing purpose




            this.first = this.calculateShit();
            this.second = this.calculateShit();
            this.third = this.calculateShit()

            console.log(this.summarys)
            console.log(this.first)
            console.log(this.second)
            console.log(this.third)

            //Submit RIASEC Results into the server
            this.data.submitLetters(this.summarys).subscribe((successData) => {
                console.log(successData);
            }, (error) => console.log(error));

            //Submit the Summary Code into the server
            this.data.submitSummaryCode(this.first[0].letter, this.second[0].letter, this.third[0].letter).subscribe((successData) => {
                console.log(successData);
            }, (error) => console.log(error));




            // Transform it into string
            this.first.forEach(element => this.firstString += element.letter + " ");
            this.second.forEach(element => this.secondString += element.letter + " ");
            this.third.forEach(element => this.thirdString += element.letter + " ");



            //get all letter combination
            for (let i = 0; i < this.first.length; i++) {
                let firstLetter = this.first[i].letter;
                for (let k = 0; k < this.second.length; k++) {
                    let secondLetter = this.second[k].letter;
                    for (let o = 0; o < this.third.length; o++) {
                        let thirdLetter = this.third[o].letter;

                        this.combinations.push(firstLetter + secondLetter + thirdLetter)

                    }

                }

            }

            //Submit result to the database
            this.data.submitResult(this.combinations).subscribe(data => {
                console.log(data)
                localStorage.removeItem("inSession");
                localStorage.removeItem("ph1Res");
                localStorage.removeItem("qstResult");
                localStorage.removeItem("qtsIndex");
                localStorage.removeItem("selfEstiRes");
                localStorage.removeItem("tsprog");
                localStorage.removeItem("tsqts");


            },
                (error) => {
                    console.log(error)
                });


        }
    }

    calculateShit() {

        let myStorage = Array.apply(null, Array());
        let highestValue = {
            value: this.summaryHolder[0].value,
            index: 0,
            letter: this.summaryHolder[0].letter,
            kuha: true
        }
        for (let i = 0; i < this.summaryHolder.length; i++) {

            if (highestValue.value < this.summaryHolder[i].value) {
                highestValue.value = this.summaryHolder[i].value;
                highestValue.index = i;
                console.log(this.summaryHolder[i].letter)
                highestValue.letter = this.summaryHolder[i].letter;
                highestValue.kuha = true;

            } else {
                highestValue.kuha = false;
            }

        }
        this.summaryHolder.splice(highestValue.index, 1)
        myStorage.push({
            value: highestValue.value,
            letter: highestValue.letter
        });

        //Remove the current highest in the array
        if (highestValue.kuha) {

        }






        for (let k = 0; k < this.summaryHolder.length; k++) {
            console.log(highestValue.value)
            console.log(this.summaryHolder[k].value)
            if (highestValue.value == this.summaryHolder[k].value) {
                myStorage.push({
                    value: this.summaryHolder[k].value,
                    letter: this.summaryHolder[k].letter
                });


            }


        }
        // this.summaryHolder.forEach((firstElement, firstIndex) => {

        //     myStorage.forEach((secondElement, secondIndex) => {
        //         console.log(firstElement.letter + " " + secondElement.letter)
        //         if (firstElement.letter == secondElement.letter) {
        //             alert("tama")
        //             this.summaryHolder.splice(firstIndex, 1);


        //         }
        //     });
        // });
        this.summaryHolder = this.summaryHolder.filter((value, index, arr) => {
            if (value.value != highestValue.value) {
                return value;
            }
        });

        console.log(this.summaryHolder)
        console.log(myStorage)

        return myStorage;

    }


    getBackgroudColor(i) {
        let colors = ["#f0483e", "#f8941e", "#ffce02", "#00773f", "#0073a4", "#9279b7"];
        return colors[i];
    }







    //Check user session







}
