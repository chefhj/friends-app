import {Component, Input} from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-friend-bar-graphs',
  templateUrl: './friend-bar-graphs.component.html',
  styleUrls: ['./friend-bar-graphs.component.scss']
})
export class FriendBarGraphsComponent {

  @Input() set data(data: any) {
    if (data) {
      this.clearSVG();
      this.createSvg();
      // this.drawBars(data, 'name', 'weight', 700);
      this.drawBars(data, 'name', 'age', 100);
    }
  };
  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 500 - (this.margin * 2);

  ngOnInit() {

  }

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[], xAttribute: string, yAttribute: string, scale: number): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d?.[xAttribute]))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end")
      .style('font-size', '8px');

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, scale])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d:any) => x(d?.[xAttribute]))
      .attr("y", (d: any) => y(d?.[yAttribute]))
      .attr("width", x.bandwidth())
      .attr("height", (d: any) => this.height - y(d?.[yAttribute]))
      .attr("fill", "#673ab7");
  }
  private clearSVG() {
    d3.select("figure#bar")
      .selectAll('svg').remove();
  }
}
