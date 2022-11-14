import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/Services/data.service';
import { ScheduleService } from 'src/app/Services/schedule.service';

@Component({
  selector: 'app-schedule-and-classes',
  templateUrl: './schedule-and-classes.component.html',
  styleUrls: ['./schedule-and-classes.component.css'],
})
export class ScheduleAndClassesComponent implements OnInit {




  constructor(public dataService:DataService, public scheduleService:ScheduleService) {}

  ngOnInit() {
    this.dataService.fetchEventsData()
    this.dataService.fetchClassesData()
  }
}
