import { Component,ElementRef } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private elRef:ElementRef,private ref: ChangeDetectorRef){

  }
  title = 'assignment';
  allFiles = [];
  selectedIndex;
  setBackground(event,file){
    const reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = event => {
        this.addAndSwapImages(this.allFiles, this.selectedIndex,`url(${reader.result})`);
      };
      event.stopPropagation();
  }

  setSelectedIndex(index){
    this.selectedIndex = index;
  }
  resetInput(index){
     let input = this.elRef.nativeElement.querySelectorAll('.fileinput')[index];
     input.value = "";

     if(input){
       this.allFiles.splice(index,1);
       this.swapImages(this.allFiles);

     }
  }
  addAndSwapImages(allFiles,selectedInputIndex,backgoundImage){

    if(allFiles.length == 6){
        allFiles[selectedInputIndex] = backgoundImage;
    }else{
      allFiles.push(backgoundImage);
    }
     let allInput =  this.elRef.nativeElement.querySelectorAll('.fileinput');
     for( let i=0; i<allInput.length;++i){
       allInput[i].value =""
     }
   
  }
  swapImages(allFiles){
    for(let i = 0 ; i < allFiles.length ; ++i){
      if(!allFiles[i]){
        allFiles[i] = allFiles[i+1];
        allFiles.splice(i+1,1); 
      }
    }
  
  }
}
