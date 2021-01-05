import { Component, Input } from '@angular/core';
import { UsersServiceService } from '../services/users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private userService: UsersServiceService) {}
  onSetToActive(id: number) {
    this.userService.onActive(id);
  }
}
