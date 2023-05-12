import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfundsdetailComponent } from './allfundsdetail.component';

describe('AllfundsdetailComponent', () => {
  let component: AllfundsdetailComponent;
  let fixture: ComponentFixture<AllfundsdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllfundsdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllfundsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
