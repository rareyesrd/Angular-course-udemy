import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
  activeIncrement = 0;
  inactiveIncrement = 0;
  constructor() { }

  activeCounter(): void {
    this.activeIncrement++;
  }

  inactiveCounter(): void {
    this.inactiveIncrement++;
  }
}
