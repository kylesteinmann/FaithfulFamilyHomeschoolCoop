import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { MeetTheBoardComponent } from './Components/meet-the-board/meet-the-board.component';
import { ScheduleAndClassesComponent } from './Components/schedule-and-classes/schedule-and-classes.component';
import { ImportantInformationComponent } from './Components/important-information/important-information.component';
import { SignUpAndPaymentComponent } from './Components/sign-up-and-payment/sign-up-and-payment.component';
import { AdminPortalComponent } from './Components/admin-portal/admin-portal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    MeetTheBoardComponent,
    ScheduleAndClassesComponent,
    ImportantInformationComponent,
    SignUpAndPaymentComponent,
    AdminPortalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    MatStepperModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
