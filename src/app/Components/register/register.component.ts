import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern("^[A-Z]{1}[a-z]{2,}$")]],
      lastname: ['', [Validators.required, Validators.pattern("^[A-Z]{1}[a-z]{2,}$")]],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z]{3,}[1-9]{1,4}[@][a-z]{4,}[.][a-z]{3,}$")]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmpassword: ['', Validators.required]
      
    });

  }
  onSubmit() {
    console.log("inside submit");
    if(this.registerForm.valid)
  {
      console.log("valid data", this.registerForm.value);
  }
  else
  {
    console.log("Invalid data", this.registerForm.value);
  }
}
}
