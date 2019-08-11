import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavStatusService {
  isSideNavOpen = false;

  constructor() { }

  changeSideNavStatus() {
    this.isSideNavOpen = !this.isSideNavOpen;
    console.log('Status changed - ' + this.isSideNavOpen);
  }

  getSideNavStatus() {
    return this.isSideNavOpen;
  }
}
