import { Component, OnInit } from '@angular/core';
import { FormsService } from 'src/app/Services/forms.service';
import { DataService } from 'src/app/Services/data.service';
import { ScheduleService } from 'src/app/Services/schedule.service';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css'],
})
export class AdminPortalComponent implements OnInit {
  eventFormVisible = false;
  classFormVisible = false;
  signUpsVisible = false;

  constructor(
    public dataService: DataService,
    public formsService: FormsService,
    public scheduleService: ScheduleService
  ) {}

  ngOnInit() {
    this.dataService.fetchEventsData();
    this.dataService.fetchClassesData();
    this.dataService.fetchSignUpsData()
  }
}
