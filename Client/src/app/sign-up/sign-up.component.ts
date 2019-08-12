import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/services/user/user.service';
import {Router} from '@angular/router';
import {User} from '../shared/models/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {

  private userDetails: User = {} as User;

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {
  }

  public handleAddressChange(city) {
    this.userDetails.city = city.formatted_address;
  }

  addUser() {
    this.userService.createUser(this.userDetails).subscribe((data) => {
      this.userService.changeUserLoggedInStatus();
      this.userService.setUsername(this.userDetails.username);
      this.router.navigate(['/home']);
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
