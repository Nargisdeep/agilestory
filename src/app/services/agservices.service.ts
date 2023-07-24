import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgservicesService {

  constructor(private http:HttpClient) { }


  postUser(name:string,myemail:string,mobile:number,password:string){
    return this.http.post(`http://localhost:3000/users/userpost`,{
      name,myemail,mobile,password
    })
  }
  emailSignin(email:string){
    return this.http.post(`http://localhost:3000/users/emailsignin`,{
      email
    })
  }
  otpVerify(otp:number){
    console.log(otp)
    return this.http.post(`http://localhost:3000/users/otpverify`,{
      otp
    })
  }
  signIn(email:string,password:string){
    return this.http.post(`http://localhost:3000/users/signin`,{
      email,password
    })
  }
  postfeatures(product_idea:string){
    return this.http.post(`http://localhost:8000/api/features`,{
      product_idea
    })
  }
  postStory(product_idea:string,feature_idea:string){
    return this.http.post(`http://localhost:8000/api/story`,{
      product_idea,feature_idea
    })
  }
}
