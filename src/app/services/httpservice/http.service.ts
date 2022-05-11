import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  postService(url:string, payload:any , token:boolean=false, httpOptions:any){
    
   return this.http.post(url, payload, token && httpOptions )
  }
  putService(){

  }
  grtService(){

  }
  deleteService(){
    
  }
}
