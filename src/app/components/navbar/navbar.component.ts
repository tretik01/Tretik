import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public authService: AuthService,private router:Router,private location: Location) {

  }
  logOut(){
    if(this.location.path() ==='/profile'){
      this.router.navigate(['/'])
    }
    this.authService.removeAuth()
  }
}
