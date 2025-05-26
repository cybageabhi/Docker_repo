import { Component  } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [DatePipe]
})
export class ContactComponent {
  dob: Date = new Date(1990, 0, 1); // Adjust the date as needed
  formData = {
    name: '',
    email: '',
    message: ''
  };

  // Function to handle form submission
  submitForm() {
    // You can implement form submission logic here
    console.log('Form submitted:', this.formData);
  }
}
