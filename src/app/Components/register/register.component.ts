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
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmpassword:['',Validators.required],
      service:['advance']
    });
  }
  OnSubmit(){
    this.submitted=true;
    if(this.registerForm.valid)
    {
      console.log(this.registerForm.value);

      let data={
        firstName:this.registerForm.value.firstname,
        lastName:this.registerForm.value.lastname,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password,
        service:this.registerForm.value.service
      }
      // this.user.registration(data).subscribe((res:any)=>
      // {
      //   console.log(res);
      // })
    }
    else
    {
      console.log("enter data");
    }
  }

}
