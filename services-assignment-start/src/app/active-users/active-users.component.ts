import { Component, Input } from '@angular/core';
import { CounterServiceService } from '../services/counter-service.service';
import { UsersServiceService } from '../services/users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[];
  activeCounter = 0;
  constructor(private userService: UsersServiceService,
    private counterService: CounterServiceService) { }

  onSetToInactive(id: number) {
    this.userService.onInactive(id);
    this.counterService.activeCounter();
    this.activeCounter = this.counterService.activeIncrement;
  }
}
