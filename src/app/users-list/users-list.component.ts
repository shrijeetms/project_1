import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service'
import User from "../entiry/User"

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[]=[]
  constructor(public registerService:RegisterService) { }

  ngOnInit(): void {
    const promise = this.registerService.getUsers();
    promise.subscribe((Response)=>{
      console.log(Response);
      this.users=Response as User[];
    })
  }

}
