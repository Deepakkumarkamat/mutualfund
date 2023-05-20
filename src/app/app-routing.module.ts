import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { WalletComponent } from './components/wallet/wallet.component';

import { HomepageComponent } from './components/homepage/homepage.component';

import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { InvestNowComponent } from './components/invest-now/invest-now.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuyingComponent } from './components/buying/buying.component';
import { SipComponent } from './components/sip/sip.component';
import { AllfundsdetailComponent } from './components/allfundsdetail/allfundsdetail.component';
import { AllfundsComponent } from './components/allfunds/allfunds.component';
import { WishlistPageComponent } from './components/wishlist/wishlist-page/wishlist-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MutualFundDetailsComponent } from './components/mutual-fund-details/mutual-fund-details.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { AuthGuard } from './services/auth.guard';
// import { combineLatest } from 'rxjs';

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

  // //Shivam

  {path:'dashboard', component: DashboardHomeComponent,canActivate:[AuthGuard]},
  {path: 'dashboard/wallet', component: WalletComponent,canActivate:[AuthGuard]},
  {path: 'portfolio', component: PortfolioComponent,canActivate:[AuthGuard]},
  {path: 'investNow', component: InvestNowComponent,canActivate:[AuthGuard]},
  {path: 'account-details', component: AccountDetailsComponent,canActivate:[AuthGuard]},
  {path: 'navbar', component: NavbarComponent},
  {path:'dashboard/allfundsdetail/:id/sip',component:SipComponent},
  {path:'dashboard/allfundsdetail/:id/buying', component:BuyingComponent},
  {path:'allfundsdetail',component:AllfundsdetailComponent},
  {path:'dashboard/allfundsdetail/:id',component:AllfundsdetailComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'dashboard/investnow', component: InvestNowComponent},
  {path: 'dashboard/portfolio', component: PortfolioComponent},
  {path: 'dashboard/account-details', component: AccountDetailsComponent},
  {path:'wishlist',component:WishlistPageComponent},
  {path:'homepage/mutual-funds/:schemaId',component:MutualFundDetailsComponent},
  {path:'thankyou',component:ThankyouComponent},
  {path:'',component:HomepageComponent},
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
