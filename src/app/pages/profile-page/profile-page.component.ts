import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit{
  user = localStorage.getItem('user')
  folowers = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if(!this.authService.isAuth){
      this.router.navigate(['/login'])
    }
  }
}
