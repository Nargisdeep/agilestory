import { Component } from '@angular/core';
import {FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { AgservicesService } from '../services/agservices.service';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent {

  idea!:FormGroup
  notdone:boolean=true
  done:boolean=false
  submitted:boolean=false
  error:any
  product_idea1:string=''
  feature!:FormGroup
  featureArrray:Array<string>=[]
  constructor(private formbuilder:FormBuilder,
    private router:Router,
    private agservice:AgservicesService){

  }
  ngOnInit(){

    this.idea=this.formbuilder.group({
       product_idea:new FormControl('',[Validators.required])
    })
    this.feature=this.formbuilder.group({
      feature_idea:new FormControl('',[Validators.required])
   })
  }
  postIdea(){
    this.submitted=true
    if(this.idea.valid){
      this.product_idea1=this.idea.value.product_idea
      this.agservice.postfeatures(this.idea.value.product_idea).subscribe((response:any)=>{
        console.log(response.data.length)
        this.featureArrray=response.data.split('-')
        this.featureArrray.shift()
        console.log(response)
        this.done=true

        this.notdone=false
      })
    }

  }
  postFeature(){
    this.submitted=true
    if(this.feature.valid){
      console.log(this.feature.value)
      this.router.navigate([`userstory/${this.product_idea1} & ${this.feature.value.feature_idea}`])
    }

  }

}
