import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { MeetTheBoardComponent } from './Components/meet-the-board/meet-the-board.component';
import { ScheduleAndClassesComponent } from './Components/schedule-and-classes/schedule-and-classes.component';
import { ImportantInformationComponent } from './Components/important-information/important-information.component';
import { SignUpAndPaymentComponent } from './Components/sign-up-and-payment/sign-up-and-payment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    MeetTheBoardComponent,
    ScheduleAndClassesComponent,
    ImportantInformationComponent,
    SignUpAndPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
