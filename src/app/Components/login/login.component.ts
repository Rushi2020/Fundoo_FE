import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  submitted=false;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z]{3,}[1-9]{1,4}[@][a-z]{4,}[.][a-z]{3,}$")]],
      password:['',[Validators.required,Validators.minLength(6)]],
       
    });
  }
  onSubmit() {
    console.log("inside submit");
    if(this.loginForm.valid)
  {
      console.log("valid data", this.loginForm.value);
  }
  else
  {
    console.log("Invalid data", this.loginForm.value);
  }
}
}
