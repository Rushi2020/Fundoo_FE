import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  noteList:any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.GetAllNotes();
  }
  GetAllNotes(){
    this.note.getNote().subscribe((response:any)=>{
      console.log(response);
      this.noteList=response.data;
    }
  )}

  receiveMessage(event:any){
    this.GetAllNotes();
  }
  updateMessage(event: any) {
    this.GetAllNotes();
  }
  archieveMessage(event: any) {
    this.GetAllNotes();
  }
  trashMessage(event:any){
    this.GetAllNotes();
  }
  deleteMessage(event:any){
    this.GetAllNotes();
  }
 
}
