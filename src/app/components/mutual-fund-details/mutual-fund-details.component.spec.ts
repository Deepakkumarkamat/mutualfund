import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFundDetailsComponent } from './mutual-fund-details.component';

describe('MutualFundDetailsComponent', () => {
  let component: MutualFundDetailsComponent;
  let fixture: ComponentFixture<MutualFundDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutualFundDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutualFundDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
