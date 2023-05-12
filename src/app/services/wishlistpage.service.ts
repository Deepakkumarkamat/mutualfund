import { Injectable } from '@angular/core';
import { HomeComponent } from '../components/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class WishlistpageService {
  fund:any={
    name:"hdfc",
    year:"Three year",
    price:56,
  percentage:"36.00%"}
 

  constructor() { }

 
}
