import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: 'app-sign-up-and-payment',
  templateUrl: './sign-up-and-payment.component.html',
  styleUrls: ['./sign-up-and-payment.component.css']
})
export class SignUpAndPaymentComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
