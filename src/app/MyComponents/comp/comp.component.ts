import { Component } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css'
})
export class CompComponent {
  userprofile=[{
    name:"abhishek",
    age:22,
    email:"abhishekwas"
  },
{
  name:"soham",
  age:25,
  email:"sohamsa"
},]
}
