import { Component } from '@angular/core';
import {FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { AgservicesService } from '../services/agservices.service';

@Component({
  selector: 'app-emailsignin',
  templateUrl: './emailsignin.component.html',
  styleUrls: ['./emailsignin.component.scss']
})
export class EmailsigninComponent {
  emailsignin!:FormGroup
  submitted:boolean=false
  emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  error:any
  constructor(private formbuilder:FormBuilder,
              private router:Router,
              private agService:AgservicesService){

  }
  ngOnInit(){

    this.emailsignin=this.formbuilder.group({
       email:new FormControl('',[Validators.required,Validators.pattern(this.emailRegex)])
    })
  }

  start(){
    this.submitted=true
    if(this.emailsignin.valid){
      console.log(this.emailsignin.value)
      this.agService.emailSignin(this.emailsignin.value.email).subscribe((response:any)=>{
        console.log(response)
        if(response.status){
          console.log(response)
          this.router.navigate(['otp'])
        }
      }),
      (error:any)=>{
        console.log(this.error)
      }
      
    
    }
  }

  get err(){
    console.log(this.emailsignin.controls)
     return this.emailsignin.controls
  }

}
