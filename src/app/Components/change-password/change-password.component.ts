import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  ChangePasswordForm!:FormGroup;
  submitted=false;
   token:any;

  constructor(private formBuilder:FormBuilder,private user:UserService , private active:ActivatedRoute,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.ChangePasswordForm=this.formBuilder.group({
      
      newPassword:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',Validators.required]
    });
    this.token = this.active.snapshot.paramMap.get('token');
    console.log(this.token);
  }

  onSubmit() {
    this.submitted = true;
    console.log("inside submit")
    if (this.ChangePasswordForm.valid) {
      console.log("valid data", this.ChangePasswordForm.value);
      let data = {

        newPassword: this.ChangePasswordForm.value.newPassword,
        confirmPassword: this.ChangePasswordForm.value.confirmPassword
      }

      this.user.ChangePassword(data ,this.token).subscribe((res: any) => {
        console.log(res);
        this._snackBar.open('Password changed successfully..', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      },error=>{
        this._snackBar.open('Failed to change password', '', {
        duration: 2000,
        verticalPosition: 'bottom'

        });
      })
    }
    else
     {
      console.log("Invalid data", this.ChangePasswordForm.value);
    }
  }
}
