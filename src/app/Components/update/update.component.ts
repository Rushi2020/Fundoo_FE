import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  bgColor:any
  @Output() updateEvent = new EventEmitter<string>();

  constructor(private note:NoteService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _snackBar: MatSnackBar
  ) {}
  
  ngOnInit(): void {
    console.log(this.data)
    console.log(this.data.bgColor)
    // this.id=this.data.id;
    this.title=this.data.title;
     this.description=this.data.description;
     this.bgColor=this.data.bgColor
  }

  onNoClick(): void {
    // this.dialogRef.close();
    console.log(this.data);

    let data=
    {
      // noteId:this.NoteId,
      "title":this.title,
      "description":this.description,
       bgColor: this.bgColor,
      "isArchive": true,
      "isReminder": true,
      "isPin": true,
      "isTrash": true
    }
    this.note.updateNote(data,this.data.noteId).subscribe((result:any)=>{
      console.log(result);
      // this.messageEvent.emit("Hello")
      this._snackBar.open('Note updated successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    },error=>{
      this._snackBar.open('Failed to update', '', {
      duration: 2000,
      verticalPosition: 'bottom'

      });
    }
    )
   
  }
  recieveMessage(event:any){
    this.onNoClick();
  }
  updateMessage(event:any){
    
    if(event.data !== (null || undefined)){
      console.log(event.data)
    this.bgColor = event.data.bgColor} 
}
 
}

