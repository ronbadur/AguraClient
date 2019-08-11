import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SideNavStatusService} from "../shared/services/side-nav-status/side-nav-status.service";
import {UserLoggedInService} from "../shared/services/user-logged-in/user-logged-in.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router, private userLoggedInService: UserLoggedInService) { }

  ngOnInit() {
  }

  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.userLoggedInService.changeUserLoggedInStatus();
      this.router.navigate(['home']);
    } else {
      alert('Invalid credentials');
    }
  }
}
