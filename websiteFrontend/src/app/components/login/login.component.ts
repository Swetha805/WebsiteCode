import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  login(username:any,password:any){
    (username.value==localStorage.getItem('username')&&
    password.value==localStorage.getItem('password'))?
    this.route.navigate(['/checkList']):alert('Invalid Credentials')

  }
  toSignUp(){
    this.route.navigate(['/signup'])
  }


}
