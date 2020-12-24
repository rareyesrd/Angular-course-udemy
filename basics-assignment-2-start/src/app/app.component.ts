import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';

  isUserEmpty(){
    if(this.username.length > 0){
      return false
    }else{
      return true;
    }
  }

  clearUsername(){
    this.username = '';
  }
}
