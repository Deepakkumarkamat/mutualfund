import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { Router } from '@angular/router';
@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent {
  options: AnimationOptions = {
    path: '../../../assets/104368-thank-you.json',
    autoplay: true,
    loop:false,
    // initialSegment: [80, 0],
  };
  constructor(private router:Router){

  }
  animationCreated(animationCreated: AnimationItem) {
    console.log('animation crated');
    console.log(animationCreated);
    animationCreated.play();
    animationCreated.addEventListener('complete',()=>{
      this.router.navigate(['/dashboard'])
    })
    // animationCreated.setDirection(-1)

  }
}
