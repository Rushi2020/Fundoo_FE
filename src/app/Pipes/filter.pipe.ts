import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  item: any
  transform( items:any ,titleSearch?:string ) {
   
    if (items && items.length) {
      return items.filter((item: { title: string; }) => {
        if (titleSearch && item.title.toLowerCase().indexOf(titleSearch.toLowerCase()) === -1) {
          return false;
        }
        return true;
      })
    }
    else {
      return items;
    }
  }


    // if (value.length===0) {
    //   return value;
    // }
    // const recievedNoteList = [];
    // for (const note of value) {

    //   if (note['title'] || note['description']) {
    //     recievedNoteList.push(note);
    //   }
    //   return recievedNoteList;
    // }
 
  //   if (items && items.length){
  //     return items.filter((item: { title: string; }) =>{
  //         if (titleSearch && item.title.toLowerCase().indexOf(titleSearch.toLowerCase()) === -1){
  //             return false;
  //         }
  //         return true;
  //    })
  // }
  // else{
  //     return items;
  // }
  // const recievedNoteList = [];
  // for (const note of items) {

  //   if (note['title'] || note['description']) {
  //     recievedNoteList.push(note);
  //   }
  //   return recievedNoteList;
  // }

  }
  


