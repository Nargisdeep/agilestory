import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgservicesService } from '../services/agservices.service';

@Component({
  selector: 'app-userstory',
  templateUrl: './userstory.component.html',
  styleUrls: ['./userstory.component.scss']
})
export class UserstoryComponent {

  feature:string=""
  feature_idea:string=""
  product_idea:string=""
  userstory:string=""
  userstoryarr:Array<string>=[]

  constructor(private route:ActivatedRoute,
    private agservice:AgservicesService){

  }

  ngOnInit(){
    this.feature=this.route.snapshot.paramMap.get('feature')
    console.log(this.feature)
    this.product_idea=this.feature.split('&')[0]
    this.feature_idea=this.feature.split('&')[1]

    this.agservice.postStory(this.product_idea,this.feature_idea).subscribe((response:any)=>{
      console.log(response)
       this.userstory=response.data
       console.log(this.userstory)
       this.userstoryarr=this.userstory.split('.')
       this.userstoryarr.shift()
       console.log(this.userstoryarr)
    })
  }

}
