import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
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
        this.dataService.fetchClassesData();
        classForm.reset();
      });
  }

  onSubmitSignupForm(formData: NgForm) {
    console.log(formData);
    const parentFirstName = formData.value.parentFirstName,
      parentLastName = formData.value.parentLastName,
      city = formData.value.city,
      state = formData.value.state,
      zipCode = formData.value.zipCode,
      phoneNumber = formData.value.phoneNumber,
      address = formData.value.address,
      email = formData.value.email,
      classesInterestedIn = formData.value.classesInterestedIn,
      ageFive = formData.value.ageFive,
      ageFour = formData.value.ageFour,
      ageThree = formData.value.ageThree,
      ageTwo = formData.value.ageTwo,
      ageOne = formData.value.ageOne,
      childFirstNameFive = formData.value.childFirstNameFive,
      childFirstNameFour = formData.value.childFirstNameFour,
      childFirstNameThree = formData.value.childFirstNameThree,
      childFirstNameTwo = formData.value.childFirstNameTwo,
      childFirstNameOne = formData.value.childFirstNameOne,
      childLastNameOne = formData.value.childLastNameOne,
      childLastNameTwo = formData.value.childLastNameTwo,
      childLastNameThree = formData.value.childLastNameThree,
      childLastNameFour = formData.value.childLastNameFour,
      childLastNameFive = formData.value.childLastNameFive,
      knownAllergiesOne = formData.value.knownAllergiesOne,
      knownAllergiesTwo = formData.value.knownAllergiesTwo,
      knownAllergiesThree = formData.value.knownAllergiesThree,
      knownAllergiesFour = formData.value.knownAllergiesFour,
      knownAllergiesFive = formData.value.knownAllergiesFive;

    const postData = {
      parentFirstName: parentFirstName,
      parentLastName: parentLastName,
      city: city,
      state: state,
      zipCode: zipCode,
      phoneNumber: phoneNumber,
      address: address,
      email: email,
      classesInterestedIn: classesInterestedIn,
      ageFive: ageFive,
      ageFour: ageFour,
      ageThree: ageThree,
      ageTwo: ageTwo,
      ageOne: ageOne,
      childFirstNameFive: childFirstNameFive,
      childFirstNameFour: childFirstNameFour,
      childFirstNameThree: childFirstNameThree,
      childFirstNameTwo: childFirstNameTwo,
      childFirstNameOne: childFirstNameOne,
      childLastNameOne: childLastNameOne,
      childLastNameTwo: childLastNameTwo,
      childLastNameThree: childLastNameThree,
      childLastNameFour: childLastNameFour,
      childLastNameFive: childLastNameFive,
      knownAllergiesOne: knownAllergiesOne,
      knownAllergiesTwo: knownAllergiesTwo,
      knownAllergiesThree: knownAllergiesThree,
      knownAllergiesFour: knownAllergiesFour,
      knownAllergiesFive: knownAllergiesFive,
    };
    this.http
      .post(
        'https://faith-family-homeschool-co-op-default-rtdb.firebaseio.com/signed-up.json',
        postData
      )
      .subscribe();
  }
}
