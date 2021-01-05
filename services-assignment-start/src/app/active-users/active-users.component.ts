import { Component, Input } from '@angular/core';
import { UsersServiceService } from '../services/users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private userService: UsersServiceService) {}

  onSetToInactive(id: number) {
    this.userService.onInactive(id);
  }
}
