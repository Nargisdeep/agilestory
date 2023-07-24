import { Component } from '@angular/core';
import {FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms'
import { ConfirmPasswordValidator } from '../validator/confirm-password.validator';
import { AgservicesService } from '../services/agservices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  signin1!:FormGroup
  submitted:boolean=false
  emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  constructor(private formBuilder:FormBuilder,
              private AgService:AgservicesService,
              private router:Router){}
  ngOnInit(){
    this.signin1=this.formBuilder.group({
      myemail:new FormControl('',[Validators.required,Validators.pattern(this.emailRegex)]),
      password:new FormControl('',[Validators.required])
    })
  }

  signin(){
    console.log("hello")
    this.submitted=true
    console.log(this.signin1.value)
    if(this.signin1.valid){
           this.AgService.signIn(this.signin1.value.email,this.signin1.value.password).subscribe((response:any)=>{
            if(response.status){
              console.log(response)
              localStorage.setItem("logger",JSON.stringify(response))
              this.router.navigate(['home'])
            }
           })
    }
  }
  get err(){
    console.log(this.signin1.controls)
     return this.signin1.controls
  
  }
  

}
