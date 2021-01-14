import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSuscription: Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstObsSuscription = interval(1000).subscribe(
    //   (counter) => {
    //     console.log(counter);
    //   }
    // )
    const newObservable = new Observable<number>(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    })

    this.firstObsSuscription = newObservable.subscribe(d => {
      console.log('New Observe:', d);
    })
  }

  ngOnDestroy(): void {
    this.firstObsSuscription.unsubscribe();
  }

}
