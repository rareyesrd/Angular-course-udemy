import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
    const newObservable = new Observable<number>((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count greater to 3'));
        }
        count++;
      }, 1000);
    });

    this.firstObsSuscription = newObservable
      .pipe(
        filter((count) => {
          return count > 0;
        }),
        map((count: number) => {
          return `New Observer: ${count + 1}`;
        })
      )
      .subscribe(
        (d) => {
          console.log(d);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('Completed');
        }
      );
  }

  ngOnDestroy(): void {
    this.firstObsSuscription.unsubscribe();
  }
}
