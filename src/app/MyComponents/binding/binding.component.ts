import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
    myvalue:string="first value me and myself";
    changeContent(){
      this.myvalue=this.myvalue;
      console.log(this.myvalue);
    }
}
