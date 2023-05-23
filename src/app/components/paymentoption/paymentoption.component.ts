import { Component } from '@angular/core';

@Component({
  selector: 'app-paymentoption',
  templateUrl: './paymentoption.component.html',
  styleUrls: ['./paymentoption.component.css']
})
export class PaymentoptionComponent {
  // constructor(){}
  // handler:any=null;
  // ngOnInit(){
  //   this.loadStripe();
  // }
  // pay(amount:any){
  //   var handler=(<any>window).StripeCheckout.configure({key:'pk_test_51NAThuSDNCAGUHvnoBCJRFTCre8lsvQb6ZG86m9ine3W7N98zqGkDqoBn5CNkIQV9CfWqsFJnDtz1QfeO4XDQRcx00jSoTCh9E',
  //   locale:'auto',
  //   token:function(token:any){

  //     console.log(token)
  //     alert('Token Created!!');
  //   }});
  //   handler.open({name:'DemoSite',description:'2widgets',amount:amount*100});
  // }loadStripe(){
  //   if(!window.document.getElementById('stripe-script')){
  //     var s=window.document.createElement("script");
  //     s.id="stripe-script";
  //     s.type="text/javascript";
  //     s.src="https://checkout.stripe.com/checkout.js";
  //     s.onload=()=>{
  //       this.handler=(<any>window).StripeCheckout.configure({
  //         key:'pk_test_51NAThuSDNCAGUHvnoBCJRFTCre8lsvQb6ZG86m9ine3W7N98zqGkDqoBn5CNkIQV9CfWqsFJnDtz1QfeO4XDQRcx00jSoTCh9E',
  //         locale:'auto',
  //         token:function(token:any){

  //           console.log(token)
  //           alert('PaymentSuccess!!');
  //         }});}
  //         window.document.body.appendChild(s);
  //       }}

}
