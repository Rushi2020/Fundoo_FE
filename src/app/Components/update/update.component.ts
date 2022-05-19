import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  noteId:any;
  title:any;
  description:any;

  constructor(private note:NoteService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  
  ngOnInit(): void {
    console.log(this.data)
    // this.id=this.data.id;
    this.title=this.data.title;
     this.description=this.data.description;
  }

  onNoClick(): void {
    // this.dialogRef.close();
    console.log(this.data);

    let data=
    {
      // noteId:this.NoteId,
      "title":this.title,
      "description":this.description,
      "bgColor": "red",
      "isArchive": true,
      "isReminder": true,
      "isPin": true,
      "isTrash": true
    }
    this.note.updateNote(data,this.data.noteId).subscribe((result:any)=>{
      console.log(result);
      // this.messageEvent.emit("Hello")
    })
  }
}
