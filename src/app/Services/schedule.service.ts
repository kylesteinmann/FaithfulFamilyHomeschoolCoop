import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor() {}

  eventsColumns: string[] = ['date', 'eventName'];
  classesColumns: string[] = ['className', 'description'];

}
