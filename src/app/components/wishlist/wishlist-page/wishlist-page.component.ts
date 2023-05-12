import { Component } from '@angular/core';
import { WishlistpageService } from 'src/app/services/wishlistpage.service';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.css']
})
export class WishlistPageComponent {
  // wishList:any[]=[]
  constructor(private _wishlistItem:WishlistpageService){}
  // ngOnInit(){
  //   this.wishList = this._wishlistItem.mutual;
  //   console.log(this.wishList)
  // }
  

}
