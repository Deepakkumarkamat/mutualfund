import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarifyotpComponent } from './varifyotp.component';

describe('VarifyotpComponent', () => {
  let component: VarifyotpComponent;
  let fixture: ComponentFixture<VarifyotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarifyotpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarifyotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
