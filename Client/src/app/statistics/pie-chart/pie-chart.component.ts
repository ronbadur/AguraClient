import { Component, OnInit, HostListener, ɵConsole } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.less']
})
export class PieChartComponent implements OnInit {

  width: number = 0;
  height: number = 500;

  private margin = {top: 0, right: 0, bottom: 0, left: 0};
  private radius: number;

  private arc: any;
  private labelArc: any;
  private pie: any;
  private color: any;
  private svg: any;


   data: any[] = [
    {category: "Phones", amount: 3},
    {category: "Furniture", amount: 3},
    {category: "Computers", amount: 2},
    {category: "Garden", amount: 4},
  ];

  colors: Array<string> = [
    "#2ecc71", 
    "#e74c3c",
    "#3498db", 
    "#f1c40f", 
  ];

  constructor() {
  }

  ngOnInit() {
      this.drawGraph();
  }

  private drawGraph() {
      d3.select("svg.pie").selectAll("g").remove();
      this.initSvg()
      this.drawPie();
  }

  private initSvg() {
      if(window.innerWidth > 768) {
          this.width = window.innerWidth / 2 - 20;
      } else {
          this.width = window.innerWidth - 20;
      }    
      d3.select("svg.pie").attr("width", this.width);
      d3.select("svg.pie").attr("height", this.height);
      this.width -= this.margin.left + this.margin.right ;
      this.height -= this.margin.top + this.margin.bottom;
      this.radius = Math.min(this.width, this.height) / 2;

      this.color = d3Scale.scaleOrdinal()
          .range(this.colors);
      this.arc = d3Shape.arc()
          .outerRadius(this.radius - 10)
          .innerRadius(0);
      this.labelArc = d3Shape.arc()
          .outerRadius(this.radius - 150)
          .innerRadius(this.radius);
      this.pie = d3Shape.pie()
          .sort(null)
          .value((d: any) => d.amount);
      this.svg = d3.select("svg.pie")
          .append("g")
          .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");;
  }

  private drawPie() {
      let g = this.svg.selectAll(".arc")
          .data(this.pie(this.data))
          .enter().append("g")
          .attr("class", "arc");
      g.append("path").attr("d", this.arc)
          .style("fill", (d: any) => this.color(d.data.category) );
      g.append("text").attr("transform", (d: any) => "translate(" + this.labelArc.centroid(d) + ")")
          .attr("dy", ".35em")
          .text((d: any) => d.data.category);
  }

  @HostListener('window:resize') onResize() {
      if(window.innerWidth > 768) {
          this.width = window.innerWidth / 2 - 20;
          this.height = 500;
      } else {
          this.width = window.innerWidth - 20;
          this.height = 500;
      }
      this.drawGraph();
  }

  


}