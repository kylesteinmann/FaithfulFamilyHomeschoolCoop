import { Component, OnInit } from '@angular/core';
import { FormsService } from 'src/app/Services/forms.service';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {
  eventFormVisible = false;

  constructor(public dataService:DataService, public formsService:FormsService) { }

  onSubmitEvent(eventForm:NgForm) {
    if (!eventForm.valid) {
      return;
    }
    const date = eventForm.value.date;
    const event = eventForm.value.event;

    // this.dataService.upcomingEvents.push({"date":date, "event":event})
  }

  ngOnInit(): void {
  }

}
