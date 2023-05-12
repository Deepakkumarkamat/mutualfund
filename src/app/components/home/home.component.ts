import { Component } from '@angular/core';
import { WishlistpageService } from 'src/app/services/wishlistpage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  fund={}

  constructor(private _fundData:WishlistpageService){}
    // add(){
    //   this._fundData.addToWishlist(this.fund)
    // };
    // add(){
    //   this._fundData.addToWIshList()
    // }
    // add(){

    // }

};
