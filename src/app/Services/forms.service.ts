import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  constructor(
    public dataService: DataService,
    public http: HttpClient
  ) {}

  onSubmitEvent(eventForm: NgForm) {
    const datepipe: DatePipe = new DatePipe('en-US');

    const date = datepipe.transform(eventForm.value.date, 'MM/dd/YYYY');
    const event = eventForm.value.event;
    const postData = { date: date, event: event };

    this.http
      .post(
        'https://faith-family-homeschool-co-op-default-rtdb.firebaseio.com/events.json',
        postData
      )
      .subscribe();

    this.dataService.fetchEventsData();
    location.reload();

    console.log(postData);
  }
}
