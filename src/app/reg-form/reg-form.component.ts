import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service'
import User from "../entiry/User"
import { MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
 
 
  flag :boolean=false;
  constructor(public registerService:RegisterService, private router: Router) { }
 
 
  user :User = new User();
 

   save(){

    const observable = this.registerService.createUser(this.user)
     observable.subscribe((Response:any)=>{
       console.log(Response);
     },
     function(error){
       console.log(error);
       alert("Try again, Something went wrong");
     }
     );
     console.log(""+this.user.name+this.user.age+this.user.gender)
     this.flag=true;
      this.router.navigate(['/thankyou']);
    
    }

    ngOnInit(): void {
    }
}
