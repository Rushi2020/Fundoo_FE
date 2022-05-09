import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // loginForm!:FormGroup;
  submitted=false;


  constructor(router:Router) { }

  ngOnInit(): void {
  //   this.loginForm=this.formBuilder.group({
  //     email:['',[Validators.required,Validators.email]],
  //     password:['',[Validators.required,Validators.minLength(6)]],
       
  //   });
  }
  Onsubmit(){}
}
