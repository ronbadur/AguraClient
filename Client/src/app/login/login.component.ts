import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SideNavStatusService} from "../shared/services/side-nav-status/side-nav-status.service";
import {UserService} from '../shared/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  login(): void {
    this.userService.login(this.username, this.password).subscribe((data) => {
      const isLoginSucceed = (data as any).success;
      if (isLoginSucceed) {
        this.userService.changeUserLoggedInStatus();
        this.userService.setUsername((data as any).user.username);
        this.router.navigate(['home']);
      } else {
        alert('Invalid credentials');
      }
    });
  }
}
