import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SideNavStatusService} from './shared/services/side-nav-status/side-nav-status.service';
import {Router} from '@angular/router';
import {UserService} from './shared/services/user/user.service';
import { stringify } from '@angular/compiler/src/util';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'agura';
  weather: string;
  url = 'http://api.openweathermap.org/data/2.5/weather?q=jerusalem&APPID=65252e392715d7598a0c9c5ca14e4243&units=metric';


  constructor(private router: Router, private sideNavStatusService: SideNavStatusService, private userLoggedInStatus: UserService,private http: HttpClient) {
  }

  ngOnInit() {
  this.http.get(this.url).subscribe((data) => {
      this.weather = (data as any).main.temp;
  });
  }
}
