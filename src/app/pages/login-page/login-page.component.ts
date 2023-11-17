import {Component} from '@angular/core';
import {IUser} from "../../models/user";
import {users} from "../../data";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginDate: IUser = {
    login: '',
    password: ''
  }
  loginStatus = {
    attempt: false,
    status: false
  }

  constructor(private authService: AuthService, private router: Router) {
  }

  handleSubmit(event: any) {
    event.preventDefault()
    const currentUser = this.authService.users.find(el => el.login === this.loginDate.login && el.password === this.loginDate.password)
    if (currentUser) {
      this.authService.setAuth(this.loginDate.login)
      this.loginDate = {
        login: '',
        password: ''
      }
      this.loginStatus = {
        attempt: true,
        status: true
      }
      setTimeout(() => {
        this.router.navigate(['/profile'])
      }, 1000)
    } else {
      this.loginStatus = {
        attempt: true,
        status: false
      }
    }
  }
}
