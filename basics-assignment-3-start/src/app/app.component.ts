import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter: number = 0;
  secretMessage: boolean = false;
  numbers = [];

  onToggle(){
    this.secretMessage = !this.secretMessage;
    this.counter = this.counter + 1;
    this.numbers.push(this.counter);
  }
}
