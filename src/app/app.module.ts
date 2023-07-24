import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { EmailsigninComponent } from './emailsignin/emailsignin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OnetimepasscodeComponent } from './onetimepasscode/onetimepasscode.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProductideaComponent } from './productidea/productidea.component';
import { IdeaComponent } from './idea/idea.component';
import { UserstoryComponent } from './userstory/userstory.component';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EmailsigninComponent,
    OnetimepasscodeComponent,
    SigninComponent,
    ProductideaComponent,
    IdeaComponent,
    UserstoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule, 
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
