import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employee=[{
    name:"abhishek",
    age:23,
    designation:"senior coo and ceo "
  },{
    name:"Soham",
    age:50,
    designation:"tester"
  },{
    name:"satvik",
    age:45,
    designation:"vp developer"
  }]
}
