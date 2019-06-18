import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { NgForm } from '@angular/forms';
import * as datefns from "date-fns";
import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.css']
})
export class AdminEventsComponent implements OnInit {
  selectedPoster: File;
  selectedUpdatedPoster: File;
  events: [];
  invitations: Array<any>;
  err = false;
  page = 1;
  showAddEvent = false;
  showUpdateEvent = false;
  minDate = new Date(2019, 1, 1, 1, 1, 1, 1);
  maxDate = new Date(3000, 1, 1, 1, 1, 1, 1);
  isInvitationModal = false;
  viewedEvent: any;
  updateData: Event;
  printing = false;
  constructor(private adminService: AdminService,
    private router: Router) {
    console.log(this.updateData)
    this.getEvents();

  }

  ngOnInit() {
  }


  getEvents() {
    this.adminService.getEvents().subscribe((successData) => {
      this.events = successData;
    }, (error) => console.error(error));
  }

  addEvent(f: NgForm) {
    if (f.valid) {
      //Format using date-fns
      f.value.date = datefns.format(f.value.date, 'MMMM DD YYYY');
      f.value.time_from = datefns.format(f.value.time_from, 'hh:mm A');
      f.value.time_to = datefns.format(f.value.time_to, 'hh:mm A');
      f.value.poster = this.selectedPoster;
      console.log(f.value)
      this.adminService.addEvent(f.value).subscribe((successData) => {
        this.showAddEvent = false;
        swal({
          title: "Event added",
          type: "success"
        })
        this.getEvents();
      }, (err) => console.error(err));
    } else {
      this.err = true;
    }
    console.log(f.valid);  // false
  }
  updateEvent(field: string, value: any) {
    this.adminService.updateEvent(field, value, this.updateData.id).subscribe((successData) => {
      this.getEvents();
      this.showUpdateEvent = false;
      swal({
        title: "Event updated..",
        type: "success"
      })
    }, (error) => console.log(error));
  }
  updateBtn(poster_url, name, location, date, time_from, time_to, id) {
    let data = {
      poster_url,
      name,
      location,
      date: datefns.parse(date),
      time_from,
      time_to,
      id
    }
    this.updateData = data;
    console.log(this.updateData)
    this.showUpdateEvent = true;
  }

  deleteEvent(id) {
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
        this.adminService.deleteEvent(id).subscribe((successData) => {
          swal(
            'Deleted!',
            'Your event has been deleted.',
            'success'
          )
          console.log(successData);
          this.getEvents();
        }, (err) => console.error(err));

      }
    })

  }

  onFileChanged(event) {
    this.selectedPoster = event.target.files[0];
  }
  onUpdateFileChanged(event) {
    this.selectedUpdatedPoster = event.target.files[0];
  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/admin-auth"])

  }
  trim(string: string) {
    return string.substring(0, 150);
  }

  viewInvitations(event) {
    this.viewedEvent = event;
    this.isInvitationModal = true;
    this.adminService.getInvitations(event.event_id).subscribe((invitations) => {
      this.invitations = invitations;
      console.log(this.invitations)
    }, (err) => console.log(err));
  }

  print() {
    this.isInvitationModal = false;
    setTimeout(() => {
      this.printing = true;

    }, 1000);
    setTimeout(() => {
      window.print();
      setTimeout(() => {
        this.printing = false;
      }, 500);
    }, 1500);

  }

  searchEvents(keyword) {
    this.adminService.searchEvents(keyword).subscribe((events) => {
      this.events = events;
      console.log(this.events)
    }, err => console.error(err));
  }



}
interface Event {
  poster_url: string, name: string, location: string, date: Date, time_from: any, time_to: any, id: number
}
