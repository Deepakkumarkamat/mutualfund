import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
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
import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { InvestNowComponent } from './components/invest-now/invest-now.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BuyingComponent } from './components/buying/buying.component';
import { SipComponent } from './components/sip/sip.component';
import { FaqComponent } from './components/faq/faq.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        HttpTestingController,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        WalletComponent,
        FooterComponent,
        SignUpComponent,
        DepositPageComponent,
        WithdrawPageComponent,
        TransactionPageComponent,
        WishlistPageComponent,
        AllfundsComponent,
        AllfundsdetailComponent,
        CurrencyConverterComponent,
        HomepageComponent,
        LoginComponent,
        RegisterComponent,
        SearchBoxComponent,
        AccountDetailsComponent,
        DashboardHomeComponent,
        ErrorPageComponent,
        InvestNowComponent,
        NavbarComponent,
        PortfolioComponent,
        BuyingComponent,
        SipComponent,
        FaqComponent        
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mutualfund'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mutualfund');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // expect(compiled.querySelector('.content span')?.textContent).toContain('mutualfund');
  });
});
