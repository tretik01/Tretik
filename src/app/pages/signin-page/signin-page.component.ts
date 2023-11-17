import {Component} from '@angular/core';
import {IUser} from "../../models/user";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {users} from "../../data";

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent {
  loginDate = {
    login: '',
    password: '',
    checkPassword: ''
  }
  signStatus = {
    attempt: false,
    status: false
  }

  constructor(private authService: AuthService, private router: Router) {
  }

  handleSubmit(event: any) {
    event.preventDefault()


      if (this.loginDate.password !== this.loginDate.checkPassword || (this.loginDate.login.length < 1 || this.loginDate.password.length < 1)) {
        this.signStatus = {
          attempt: true,
          status: false
        }
        return
      }
    this.authService.addNewUser({
      login: this.loginDate.login,
      password: this.loginDate.password
    })

    this.authService.setAuth(this.loginDate.login)
    this.loginDate = {
      login: '',
      password: '',
      checkPassword: ''
    }
    this.signStatus = {
      attempt: true,
      status: true
    }
    setTimeout(() => {
      this.router.navigate(['/profile'])
    }, 1000)
  }
}
