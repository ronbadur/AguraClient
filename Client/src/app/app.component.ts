import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SideNavStatusService} from './shared/services/side-nav-status/side-nav-status.service';
import {Router} from "@angular/router";
import {UserService} from "./shared/services/user/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'agura';

  constructor(private router: Router, private sideNavStatusService: SideNavStatusService, private userLoggedInStatus: UserService) {
  }

  ngOnInit() {
  }

  logout() {
    this.userLoggedInStatus.changeUserLoggedInStatus();
    this.router.navigate(['']);
  }
}
