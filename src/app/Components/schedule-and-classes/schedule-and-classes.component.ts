import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-schedule-and-classes',
  templateUrl: './schedule-and-classes.component.html',
  styleUrls: ['./schedule-and-classes.component.css'],
})
export class ScheduleAndClassesComponent implements OnInit {


  eventsColumns: string[] = ['date', 'eventName'];

  constructor(public dataService:DataService) {}

  ngOnInit(): void {}
}
