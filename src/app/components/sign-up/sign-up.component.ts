import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent {
  pan :string = '';
  email:string = '';



requiredForm:FormGroup |any;

constructor(private pa:FormBuilder,private fb:FormBuilder){
  this.myPan();
  this.myEmail();
 
}

myPan(){
  this.requiredForm = this.pa.group({
    pan1:['',[Validators.required,
    Validators.pattern("/^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$")]]
  });
}

myEmail(){
  this.requiredForm = this.fb.group({
    email1:['',Validators.required]
  });
}
onCreate(){
  // console.log(this.pan);
  // console.log(this.email)
  
}


  // detail:any[] =[];
  // signupUser: any[] = [];
  // signObj: any = {
  //   pan: '',
  //   email: ''
  // }

  
  // submitted = false;

  // onSubmit(){
  //   this.submitted = true;

  // }

  


//   onCreate(){
    
//     this.signupUser.push(this.signObj);
//     localStorage.setItem('singUpUsers', JSON.stringify(this.signupUser));

//     this.signObj = {
//       pan: '',
//       email: ''
//     }
// }

// isValidCard(panCard: string | null){
//   let regex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
//   if (panCard == null){
//      return "false"
//   }

//   if (regex.test(panCard) == true){
//     return "true"
//   }
//   else{
//     return "false"
//   }
// }
// isvalid(): boolean{
//   const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
//   return panRegex.test(this.signObj.pan)
// }



}
