import { Component, Input } from '@angular/core';
import { AppAccountService } from '../services/app-account.service';
import { LoggingStatusService } from '../services/logging-status.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
 
  constructor(private loggingStatus: LoggingStatusService,
    private appAccount: AppAccountService) {}

  onSetTo(status: string) {
    this.appAccount.updateStatus(this.id, status);
    this.loggingStatus.loggingStatus(status);
  }
}
