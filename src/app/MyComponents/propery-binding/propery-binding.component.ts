import { Component } from '@angular/core';

@Component({
  selector: 'app-propery-binding',
  templateUrl: './propery-binding.component.html',
  styleUrl: './propery-binding.component.css'
})
export class ProperyBindingComponent {
   myvalue=false;
   onclicks(){
    this.myvalue=this.myvalue;
    console.log(this.myvalue)
   }
}
