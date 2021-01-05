import { Injectable, OnInit } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoggingStatusService implements OnInit {
  constructor() {}

  ngOnInit() {}

  loggingStatus(status: string) {
    console.log(`A server status changed, new status: ${status}`);
  }
}
