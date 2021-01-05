import { Component, Input } from '@angular/core';
import { CounterServiceService } from '../services/counter-service.service';
import { UsersServiceService } from '../services/users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  inactiveCounter: number;
  inactiveIncrement: number;
  constructor(private userService: UsersServiceService,
    private counterService: CounterServiceService) { }
  onSetToActive(id: number) {
    this.userService.onActive(id);
    this.counterService.inactiveCounter();
    this.inactiveCounter = this.counterService.inactiveIncrement;
  }
}
