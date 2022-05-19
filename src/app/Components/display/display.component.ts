import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input()recievedNoteList:any;
  @Output() updateEvent = new EventEmitter<any>();
  @Output() archiveEvent = new EventEmitter<any>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '700px',
      data:note 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.updateEvent.emit("Hello")
    });
  }
  
  receivedMessage(event:any)
  {
    console.log(event);
    this.updateEvent.emit("hello")   
  }
  archiveMessage(event:any)
  {
    console.log(event);
    this.archiveEvent.emit("hello")     
  }

}
