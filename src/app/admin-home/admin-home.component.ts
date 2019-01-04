import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import swal from 'sweetalert2';
import { problems } from '../models/problems';
import { labels } from '../models/problemLabel';
import { title } from '../models/problemTitle';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  eformURL: string = "";
  pages: any;
  page: number = 1;
  codes: any;
  showSDSModal = false;
  showInfoModal: Boolean = false;
  showMoreInfoModal: Boolean = false;
  showProblemModal: Boolean = false;
  showEformModal: Boolean = false;
  noInfo: Boolean = false;
  alertModal: Boolean = false;
  deleteConfirm: Boolean = false;
  userInfo = Array.apply(null, Array());
  moreInfo = Array.apply(null, Array());
  problemInfo = Array.apply(null, Array());
  options = ["qweqweqw", " tanga"]
  holder: any;

  problem: any;
  labelArray: any;
  problemTitle: any;

  userProblem: any;


  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {

    this.getUsers();



  }
  getUsers() {
    this.adminService.getUsers().subscribe((successData) => {
      this.pages = successData;
    }, (error) => console.log(error))
  }
  getSDS(i) {
    this.adminService.getMySDS(i).subscribe((successData) => {
      console.log(successData)
      if (successData.length == 0) {
        this.noInfo = true;
      } else {
        this.codes = successData;
        this.noInfo = false;
      }


    }, (error) => { console.log(error); this.noInfo = true; })
  }



  getProblems(i) {
    this.userProblem = Array.apply(null, Array());
    this.adminService.getProblems(i).subscribe((successData) => {
      if (successData != null || undefined) {
        this.problem = problems.problems;
        this.labelArray = labels;
        let label_holder = Object.keys(successData);
        label_holder.splice(0, 1)
        let value_holder = Object.values(successData);
        value_holder.splice(0, 1)
        let currentIndex = 0;
        this.problemTitle = title;

        this.labelArray.forEach((element, index) => {

          if (element.fieldname == label_holder[index]) {
            this.labelArray[index].value = value_holder[index]
          }
          if (index == 9) { currentIndex++ }
          else if (index == 14) { currentIndex++ }
          else if (index == 22) { currentIndex++ }
          else if (index == 30) { currentIndex++ }
          else if (index == 37) { currentIndex++ }
          else if (index == 48) { currentIndex++ }
          else if (index == 55) { currentIndex++ }
          else if (index == 75) { currentIndex++ }
          else if (index == 79) { currentIndex++ }
          if (this.labelArray[index].value) {
            this.problemTitle[currentIndex].questions.push(this.labelArray[index])
          }

        });

        console.log(this.problemTitle)
        this.problemTitle.forEach((element, index) => {
          if (element.questions.length > 1) {
            this.userProblem.push(element)
          }

        });

        this.userProblem.forEach((element, index) => {
          this.userProblem[index].color = this.randColor();

        });
      }
    }, (error) => console.log(error))

  }

  getEform(i) {
    this.adminService.getEform(i).subscribe((successData) => {
      console.log(successData)
      if (successData.hasEform) {
        this.eformURL = successData.url;
        this.noInfo = false;
      } else {
        this.noInfo = true;
      }

    }, (error) => console.log(error))
  }
  getMoreInfo(i) {
    this.moreInfo = Array.apply(null, Array());
    this.adminService.getMoreInfo(i).subscribe((successData) => {
      if (successData != null || undefined) {
        let label = ["Ambition", "Downful Experience", "Happiest Experience", "Someone to talk to", "Troubling Problems", "I want to change my"]
        let value = Object.values(successData);
        value.forEach((element, index) => {
          this.moreInfo.push({
            label: label[index],
            value: this.capitalizeFirstLetter(element),
            color: this.randColor()
          })

        });
        console.log(this.moreInfo)
        this.noInfo = false;
      } else {
        this.noInfo = true
      }
    }, (error) => console.log(error))
  }



  getInfo(i) {
    this.userInfo = Array.apply(null, Array())
    this.adminService.getInfo(i).subscribe((successData) => {
      if (successData != null || undefined) {
        console.log(successData)
        if (successData.have_friends) { successData.have_friends = "I do have" }
        else { successData.have_friends = "I don't have" }
        if (successData.not_livingwith_parents == "") successData.not_livingwith_parents = "(I'm living with my parents)"
        if (successData.allowed_night == "") successData.allowed_night = "(I'm not allowed to go out during night)"
        let label = [
          "Full name", "Course", "Age", "Gender", "Religion", "Place of birth", "Address",
          "Phone number", "Mother's Name", "Mother's Religion", "Mother's Job", "Father's Name",
          "Father's Religion", "Father's Job", "Reason why not living with parents", "Studies Status",
          "Transportation", "How often allowed during night", "Who helps with your studies", "Hobby", "Do you have friends"
        ];

        let value = Object.values(successData);
        value.forEach((element, index) => {
          let hold_val = element.toString();
          this.userInfo.push({
            label: label[index],
            value: this.capitalizeFirstLetter(hold_val),
            color: this.randColor()
          })
        });

        console.log(this.userInfo)
        this.noInfo = false;
      } else {
        this.noInfo = true;
      }
    }, (error) => console.log(error))

  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  randColor() {
    let colors = ["red", "orange",
      "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black",]
    return colors[Math.floor((Math.random() * colors.length) + 0)]
  }

  delete(i) {
    this.alertModal = true;
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.adminService.deleteUser(i).subscribe((successData) => {
          console.log(successData)

          this.getUsers();
        }, (error) => console.log(error))
        swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })


    this.alertModal = false;

  }

  onSearchChange(searchValue: string) {
    this.adminService.search(searchValue).subscribe((successData) => {
      this.pages = successData
    }, (error) => console.log(error))
  }

  logout() {
    this.router.navigate(["/admin/auth"])
  }
}
