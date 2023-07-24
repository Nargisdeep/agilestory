import { Component } from '@angular/core';
import {FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { AgservicesService } from '../services/agservices.service';

@Component({
  selector: 'app-onetimepasscode',
  templateUrl: './onetimepasscode.component.html',
  styleUrls: ['./onetimepasscode.component.scss']
})
export class OnetimepasscodeComponent {

  otp!:FormGroup
  submitted:boolean=false
  error:any
  constructor(private formbuilder:FormBuilder,
    private router:Router,
    private agservice:AgservicesService){

  }
  ngOnInit(){

    this.otp=this.formbuilder.group({
       otp:new FormControl('',[Validators.required])
    })
  }
  verify(){
    this.submitted=true
    if(this.otp.valid){
      console.log(this.otp.value)
      this.agservice.otpVerify(this.otp.value.otp).subscribe((response:any)=>{
        console.log(response)
        if(response.status){
          console.log("hello")
          this.router.navigate(['productidea'])
        }
      },(error:any)=>{
        this.error=error
        console.log(this.error)
      })

    }

  }
  get err(){
     return this.otp.controls
  
  }

}
