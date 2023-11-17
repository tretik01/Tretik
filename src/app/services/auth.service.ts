import {Injectable} from '@angular/core';
import {IUser} from "../models/user";
import {users} from "../data";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean = false
  users :IUser[] =[]

  constructor() {
  }

  setAuth(user: string) {
    localStorage.setItem('user', user)
    this.isAuth = true
  }

  checkAuth() {
    this.isAuth = !!localStorage.getItem('user');
    return this.isAuth
  }
  removeAuth() {
    localStorage.removeItem('user')
    this.isAuth = false
  }
  setUsers(){
    if(!localStorage.getItem('users')){
      localStorage.setItem('users',JSON.stringify(users))
    }
      // @ts-ignore
      this.users = JSON.parse(localStorage.getItem("users"))
  }
  addNewUser(user:IUser){
    this.users.push(user)
    localStorage.setItem('users',JSON.stringify(this.users))
  }

}
