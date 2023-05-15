import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { DepositPageComponent } from './components/wallet/deposit/deposit-page/deposit-page.component';
import { WithdrawPageComponent } from './components/wallet/withdraw/withdraw-page/withdraw-page.component';
import { TransactionPageComponent } from './components/wallet/transaction/transaction-page/transaction-page.component';
import { WishlistPageComponent } from './components/wishlist/wishlist-page/wishlist-page.component';
import { WishlistpageService } from './services/wishlistpage.service';
import { AllfundsComponent } from './components/allfunds/allfunds.component';
import {HttpClientModule}  from '@angular/common/http';
import { AllfundsdetailComponent } from './components/allfundsdetail/allfundsdetail.component';
import { FooterComponent } from './components/footer/footer.component'
import { WalletService } from './services/wallet.service';
import { ApiService } from './services/api.service';
import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component'
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    WalletComponent,
    DepositPageComponent,
    WithdrawPageComponent,
    TransactionPageComponent,
    WishlistPageComponent,
    AllfundsComponent,
    AllfundsdetailComponent,
    FooterComponent,
    CanvasJSChart,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WishlistpageService,
  WalletService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
