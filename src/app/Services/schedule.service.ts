import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor() {}

  schedule = [
    { date: '10/20/22', className: 'History' },
    { date: '10/21/22', className: 'Science' },
    { date: '10/22/22', className: 'Math' },
    { date: '10/23/22', className: 'Cooking' },
  ];
}
