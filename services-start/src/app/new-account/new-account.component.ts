
import { Component } from '@angular/core';
import { AppAccountService } from '../services/app-account.service';
import { LoggingStatusService } from '../services/logging-status.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private loggingStatus: LoggingStatusService,
    private appAccount: AppAccountService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.appAccount.addAccount(accountName, accountStatus);
    this.loggingStatus.loggingStatus(accountStatus);
  }
}
