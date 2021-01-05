import { Component, OnInit } from "@angular/core";
import { AppAccountService } from "./services/app-account.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  constructor(private appAccount: AppAccountService) {}

  ngOnInit() {
    this.accounts = this.appAccount.accounts;
  }
}
