import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  items=[{
    id:'1',
    product_name:"santoor",
    price:12
  },
  {
    id:'2',
    product_name:"patanjali",
    price:122
  },
  {
    id:'3',
    product_name:"dabar",
    price:122
  }
]
lis="liEle"
onchange(id: string) {
  this.lis = "liEleChange";
  var ele = document.getElementById(id); // Use the actual id passed as an argument
  if (ele) {
    ele.style.display = "none";
  }

  // console.log(id);
}
}
