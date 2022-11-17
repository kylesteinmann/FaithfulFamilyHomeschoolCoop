import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: 'app-sign-up-and-payment',
  templateUrl: './sign-up-and-payment.component.html',
  styleUrls: ['./sign-up-and-payment.component.css']
})
export class SignUpAndPaymentComponent implements OnInit {

  parentInformation = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName:['',Validators.required],
    streetAddress:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required],
    zipCode:['',Validators.required],
    phoneNumber:['',Validators.required],
    emailAddress:['',Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    childFirstNameOne: ['', Validators.required],
    childLastNameOne: ['', Validators.required],
    ageOne: ['', Validators.required],

    childFirstNameTwo: ['', Validators],
    childLastNameTwo: ['', Validators],
    ageTwo: ['', Validators],

    childFirstNameThree: ['', Validators],
    childLastNameThree: ['', Validators],
    ageThree: ['', Validators],

    childFirstNameFour: ['', Validators],
    childLastNameFour: ['', Validators],
    ageFour: ['', Validators],

    childFirstNameFive: ['', Validators],
    childLastNameFive: ['', Validators],
    ageFive: ['', Validators],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
