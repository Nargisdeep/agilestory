import { Component } from '@angular/core';
import {FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms'
import { ConfirmPasswordValidator } from '../validator/confirm-password.validator';
import { AgservicesService } from '../services/agservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  register!:FormGroup
  submitted:boolean=false
  emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  error:any
  constructor(private formBuilder:FormBuilder,private agService:AgservicesService){}

  ngOnInit(){
    this.register=this.formBuilder.group({
      name:new FormControl('',[Validators.required]),
      myemail:new FormControl('',[Validators.required,Validators.pattern(this.emailRegex)]),
      mobile:new FormControl('',[Validators.required,Validators.minLength(10)]),
      password:new FormControl('',[Validators.required]),
      repassword:new FormControl('',[Validators.required])
    },
      {
        validator: ConfirmPasswordValidator("password", "repassword")
      })
  }

  signUp(){
    console.log("hello")
    this.submitted=true
    console.log(this.register.value)
    if(this.register.valid){
      this.agService.postUser(this.register.value.name,this.register.value.myemail,this.register.value.mobile,this.register.value.password).subscribe((response:any)=>{
        if(response.status){
           console.log("added")
        }
      },
      (error:any)=>{
        console.log(this.error)
      })
    }
  }
  get err(){
    
     return this.register.controls
}
  

}
