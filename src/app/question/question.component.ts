import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { exportedQuestions } from '../configs/questions';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: any;
  instruction = {
    first: "Check the Like box for those activities you would like to do.",
    second: "Check the Dislike box for those activities you would dislike doing or would be indifferent to."
  };
  currentLogo: string;
  currentColor: string;

  view: Boolean = true;
  loader: Boolean = false;
  label_true = "Like";
  label_false = "Dislike";
  titles = [
    "Activities(Realistic)",
    "Activities(Investigative)",
    "Activities(Artistic)",
    "Activities(Social)",
    "Activities(Enterprising)",
    "Activities(Conventional)",
    "Competencies(Realistic)",
    "Competencies(Investigative)",
    "Competencies(Artistic)",
    "Competencies(Social)",
    "Competencies(Enterprising)",
    "Competencies(Conventional)",
    "Occupations(Realistic)",
    "Occupations(Investigative)",
    "Occupations(Artistic)",
    "Occupations(Social)",
    "Occupations(Enterprising)",
    "Occupations(Conventional)",
  ];
  title: String;
  currentQuestion: any;
  counter = 0;
  currentLike = 0;
  constructor(public data: DataService, public router: Router, private authService: AuthService) { }
  proceed: Boolean = false;
  results = Array.apply(null, Array(18));


  ngOnInit() {
    /*
    First question: Activities(R)
    Second question: Activities(I)
    Second question: Activities(A)

    */
    this.questions = exportedQuestions;

    this.checkSession();







    this.currentQuestion = this.questions[this.counter].data;
    this.title = this.titles[this.counter]
    this.changeClassColor(this.counter)
    this.changeCurrentImage(this.counter)
    console.log(this.questions)

    //Check title


    //Check if current questions are touched already

  }
  change() {




    this.proceed = false;
    if (this.counter != this.questions.length) {
      //Iterate thru the array of object check if all of them is Touched
      for (let i = 0; i < this.questions[this.counter].data.length; i++) {
        console.log(this.questions[this.counter].data[i].isTouched)
        if (this.questions[this.counter].data[i].isTouched) {
          this.proceed = true;
        } else {
          this.proceed = false;
          break;
        }
      }




      console.log(this.proceed)

      //Check if the variable proceed is thru to proceed to the next question
      if (this.proceed) {
        //Check if this is the end of the array
        if (this.counter == this.questions.length - 1) {
          localStorage.setItem('ph1Res', btoa(JSON.stringify(this.results)));
          this.router.navigate(["self-estimates"])
        } else {
          console.log("Current Count:" + this.counter);
          console.log("Current Length:" + this.questions.length);

          //Store the likes in the array
          this.results[this.counter] = this.currentLike;
          //Increment counter
          this.counter++;
          //Change question
          this.currentQuestion = this.questions[this.counter].data;

          //Change title
          this.title = this.titles[this.counter];
          console.log(this.title)
          this.changeClassColor(this.counter)
          this.changeCurrentImage(this.counter)


          if (this.title.includes("Activities")) {
            this.instruction["first"] = "Check the Like box for those activities you would like to do.";
            this.instruction["second"] = "Check the Dislike box for those activities you would dislike doing or would be indifferent to.";
          } else if (this.title.includes("Competencies")) {
            this.instruction["first"] = "Check the Yes box for those activities you can do well or competently.";
            this.instruction["second"] = "Check the No box for those activities you have never performed or perform poorly.";
          } else {
            this.instruction["first"] = "The following is a list of occupations. Check the like box for those occupations that interest or appeal to you.";
            this.instruction["second"] = "Check the dislike box for those occupations that you dislike or find uninteresting.";

          }



          if (this.title.includes("Competencies")) {
            this.label_true = "Yes";
            this.label_false = "No";
          } else {
            this.label_true = "Like";
            this.label_false = "Dislike";
          }
        }


        //Change current counter for like for next questions
        this.currentLike = 0;

        //Loader
        // this.view = false;
        // this.loader = true;
        // setTimeout(() => {
        //   this.loader = false;
        //   this.view = true;
        // }, 2000)

        this.loader = true;
        setTimeout(() => this.loader = false, 1500)

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
    this.questions[this.counter].data[i].like = true;
    this.questions[this.counter].data[i].isTouched = true;
    console.log(this.questions[this.counter].data[i])
    this.count();
  }
  dislike(i) {
    this.questions[this.counter].data[i].like = false;
    this.questions[this.counter].data[i].isTouched = true;
    console.log(this.questions[this.counter].data[i])
    this.count();

  }

  count() {
    this.currentLike = 0;
    this.questions[this.counter].data.forEach(element => {
      if (element.like) {
        this.currentLike++;
      }
    });

  }


  checkSession() {
    this.authService.checkSession().subscribe((successData) => {

    }, (error) => this.router.navigate(["/"]))
  }

  changeClassColor(index) {
    this.currentColor = this.questions[index].color;
  }
  changeCurrentImage(index) {
    this.currentLogo = this.questions[index].icon_path;
  }





}
