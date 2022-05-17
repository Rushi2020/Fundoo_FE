import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  base=environment.baseUrl;
  token:any;

  constructor(private httpservice :HttpService) {  
    this.token=localStorage.getItem('token')
  }

  addNote(data:any){
    
    console.log(data,this.token)
    
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.httpservice.postService(this.base+'Note/AddNote', data ,true,header)
  }

  getNote(){
    
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer '+this.token 
      })
    }
    return this.httpservice.getService(this.base+'Note/GetAllNotes',true,header)
  }



}
