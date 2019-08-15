import { Component, OnInit, ViewChild } from '@angular/core';
import { getMatInputUnsupportedTypeError } from '@angular/material';

@Component({
  selector: 'app-contact',
  /*template: `
  <div class='panel panel-primary'>
    <div class='panel-heading'>
        Bar
    </div>
    <div #myMap style='width: 500px; height: 500px;'></div> 
  </div>`
    ,*/
    templateUrl: './contact.component.html', 
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  @ViewChild('myMap') myMap; // using ViewChild to reference the div instead of setting an id
  public pageTitle: string = "Map";

  ngAfterViewInit(){  // after the view completes initializaion, create the map
    const  map = new Microsoft.Maps.Map(this.myMap.nativeElement, {
        credentials: 'Bing Map Key - I removed it here'
    
    });
    map.setView({
      // mapTypeId: Microsoft.Maps.MapTypeId.road,
     center: new Microsoft.Maps.Location(31.970575, 34.767812),
      zoom: 15
  });
    var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
    var layer = new Microsoft.Maps.Layer();
    layer.add(pushpin);
    map.layers.insert(layer);
  }
  ngOnInit(){

  }
}
