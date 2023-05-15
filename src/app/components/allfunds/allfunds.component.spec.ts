import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AllfundsComponent } from './allfunds.component';
// import {CanvasJSChart} from 'assets/canvasjs.angular.component.ts'
// import * as CanvasJSAngularChart from './assets/canvasjs.angular.component.ts';
// var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
describe('AllfundsComponent', () => {
  let component: AllfundsComponent;
  let fixture: ComponentFixture<AllfundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports :[HttpClientTestingModule],
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
