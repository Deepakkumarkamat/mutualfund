import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Searchbox2Component } from './searchbox2.component';

describe('Searchbox2Component', () => {
  let component: Searchbox2Component;
  let fixture: ComponentFixture<Searchbox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Searchbox2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Searchbox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
