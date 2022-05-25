import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { ArchiveComponent } from '../archive/archive.component';
import { GetAllNotesComponent } from '../get-all-notes/get-all-notes.component';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  NoteId:any;
  isTrash:any;
  data:any;
  isArchive:any;

  @Input() notedata:any;
  @Output() updateEvent = new EventEmitter<string>();
  @Output() trashEvent = new EventEmitter<string>();

  isTrashComponent=false;
  isDisplayComponent=false;
  isArchieveComponent= false;

  colorArray = [{Colorcode:"white", name:"White"},{Colorcode:"#f28b82", name:"Red"},{Colorcode:"#fbbc04", name:"Orange"},{Colorcode:"#fff475", name:"Yellow"},{Colorcode:"#ccff90", name:"Green"},{Colorcode:"#a7ffeb", name:"Teel"},
  {Colorcode:"#cbf0f8", name:"Blue"},{Colorcode:"#aecbfa", name:"Dark-Blue"},{Colorcode:"#d7aefb", name:"Purple"},{Colorcode:"#fdcfe8", name:"Pink"},{Colorcode:"#e6c9a8", name:"Brown"},{Colorcode:"#e8eaed", name:"Gray"}];

  constructor(private note:NoteService, private snackBar: MatSnackBar,private route: ActivatedRoute) { }

  ngOnInit(): void {
    let comp = this.route.snapshot.component;
    if (comp == GetAllNotesComponent) {
      this.isDisplayComponent = true;
    }
    if(comp == ArchiveComponent)
    {
      this.isArchieveComponent=true;
    }
    if(comp == TrashComponent)
    {
      this.isTrashComponent=true;
    }
  }

  archieve() {
    console.log(this.notedata)
    this.note.archieveNote(this.notedata.noteId).subscribe((response:any)=>{
      console.log(response);
      this.updateEvent.emit(response)
      this.snackBar.open('Note Archived Successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    }, error => {
      this.snackBar.open('Failed to archieve', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    })
}

Unarchieve() {
  let data = {
    isArchived: false,
  }
  this.note.archieveNote(this.notedata.noteId).subscribe((res:any)=>{
    console.log("unarchive a note",res);
    this.updateEvent.emit(res)
    this.snackBar.open('Note UnArchived Successfully', '', {
      duration: 3000,
      verticalPosition: 'bottom'
    })
  }, error => {
    this.snackBar.open('Failed to UnArchived', '', {
      duration: 3000,
      verticalPosition: 'bottom'
    })
  })
}


delete() {
  this.note.deleteNote(this.notedata.noteId).subscribe((response: any) => {
    console.log("Note Deleted Successfully", response);
    this.updateEvent.emit(response);
    this.snackBar.open('Note deleted successfully!!!', '', {
      duration: 3000,
      verticalPosition: 'bottom'
    })
})
}


trash(note:any) {
  console.log("note",note)
  this.isTrash = !note.isTrash;
  this.note.trashNote(this.notedata.noteId,this.data).subscribe((response: any) => {
    console.log(response);
    this.trashEvent.emit(response)
    this.snackBar.open('Note trashed successfully..', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
   }, error=>this.snackBar.open('failed to trash', '', {
    duration: 2000,
    verticalPosition: 'bottom'

  })
  )
}

changeColor(color:any){
  console.log(color);

  this.note.changeColor(this.notedata.noteId,color).subscribe((response: any) => {
    console.log(response);
    
    this.trashEvent.emit(response)
    this.snackBar.open('Color changed successfully..', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
   }, error=>this.snackBar.open('failed to change color', '', {
    duration: 2000,
    verticalPosition: 'bottom'

  })
  )
}



}