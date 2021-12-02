import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   availableClasses: string[] = ["dark", "light"];
   currentClassIdx: number = 0;
 
   bodyClass: string;

   constructor() {
      this.bodyClass = this.availableClasses[this.currentClassIdx];
      this.changeBodyClass();
   }

   changeBodyClass() { // get html body element
      
      const bodyElement = document.body;
  
      if (bodyElement) {
         this.currentClassIdx = this.getNextClassIdx();
         const nextClass = this.availableClasses[this.currentClassIdx];
         const activeClass = this.availableClasses[this.getPrevClassIdx()];
   
         bodyElement.classList.remove(activeClass); // remove existing class (needed if theme is being changed)
         bodyElement.classList.add(nextClass); // add next theme class
   
         this.bodyClass = nextClass;
      }
   }
  
   getPrevClassIdx(): number {
      return this.currentClassIdx === 0
         ? this.availableClasses.length - 1
         : this.currentClassIdx - 1;
   }
  
   getNextClassIdx(): number {
      return this.currentClassIdx === this.availableClasses.length - 1
         ? 0
         : this.currentClassIdx + 1;
   }
}
