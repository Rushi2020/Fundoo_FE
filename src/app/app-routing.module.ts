import { NgModule } from '@angular/core';
import {ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
// import { pathToFileURL } from 'url';
import { RegisterComponent } from './Components/register/register.component';

import { LoginComponent } from './Components/login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { Token } from '@angular/compiler';

import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path :'forgot-password',component:ForgotPasswordComponent},
  {path : 'ChangePassword/:token' ,component:ChangePasswordComponent},
  {path : 'dashboard',component:DashboardComponent,
  children:[
    {path: '' , redirectTo:'/dashboard/notes', pathMatch:'full'},
    {path:'notes',component:GetAllNotesComponent},
    {path:'archive',component:ArchiveComponent},
    {path:'trash',component:TrashComponent},
  ]
},
{path: '', redirectTo: '/login', pathMatch: 'full'},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
