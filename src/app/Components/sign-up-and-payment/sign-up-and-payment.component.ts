import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { FormsService } from 'src/app/Services/forms.service';



@Component({
  selector: 'app-sign-up-and-payment',
  templateUrl: './sign-up-and-payment.component.html',
  styleUrls: ['./sign-up-and-payment.component.css']
})
export class SignUpAndPaymentComponent implements OnInit {

  // parentInformation = this._formBuilder.group({
  //   firstName: ['', Validators.required],
  //   lastName:['',Validators.required],
  //   streetAddress:['',Validators.required],
  //   city:['',Validators.required],
  //   state:['',Validators.required],
  //   zipCode:['',Validators.required],
  //   phoneNumber:['',Validators.required],
  //   emailAddress:['',Validators.required]
  // });
  // secondFormGroup = this._formBuilder.group({
  //   childFirstNameOne: ['', Validators.required],
  //   childLastNameOne: ['', Validators.required],
  //   ageOne: ['', Validators.required],

  //   childFirstNameTwo: [''],
  //   childLastNameTwo: [''],
  //   ageTwo: [''],

  //   childFirstNameThree: ['' ],
  //   childLastNameThree: ['' ],
  //   ageThree: ['' ],

  //   childFirstNameFour: [''],
  //   childLastNameFour: ['' ],
  //   ageFour: ['' ],

  //   childFirstNameFive: ['' ],
  //   childLastNameFive: ['' ],
  //   ageFive: ['']
  // });
  // isLinear = false;

  constructor(private dataService:DataService, public formsService:FormsService) { }

  ngOnInit() {
    this.dataService.fetchSignUpsData()
  }

}
