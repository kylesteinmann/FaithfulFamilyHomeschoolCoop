import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { User } from 'src/app/Models/user';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  user = new Subject<User>();

  constructor(private http: HttpClient) {

  }
  onSubmitAuthForm(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password
    this.login(email, password).subscribe();
    form.reset();
  }
  private handleAuthentication(
    email:string,
    userId:string,
    token:string,
    expiresIn:number){
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user)
  }
  login(email: string, password: string) {
    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyA5MYmLyQXCtVSXa6deAskDtHlY9VmdOmg", {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }

}
