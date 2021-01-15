import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signUp: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = [
    'Male',
    'Female'
  ];
  showDataForm = false;

  user = {
      name: '',
      email: '',
      answer: '',
      gender: '',
      secret: ''
    };
  suggestUserName(): void {
    const suggestedName = 'Superuser';
    this.signUp.form.patchValue({
      userData: {
        username: suggestedName,
      },
      gender: 'male',
    });
  }

  // onSubmit(form: NgForm): void {
  //   console.log(this.form);
  // }

  onSubmit(): void {
    this.showDataForm = true;
    console.log(this.signUp);
    this.user.name = this.signUp.value.userData.username;
    this.user.email = this.signUp.value.email;
    this.user.answer = this.signUp.value.defaultQuestion;
    this.user.secret = this.signUp.value.secret;
    this.user.gender = this.signUp.value.gender;


    this.signUp.resetForm();
  }
}
