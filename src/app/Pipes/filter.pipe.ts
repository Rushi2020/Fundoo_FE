import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any ,filteredSting:string){
    if(value.length ===0 || filteredSting===''){
      return value;
    }
    const recievedNoteList=[];
    for(const note of value)
    {
      console.log(value.target)
      if(note.title.toLocaleLowerCase().includes(filteredSting) || note.description.toLocaleLowerCase().includes(filteredSting))
      {
        recievedNoteList.push(note);
      
      }
    }
    return recievedNoteList;
   }
  

}
