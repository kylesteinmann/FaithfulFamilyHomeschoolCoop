import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm, UntypedFormBuilder } from '@angular/forms';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  constructor(public dataService: DataService, public http: HttpClient) {}

  onSubmitEvent(eventForm: NgForm) {
    const date = eventForm.value.date;
    const event = eventForm.value.event;
    const postData = { date: date, event: event };

    this.http
      .post(
        'https://faith-family-homeschool-co-op-default-rtdb.firebaseio.com/events.json',
        postData
      )
      .subscribe(() => {
        this.dataService.fetchEventsData();
        eventForm.reset();

      });
  }

  onSubmitClass(classForm: NgForm) {
    const className = classForm.value.class;
    const description = classForm.value.description;
    const postData = { className: className, description: description };

    this.http
      .post(
        'https://faith-family-homeschool-co-op-default-rtdb.firebaseio.com/classes.json',
        postData
      )
      .subscribe(() => {
        this.dataService.fetchClassesData()
        classForm.reset();
      });
  }
}
