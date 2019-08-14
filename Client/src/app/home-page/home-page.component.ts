import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../shared/services/web-socket/web-socket.service';
import {UserService} from '../shared/services/user/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  constructor(private socketService: WebSocketService, private userService: UserService) { }

  ngOnInit() {
    this.socketService.sendUserID(this.userService.getUsername());
    this.socketService.newMessage().subscribe((message) => {
      alert('You have new message');
    });
  }

}
