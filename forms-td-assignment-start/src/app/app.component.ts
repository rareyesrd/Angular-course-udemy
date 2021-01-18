import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') handleForm: NgForm;

  data = {
    email: '',
    level: '',
    password: '',
  };


  onSubmit(): void {
    console.log(this.handleForm);
    this.data.email = this.handleForm.value.email;
    this.data.level = this.handleForm.value.level;
    this.data.password = this.handleForm.value.password;


    this.handleForm.resetForm();
  }
}
