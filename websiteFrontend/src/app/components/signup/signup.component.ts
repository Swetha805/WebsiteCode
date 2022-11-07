import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private route: Router) { }
  usernameError = ""
  passwordError = ""
  usernameRegexVal?: boolean
  passwordRegexVal?: boolean
  ngOnInit(): void {
  }
  userValidate(username: any) {
    let regex = /^[0-9A-z]{0,8}$/;
    this.usernameRegexVal = regex.test(username.value);
    
    if (this.usernameRegexVal) {
      this.usernameError = ""
    } else {
      this.usernameError = "Username contains max 8 letters"
    }

  }
  passwordValidate(password: any) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    this.passwordRegexVal = regex.test(password.value);
   
    if (this.passwordRegexVal) {
      console.log(true);
      
      this.passwordError = ""
    } else {
      console.log(false);
      
      this.passwordError = "password must contain minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
    }

  }
  signIn(userName: any, password: any) {
    localStorage.setItem("username", userName.value)
    localStorage.setItem("password", password.value)
    this.route.navigate(['/login'])

  }
  toLogin() {
    this.route.navigate(['/login'])
  }


}
