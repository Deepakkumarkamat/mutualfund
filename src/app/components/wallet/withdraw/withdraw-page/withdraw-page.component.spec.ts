import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WithdrawPageComponent } from './withdraw-page.component';
import { FormsModule } from '@angular/forms';

describe('WithdrawPageComponent', () => {
  let component: WithdrawPageComponent;
  let fixture: ComponentFixture<WithdrawPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,FormsModule],
      declarations: [ WithdrawPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
