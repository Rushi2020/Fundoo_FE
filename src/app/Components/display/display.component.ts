import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { filter } from 'rxjs';
import { DataService } from 'src/app/services/Data/data.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  note: any;
  titleSearch:string = '';

  @Input()recievedNoteList:any;
  @Input() childMsg: any;
  @Output() updateEvent = new EventEmitter<any>();
  @Output() refreshEvent = new EventEmitter<any>();

  displayMessage = "note refresh"
 
  constructor(public dialog: MatDialog , private data:DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message  => {
      console.log(message)
      this.titleSearch=message
    } )
  }
  
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '500px',
      height:'auto',
      data:note,
      panelClass: 'my-custom-dialog-class'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.updateEvent.emit("Hello")
    });
  }
  updateMessage(event:any){
    this.updateEvent.emit("Hello")
  }
}
