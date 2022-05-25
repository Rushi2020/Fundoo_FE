import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { filter } from 'rxjs';
// import { GridListViewService } from 'src/app/Services/gridListdata/grid-list-view.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  note: any;
  filteredString = '';

  @Input()recievedNoteList:any;
  @Input() childMsg: any;
  @Output() updateEvent = new EventEmitter<any>();
  @Output() archiveEvent = new EventEmitter<any>();
  @Output() trashEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() refreshEvent = new EventEmitter<any>();

  displayMessage = "note refresh"
  // gridList: any;
  constructor(public dialog: MatDialog ) { }

  ngOnInit(): void {
    // this.nextData.store.subscribe(a => this.gridList = a)
    // this.nextData.storeForpipe.subscribe(b => this.filteredString = b)
  }
  
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '350px',
      height:'auto',
      data:note,
      panelClass: 'my-custom-dialog-class'

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.updateEvent.emit("Hello")
    });
  }
  
  archiveMessage(event:any){
    this.archiveEvent.emit("Hello")
  }
  trashMessage(event:any){
    this.trashEvent.emit("Hello")
  }
  deleteMessage(event:any){
    this.deleteEvent.emit("Hello")
  }updateMessage(event:any){
    this.updateEvent.emit("Hello")
  }
  receivedMessage(event: any) {
    console.log(event);
    this.refreshEvent.emit(this.displayMessage)
  }
}
