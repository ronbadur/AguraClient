import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
selector: 'app-logo',
templateUrl: './logo.component.html',
styleUrls: ['./logo.component.less']
})


export class LogoComponent implements AfterViewInit {

@ViewChild('visualization') visualization: ElementRef;
@ViewChild('img') img: ElementRef;

private context: CanvasRenderingContext2D;
private element: HTMLImageElement;

src: string;
imgWidth: number;
imgHeight: number;

constructor() {
  this.imgWidth = 400;
  this.imgHeight = 400;
  //this.src = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
  this.src = '../assets/media/Agura Logo.png';
}

ngAfterViewInit() {
  this.context = this.visualization.nativeElement.getContext("2d");
  this.element = this.img.nativeElement;
}


afterLoading() {
  this.context.clearRect(0, 0, this.imgWidth, this.imgHeight);
  console.log('drawImage');
  // this prints an image element with src I gave
  console.log(this.element);
  this.context.drawImage(this.element, 0, 0, this.imgWidth, this.imgHeight);
}
}

