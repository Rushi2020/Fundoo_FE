import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user:UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z]{3,}[1-9]{1,4}[@][a-z]{4,}[.][a-z]{3,}$")]],
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log("inside submit");
    if(this.forgotPasswordForm.valid)
  {
      console.log("valid data", this.forgotPasswordForm.value);
      let data={
        email:this.forgotPasswordForm.value.email
      }
      this.user.ForgetPassword(data).subscribe((res:any)=>{
        console.log(res);
        this._snackBar.open('Mail sent successfully..', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      })
  }
  else
  {
    console.log("Invalid data", this.forgotPasswordForm.value);
  }
}

}
