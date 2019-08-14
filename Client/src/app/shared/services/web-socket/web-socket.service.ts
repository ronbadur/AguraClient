import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import * as socketIo from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket;

  constructor() {
    this.socket = socketIo();
  }

  sendUserID(id: string) {
    this.socket.emit('sendUser', id);
  }

  public newMessage = () => {
    return Observable.create((observer) => {
      this.socket.on('newMessage', (message) => {
        observer.next(message);
      });
    });
  }

}
