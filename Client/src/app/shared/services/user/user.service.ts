import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLoggedIn = false;
  username: string;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.get(`http://localhost:3000/api/users/${username}/${password}`);
  }

  changeUserLoggedInStatus() {
    this.isUserLoggedIn = !this.isUserLoggedIn;
  }

  getUserLoggedInStatus() {
    return this.isUserLoggedIn;
  }

  setUsername(username: string) {
    this.username = username;
  }
}
