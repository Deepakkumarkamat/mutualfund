import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AllfundsdetailComponent } from './allfundsdetail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { CanvasJSChart } from 'src/assets/canvasjs.angular.component';
// import * as CanvasJSAngularChart from './assets/canvasjs.angular.component.ts';
// var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

describe('AllfundsdetailComponent', () => {
  let component: AllfundsdetailComponent;
  let fixture: ComponentFixture<AllfundsdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule,FormsModule],
      declarations: [ AllfundsdetailComponent,CanvasJSChart]
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
