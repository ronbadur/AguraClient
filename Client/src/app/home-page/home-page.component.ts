import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var c = document.getElementById("myCanvas");
    /*
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Agura",10,50);
    */
  }

}
