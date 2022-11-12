import { Component, OnInit } from '@angular/core';
import { FormsService } from 'src/app/Services/forms.service';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/Services/data.service';
import { ScheduleService } from 'src/app/Services/schedule.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {
  eventFormVisible = false;

  constructor(public dataService:DataService, public formsService:FormsService, public scheduleService:ScheduleService, private http:HttpClient) { }

  onSubmitEvent(eventForm:NgForm) {
    if (!eventForm.valid) {
      return;
    }
    const date = eventForm.value.date;
    const event = eventForm.value.event;
    const postData = {"date":date, "event":event}
    this.http.post('https://faith-family-homeschool-co-op-default-rtdb.firebaseio.com/events.json', postData ).subscribe()

  }

  ngOnInit(): void {
  }

}
