import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserServiceService } from './user/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivate: boolean;
  activatedUser: Subscription;
  constructor(private userService: UserServiceService) {}

  ngOnInit() {
    this.activatedUser = this.userService.activateEmitter.subscribe(
      (data: boolean) => {
        this.userActivate = data;
      }
    )
  }

  ngOnDestroy(): void {
    this.activatedUser.unsubscribe();
  }
}
