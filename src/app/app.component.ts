import { ExternalExpr } from '@angular/compiler';
import { Component} from '@angular/core';
import { from, Observable,of,map, Subscriber, Subscription,first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mutualfund';

  // numbers : number[] = []
  // val1 : number = 0


  // ngOnInit(){
  //   const numbers$ = ([1,2,3,4,5,6,7,8,9,10])
  //   const observer = {
  //     next : (num:number) => {this.numbers.push(num); this.val1 +=num},
  //     error:(err:any) => console.log(err),
  //     complete:() =>console.log("completed")
  //   };

  //   console.log(numbers$.subscribe(observer))

  // }
  
  
  
}
// const data = from(fetch('/api/endpoint'));
// // Subscribe to begin listening for async result
// data.subscribe({
//   next(response) { console.log(response); },
//   error(err) { console.error('Error: ' + err); },
//   complete() { console.log('Completed'); }
// });
// const nums = of(1,2,3)
// const sqaureValue = map((val:number) => val * val)
// const sqauredValue = sqaureValue(nums)
// sqauredValue.subscribe(res =>console.log(res))

// const observable = new Observable((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   setTimeout(() => {
//     subscriber.next(4);
//     subscriber.complete();
//   }, 1000);
// });
 
// observable.subscribe({
//   next:(x) => console.log(x),
//   error:(err) => console.log(err),
//   complete:() => console.log("Done") 

// })

// const observable = new Observable(function subscribe(subscriber) {
//   const id = setInterval(() => {
//     subscriber.next('hi');
//   }, 1000);

// });
// const subscription = observable.subscribe((x) => console.log(x))
// subscription.unsubscribe();
// of(1, 2, 3)
//   .pipe(first())
//   .subscribe((v) => console.log(`value: ${v}`));