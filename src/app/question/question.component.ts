import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { exportedQuestions } from '../configs/questions';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: any;

  view: Boolean = true;
  loader: Boolean = false;
  titles = [
    "Activities(R)",
    "Activities(I)",
    "Activities(A)",
    "Activities(S)",
    "Activities(E)",
    "Activities(C)",
    "Competencies(R)",
    "Competencies(I)",
    "Competencies(A)",
    "Competencies(S)",
    "Competencies(E)",
    "Competencies(C)",
    "Occupations(R)",
    "Occupations(I)",
    "Occupations(A)",
    "Occupations(S)",
    "Occupations(E)",
    "Occupations(C)",
  ];
  title: String;
  currentQuestion: any;
  counter = 0;
  currentLike = 0;
  constructor(public data: DataService, public router: Router) { }
  proceed: Boolean = false;
  results = Array.apply(null, Array(18));


  ngOnInit() {
    /*
    First question: Activities(R)
    Second question: Activities(I)
    Second question: Activities(A)

    */
    this.questions = exportedQuestions;
    console.log(exportedQuestions)






    this.currentQuestion = this.questions[this.counter];
    this.title = this.titles[this.counter]

    //Check title


    //Check if current questions are touched already

  }
  change() {




    this.proceed = false;
    if (this.counter != this.questions.length) {
      //Iterate thru the array of object check if all of them is Touched
      for (let i = 0; i < this.questions[this.counter].length; i++) {
        console.log(this.questions[this.counter][i].isTouched)
        if (this.questions[this.counter][i].isTouched) {
          this.proceed = true;
        } else {
          this.proceed = false;
          break;
        }
      }




      console.log(this.proceed)

      //Check if the variable proceed is thru to proceed to the next question
      if (this.proceed) {
        //Store the likes in the array
        this.results[this.counter] = this.currentLike;
        //Increment counter
        this.counter++;
        //Check if this is the end of the array
        if (this.counter == this.questions.length) {
          localStorage.setItem('ph1Res', JSON.stringify(this.results));
          this.router.navigate(["self-estimates"])
        }
        //Change question
        this.currentQuestion = this.questions[this.counter];

        //Change title
        this.title = this.titles[this.counter];
        //Change current counter for like for next questions
        this.currentLike = 0;

        //Loader
        // this.view = false;
        // this.loader = true;
        // setTimeout(() => {
        //   this.loader = false;
        //   this.view = true;
        // }, 2000)

        //Scroll up
        scroll(0, 0)


      } else {
        swal({
          title: "Please answer all of the questions",
          type: "warning"
        })
      }





    }

  }




  like(i) {
    this.questions[this.counter][i].like = true;
    this.questions[this.counter][i].isTouched = true;
    console.log(this.questions[this.counter][i])
    this.count();
  }
  dislike(i) {
    this.questions[this.counter][i].like = false;
    this.questions[this.counter][i].isTouched = true;
    console.log(this.questions[this.counter][i])
    this.count();

  }

  count() {
    this.currentLike = 0;
    this.questions[this.counter].forEach(element => {
      if (element.like) {
        this.currentLike++;
      }
    });

  }




}
