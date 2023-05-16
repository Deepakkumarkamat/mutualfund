import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { DepositPageComponent } from './components/wallet/deposit/deposit-page/deposit-page.component';
import { WithdrawPageComponent } from './components/wallet/withdraw/withdraw-page/withdraw-page.component';
import { TransactionPageComponent } from './components/wallet/transaction/transaction-page/transaction-page.component';
import { WishlistPageComponent } from './components/wishlist/wishlist-page/wishlist-page.component';
import { AllfundsComponent } from './components/allfunds/allfunds.component';
import { AllfundsdetailComponent } from './components/allfundsdetail/allfundsdetail.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { InvestNowComponent } from './components/invest-now/invest-now.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuyingComponent } from './components/buying/buying.component';
import { SipComponent } from './components/sip/sip.component';
import { combineLatest } from 'rxjs';

const routes: Routes = [
  // {path:'',component:AllfundsComponent},
  
  // {path:'wallet',
  // children:[
  //   {path:'',component:WalletComponent,},
   
  // ]},
  // {path:'wishlist',component:WishlistPageComponent},
  // {path:'allfundsdetail',component:AllfundsdetailComponent},
  // {path:'allfundsdetail/:id',component:AllfundsdetailComponent}
  
  //Balaran
  // {path:'',component:HomepageComponent},
  // {path:'login',component:LoginComponent},
  // {path:'register', component:RegisterComponent},
  // { path:'currency-converter', component:CurrencyConverterComponent},
  //  {path:'search-box',component:SearchBoxComponent}

  //Shivam
  {path:'',component:HomepageComponent},
  {path:'dashboard', component: DashboardHomeComponent},
  {path: 'wallet', component: WalletComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'InvestNow', component: InvestNowComponent},
  {path: 'account-details', component: AccountDetailsComponent},
  {path: 'navbar', component: NavbarComponent},
  {path:'sip',component:SipComponent},
  {path:'buying',component:BuyingComponent}
  
 //SHubham
//  {path: '', component: MfpageComponen},

// {path: 'buying', component: BuyingComponent},
// {path:'sip',component:SipComponent},

//   {path: 'wishlist', component: WishlistComponent},

//   {path: 'redeem', component: RedeemComponent}
  
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
