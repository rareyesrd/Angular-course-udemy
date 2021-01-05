import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './services/users-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(private userService: UsersServiceService){}

  ngOnInit(){
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }
}
