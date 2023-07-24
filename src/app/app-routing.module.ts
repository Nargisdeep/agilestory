import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { LoginComponent } from './login/login.component';
import { EmailsigninComponent } from './emailsignin/emailsignin.component';
import { OnetimepasscodeComponent } from './onetimepasscode/onetimepasscode.component';
import { SigninComponent } from './signin/signin.component';
import { ProductideaComponent } from './productidea/productidea.component';
import { IdeaComponent } from './idea/idea.component';
import { UserstoryComponent } from './userstory/userstory.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },
  {
      path:"home",
      component:HomeComponent
  },{
    path:"login",
    component:LoginComponent
  },
  {
    path:"emailsignin",
    component:EmailsigninComponent
  },
  {
     path:"otp",
     component:OnetimepasscodeComponent
  },{
    path:"signin",
    component:SigninComponent
  },
  {
    path:"productidea",
    component:ProductideaComponent
  },{
    path:"idea",
    component:IdeaComponent
  },{
    path:"userstory/:feature",
    component:UserstoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
