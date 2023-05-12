import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfundsComponent } from './allfunds.component';

describe('AllfundsComponent', () => {
  let component: AllfundsComponent;
  let fixture: ComponentFixture<AllfundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllfundsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllfundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
