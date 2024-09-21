import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  data:any;

  constructor(private service:UserService){

  }
  ngOnInit(): void {
    
    this.service.getUser().subscribe((response)=>{
      this.data=response;
    })
  }

  

  

}
