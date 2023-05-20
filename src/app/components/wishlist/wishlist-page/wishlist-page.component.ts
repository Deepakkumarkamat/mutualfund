import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { WalletService } from 'src/app/services/wallet.service';
import { WishlistpageService } from 'src/app/services/wishlistpage.service';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.css']
})
export class WishlistPageComponent {
 options:AnimationOptions={
  path:'../../../../assets/52009-wishlist.json'
 }
 animationCreated(animationCreated:AnimationItem){
  console.log('animation crated')
 }
  // wishList:any[]=[]
  constructor(private _wishlistItem:WishlistpageService){}
  // ngOnInit(){
  //   this.wishList = this._wishlistItem.mutual;
  //   console.log(this.wishList)
  // }
 

}
