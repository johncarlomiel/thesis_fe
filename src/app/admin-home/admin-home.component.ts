import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  pages: any;
  page: number = 1;
  showInfoModal: Boolean = false;
  showMoreInfoModal: Boolean = false;
  showProblemModal: Boolean = false;
  noInfo: Boolean = false;
  alertModal: Boolean = false;
  deleteConfirm: Boolean = false;
  userInfo = Array.apply(null, Array());
  moreInfo = Array.apply(null, Array());
  problemInfo = Array.apply(null, Array());
  options = ["qweqweqw", " tanga"]
  holder: any;


  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.holder = {
      adjustment: { name: "Adjustments to School Relations", value: Array.apply(null, Array()) },
      courtship: { name: "Courtship, Sex and Marriage", value: Array.apply(null, Array()) },
      curiculum: { name: "Curriculum and Teaching Procedures", value: Array.apply(null, Array()) },
      edu_voc: { name: "Education and Vocation", value: Array.apply(null, Array()) },
      finan: { name: "Financial", value: Array.apply(null, Array()) },
      home_fam: { name: "Home and Family", value: Array.apply(null, Array()) },
      morals: { name: "Morals and Religion", value: Array.apply(null, Array()) },
      per_psy: { name: "Personal Psychological Relations", value: Array.apply(null, Array()) },
      phy: { name: "Physiological", value: Array.apply(null, Array()) },
      soc_psy: { name: "Social Psychological Relations", value: Array.apply(null, Array()) },
      soc_reac: { name: "Social and Reacreational Activities", value: Array.apply(null, Array()) },
    }
    this.getUsers();



  }
  getUsers() {
    this.adminService.getUsers().subscribe((successData) => {
      this.pages = successData;
    }, (error) => console.log(error))
  }



  getProblems(i) {
    this.problemInfo = Array.apply(null, Array())
    this.holder = {
      adjustment: { name: "Adjustments to School Relations", value: Array.apply(null, Array()) },
      courtship: { name: "Courtship, Sex and Marriage", value: Array.apply(null, Array()) },
      curiculum: { name: "Curriculum and Teaching Procedures", value: Array.apply(null, Array()) },
      edu_voc: { name: "Education and Vocation", value: Array.apply(null, Array()) },
      finan: { name: "Financial", value: Array.apply(null, Array()) },
      home_fam: { name: "Home and Family", value: Array.apply(null, Array()) },
      morals: { name: "Morals and Religion", value: Array.apply(null, Array()) },
      per_psy: { name: "Personal Psychological Relations", value: Array.apply(null, Array()) },
      phy: { name: "Physiological", value: Array.apply(null, Array()) },
      soc_psy: { name: "Social Psychological Relations", value: Array.apply(null, Array()) },
      soc_reac: { name: "Social and Reacreational Activities", value: Array.apply(null, Array()) },
    }
    this.adminService.getProblems(i).subscribe((successData) => {
      successData.forEach(element => {
        this.holder[element.label].value.push({
          label: element.title,

        })
      });

      console.log(this.holder)
      this.holder = Object.values(this.holder)
      this.holder.forEach(element => {
        if (element.value.length > 0) {
          element["color"] = this.randColor()
          this.problemInfo.push(element)
        }
      });
      console.log(this.problemInfo)
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
}
