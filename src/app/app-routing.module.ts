import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AdminPortalComponent } from './Components/admin-portal/admin-portal.component';
import { AuthComponent } from './Components/auth/auth.component';
import { HomeComponent } from './Components/home/home.component';
import { ImportantInformationComponent } from './Components/important-information/important-information.component';
import { MeetTheBoardComponent } from './Components/meet-the-board/meet-the-board.component';
import { ScheduleAndClassesComponent } from './Components/schedule-and-classes/schedule-and-classes.component';
import { SignUpAndPaymentComponent } from './Components/sign-up-and-payment/sign-up-and-payment.component';

const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path: "admin", component:AdminPortalComponent},
  {path: "", component: HomeComponent},
  {path: "importantInformation", component: ImportantInformationComponent},
  {path: "aboutUs", component: AboutUsComponent},
  {path: "meetTheBoard", component: MeetTheBoardComponent},
  {path: "scheduleAndClasses", component: ScheduleAndClassesComponent},
  {path: "signUpAndPayment", component: SignUpAndPaymentComponent},
  {path:"auth", component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
