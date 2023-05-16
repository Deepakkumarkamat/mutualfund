import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipComponent } from './sip.component';

describe('SipComponent', () => {
  let component: SipComponent;
  let fixture: ComponentFixture<SipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
