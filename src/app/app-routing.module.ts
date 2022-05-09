import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { pathToFileURL } from 'url';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
// import { ChangePasswordComponent } from './Components/change-password/change-password.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path :'forgot-password',component:ForgotPasswordComponent}
  // {path:'changepassword/:token',component:ChangePasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
