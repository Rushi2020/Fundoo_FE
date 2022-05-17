import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  isShow=false;
  title:any;
  description:any ;

  constructor(private note : NoteService) { }

  ngOnInit(): void {
  }
  
  show(){
    this.isShow=true;
  }
  close(){
    this.isShow=false
    console.log(this.title,this.description)
    let data={
    "title": this.title,
    "description": this.description,
    "bgColor": "red",
    "isArchive": true,
    "isReminder": true,
    "isPin": true,
    "isTrash": true
    }
    this.note.addNote(data).subscribe((result:any)=>{
      console.log(result);
    })
  }
}
