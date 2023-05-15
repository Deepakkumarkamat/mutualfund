import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WalletComponent } from './wallet.component';
import { DepositPageComponent } from './deposit/deposit-page/deposit-page.component';
import { FormsModule } from '@angular/forms';

describe('WalletComponent', () => {
  let component: WalletComponent;
  let fixture: ComponentFixture<WalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports :[HttpClientTestingModule,FormsModule],
      declarations: [ WalletComponent,DepositPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
