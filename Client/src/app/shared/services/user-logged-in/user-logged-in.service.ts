import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedInService {
  isUserLoggedIn = false;

  constructor() { }

  changeUserLoggedInStatus() {
    this.isUserLoggedIn = !this.isUserLoggedIn;
    console.log('Status changed - ' + this.isUserLoggedIn);
  }

  getUserLoggedInStatus() {
    return this.isUserLoggedIn;
  }
}
