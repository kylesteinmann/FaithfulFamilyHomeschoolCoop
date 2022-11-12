import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  eventFormVisible = false;

  classesOffered = [
    {
      className: 'Nursery',
      classDescription: 'Applies simple cooking skills and principals.',
    },
    {
      className: 'Pre-school',
      classDescription: 'Applies simple cooking skills and principals.',
    },
    {
      className: 'Science: Motion & Machines',
      classDescription: 'Applies simple cooking skills and principals.',
    },
    {
      className: 'PE: Sports/Activities',
      classDescription: 'Applies simple cooking skills and principals.',
    },
    {
      className: 'Cooking',
      classDescription: 'Applies simple cooking skills and principals.',
    },
    {
      className: 'Great Lives from History',
      classDescription: 'Applies simple cooking skills and principals.',
    },
    {
      className: 'Games/Trivia',
      classDescription: 'Applies simple cooking skills and principals.',
    },
    {
      className: 'Movement/Activities',
      classDescription: 'Applies simple cooking skills and principals.',
    },
    {
      className: 'Entrepeneur/life Management',
      classDescription: 'Applies simple cooking skills and principals.',
    },
    {
      className: 'Art',
      classDescription: 'Applies simple cooking skills and principals.',
    },
  ];
  upcomingEvents: Event[] = [];


  constructor(private router:Router, private http: HttpClient) {}

  public fetchEventsData() {
    this.http
      .get<{ [key: string]: Event }>(
        'https://faith-family-homeschool-co-op-default-rtdb.firebaseio.com/events.json'
      )
      .pipe(
        map((responseData) => {
          const eventsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              eventsArray.push({ ...responseData[key], id: key });
            }
          }
          return eventsArray;
        })
      )
      .subscribe((events) => {
        this.upcomingEvents = events;

      });
  }

  deleteEvent(id: string) {
    this.http.delete('https://faith-family-homeschool-co-op-default-rtdb.firebaseio.com/events/'+ id +'.json').subscribe()
   console.log(id)
    this.fetchEventsData()
    location.reload()

  }
}
