import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  noteList:any
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }


  getAllNotes(){
    this.note.getNote().subscribe((response:any)=>{
      console.log(response.data);
      this.noteList=response.data;
       this.noteList = this.noteList.filter((object:any)=>{
         return object.isArchive===true 
       })
    })
  }

  archiveMessage(event:any) {
    this.getAllNotes();
  }
}
