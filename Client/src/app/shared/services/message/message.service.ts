import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }


  getMessagesByUser(username: string) {
    return this.http.get(environment.serverUrl + `/api/messages/byUser/${username}`);
  }
}
