import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  base=environment.baseUrl;
   

  constructor(private httpservice:HttpService) { }
  
  registration(data:any){
    let header={headers:new HttpHeaders({ 'Content-Type':'application/json-patch+json'})
    
  }
  console.log(data)
   return this.httpservice.postService(this.base+'User/register/', data,false,header)
   
}
login(data:any){
  console.log(data)
  let header={ headers:new HttpHeaders({'content-type': 'application/json'  })
   
  } 
  return this.httpservice.postService(this.base+`User/Login/${data.email}/${data.password}`, {} ,false,header)

}
ForgetPassword(data:any){
  console.log(data)
  let header={
    headers:new HttpHeaders({  'content-type': 'application/json'})
  } 
  return this.httpservice.postService(this.base+`User/ForgetPassword/${data.email}`, {} ,true,header)

}

// ChangePassword(data:any , token:any){
//   console.log(data,token)
//   let header={Headers:new HttpHeaders({
//     'Content-Type': 'application/json',
//     // 'Authorization': 'Bearer '+token www-authenticate
    
//     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmlrYTEyQGdtYWlsLmNvbSIsInVzZXJJZCI6IjEyIiwibmJmIjoxNjUyNDE4MTYyLCJleHAiOjE2NTI0MjE3NjIsImlhdCI6MTY1MjQxODE2Mn0.E1cKAemx__kJnkNj7la2dfF0LGJ2IRCfGJuouYLMiwA' 
//     })  
// }
// return this.httpservice.putService(this.base+'User/ChangePassword/',data,true,header)
// }


ChangePassword(data:any,token:any){
  let header={
    headers:new HttpHeaders({
      'Content-Type': 'application/json-patch+json',
      'Authorization':`Bearer ${token}`
    })
  }
return this.httpservice.putService(this.base+'User/ChangePassword',data,true,header)
}

}