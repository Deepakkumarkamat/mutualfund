import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { DepositPageComponent } from './components/wallet/deposit/deposit-page/deposit-page.component';
import { WithdrawPageComponent } from './components/wallet/withdraw/withdraw-page/withdraw-page.component';
import { TransactionPageComponent } from './components/wallet/transaction/transaction-page/transaction-page.component';
import { WishlistPageComponent } from './components/wishlist/wishlist-page/wishlist-page.component';
import { AllfundsComponent } from './components/allfunds/allfunds.component';
import { AllfundsdetailComponent } from './components/allfundsdetail/allfundsdetail.component';

const routes: Routes = [
  {path:'',component:AllfundsComponent},
  // {path:'login', component:LoginComponent},
  {path:'wallet',
  children:[
    {path:'',component:WalletComponent,},
    // {path:'deposit',component:DepositPageComponent},
    // {path:'withdraw',component:WithdrawPageComponent},
    // {path:'transaction',component:TransactionPageComponent},
  ]},
  {path:'wishlist',component:WishlistPageComponent},
  {path:'allfundsdetail',component:AllfundsdetailComponent},
  {path:'allfundsdetail/:id',component:AllfundsdetailComponent}
  // {path:'deposit',component:DepositPageComponent}
 
  // {path:'login',component:LoginComponent},
  // {path:'signUp', component:SignUpComponent}
 
  
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
