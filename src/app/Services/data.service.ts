import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { Event } from 'src/app/Models/event';
import { Classes } from 'src/app/Models/classes';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  datepipe = new DatePipe('en-US');

  classesOffered: Classes[] = [];

  upcomingEvents: Event[] = [];

  signUps:any[] = [];

  constructor(private http: HttpClient) {}

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
          return eventsArray.sort((a, b) => {
            if (a.date < b.date) return -1;
            if (a.date > b.date) return 1;
            return 0;
          });
        })
      )
      .subscribe((events) => {
        this.upcomingEvents = events;

        for (let event of this.upcomingEvents) {
          event.date = this.datepipe.transform(event.date, 'MM/dd/YYYY');
        }
      });
  }

  deleteEvent(id: string) {
    this.http
      .delete(
        'https://faith-family-homeschool-co-op-default-rtdb.firebaseio.com/events/' +
          id +
          '.json'
      )
      .subscribe(() => {
        this.fetchEventsData();
      });
  }

  public fetchClassesData() {
    this.http
      .get<{ [key: string]: Classes }>(
        'https://faith-family-homeschool-co-op-default-rtdb.firebaseio.com/classes.json'
      )
      .pipe(
        map((responseData) => {
          const classesArray = [];
          for (const key in responseData) {
            classesArray.push({ ...responseData[key], id: key });
          }
          return classesArray;
        })
      )
      .subscribe((classes) => {
        this.classesOffered = classes;
      });
  }

  deleteClass(id: string) {
    this.http
      .delete(
        'https://faith-family-homeschool-co-op-default-rtdb.firebaseio.com/classes/' +
          id +
          '.json'
      )
      .subscribe(() => {
        this.fetchClassesData();
      });
  }

  public fetchSignUpsData() {
    this.http
      .get(
        'https://faith-family-homeschool-co-op-default-rtdb.firebaseio.com/signed-up.json'
      )
      .pipe(
        map((responseData:any) => {
          const signUpsArray = [];
          for (const key in responseData) {
            signUpsArray.push({ ...responseData[key], id: key });
          }
          return signUpsArray;
        })
      )
      .subscribe((signUpsData) => {
        this.signUps = signUpsData;
        console.log(this.signUps)
      });
  }
}
