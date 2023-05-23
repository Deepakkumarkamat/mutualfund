import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { ApiService } from 'src/app/services/api.service';
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

 data:any;
 animationCreated(animationCreated:AnimationItem){
  console.log('animation crated')
 }
  // wishList:any[]=[]
  constructor(private _wishlistItem:WishlistpageService,private route:ActivatedRoute,private api:ApiService){}
  // ngOnInit(){
  //   this.wishList = this._wishlistItem.mutual;
  //   console.log(this.wishList)
  // }
  ngOnInit(){
    this.api.detailById(Number(this.route.snapshot.paramMap.get('id'))).subscribe((data)=>{
      this.data=data
    })
    console.log('data',this.data)
  }
 

}
