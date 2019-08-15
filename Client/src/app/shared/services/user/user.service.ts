import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from "../../models/User";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLoggedIn = window.location.pathname !== '/' ? true : false;
  username: string;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.get(`http://localhost:3000/api/users/${username}/${password}`);
  }

  createUser(user: User) {
    return this.http.post(environment.serverUrl + `/api/users/`, user);
  }

  getAllUsers() {
    return this.http.get(environment.serverUrl + `/api/users`);
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

  getUsername() {
    if (!this.username) {
      return this.getCookieData('connectedUser');
    }

    return  this.username;
  }


  getCookieData(name) {
    var pairs = document.cookie.split("; "),
      count = pairs.length, parts;
    while (count--) {
      parts = pairs[count].split("=");
      if (parts[0] === name)
        return parts[1];
    }
    return false;
  }
}
