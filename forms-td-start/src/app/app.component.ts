import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signUp = NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = [
    'Male',
    'Female'
  ];
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm): void {
  //   console.log(this.s);
  // }

  onSubmit(): void {
    console.log(this.signUp);
  }
}
