import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/Models/schedule';

@Component({
  selector: 'app-schedule-and-classes',
  templateUrl: './schedule-and-classes.component.html',
  styleUrls: ['./schedule-and-classes.component.css'],
})
export class ScheduleAndClassesComponent implements OnInit {
classesOffered = [{className:"Nursery", classDescription:"Applies simple cooking skills and principals."},
{className:"Pre-school", classDescription:"Applies simple cooking skills and principals."},
{className:"Science: Motion & Machines", classDescription:"Applies simple cooking skills and principals."},
{className:"PE: Sports/Activities", classDescription:"Applies simple cooking skills and principals."},
{className:"Cooking", classDescription:"Applies simple cooking skills and principals."},
{className:"Great Lives from History", classDescription:"Applies simple cooking skills and principals."},
{className:"Games/Trivia", classDescription:"Applies simple cooking skills and principals."},
{className:"Movement/Activities", classDescription:"Applies simple cooking skills and principals."},
{className:"Entrepeneur/life Management", classDescription:"Applies simple cooking skills and principals."},
{className:"Art", classDescription:"Applies simple cooking skills and principals."},
]
  upcomingEvents = [
    { date: '11/15/2022', eventName: 'Co-op Meets' },
    { date: '11/17/2022', eventName: "Mom's Night Out" },
    { date: '11/22/2022', eventName: 'No Co-op' },
    { date: '11/29/2022', eventName: 'Co-op Meets' },
    { date: '12/6/2022', eventName: 'Last Day of Classes' },
    { date: '12/13/2022', eventName: 'Co-op Christmas Party' },
    { date: '02/14/2023', eventName: "Valentine's Day Pary" },
    { date: '02/21/2023', eventName: 'First Day of Co-op Semester 1 of 2023' },
    { date: '02/28/2023', eventName: 'Co-op Meets' },
    { date: '03/7/2023', eventName: 'Co-op Meets' },
    { date: '03/14/2023', eventName: 'Co-op Meets' },
    { date: '03/21/2023', eventName: 'Co-op Meets' },
    { date: '03/28/2023', eventName: 'Co-op Meets' },
    { date: '04/04/2023', eventName: 'Co-op Meets' },
    { date: '04/11/2023', eventName: 'Co-op Meets' },
    { date: '04/18/2023', eventName: 'Co-op Meets' },
    { date: '04/25/2023', eventName: 'Co-op Meets' },
    { date: '05/02/2023', eventName: 'Last Day of Co-op Semester 1of 2023' },
    { date: '05/09/2023', eventName: 'Field Day' },
  ];

  eventsColumns: string[] = ['date', 'eventName'];

  constructor() {}

  ngOnInit(): void {}
}
