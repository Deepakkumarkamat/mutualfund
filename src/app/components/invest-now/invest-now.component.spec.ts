import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestNowComponent } from './invest-now.component';

describe('InvestNowComponent', () => {
  let component: InvestNowComponent;
  let fixture: ComponentFixture<InvestNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestNowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
