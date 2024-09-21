import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl="http://localhost:8080/"
  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get(this.baseUrl+"users")
  }

  addUser(user:User):Observable<any>{
    return this.http.post(this.baseUrl+"addUser",user)
  }


}
