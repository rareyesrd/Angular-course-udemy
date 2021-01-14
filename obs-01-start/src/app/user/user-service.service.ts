import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  activateEmitter = new Subject<boolean>();

  constructor() { }
}
