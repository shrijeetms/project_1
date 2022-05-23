import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from './entiry/User';
const url="http://localhost:3000/user"
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  createUser(user :{name:string,age:number,gender:string,
  lname:string,address:string,state:string,country:string,
phone:number,pincode:number,dob:Date}){
    return this.http.post(url,user)
  }
  delete(user:any){
    return this.http.delete(url+user.id);
  }
  getUsers(){
    return this.http.get(url)
  }

  
  constructor(public http:HttpClient) { }
}
