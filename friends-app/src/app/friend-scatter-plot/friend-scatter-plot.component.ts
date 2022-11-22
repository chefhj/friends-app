import {Component, Input} from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-friend-scatter-plot',
  templateUrl: './friend-scatter-plot.component.html',
  styleUrls: ['./friend-scatter-plot.component.scss']
})
export class FriendScatterPlotComponent {
  @Input() set data(data: any) {
    if (data) {
      this.clearSVG();
      this.createSvg();
      this.drawPlot(data, 'age', 'weight', 100, 1000);
    }
  };
  table: any;
  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  ngOnInit() {

  }

  private createSvg(): void {
    this.svg = d3.select("figure#scatter")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private clearSVG() {
    d3.select("figure#scatter")
      .selectAll('svg').remove();
  }

  private drawPlot(data, xAttribute, yAttribute, xScale: number, yScale: number): void {
    // Add X axis
    const x = d3.scaleLinear()
      .domain([0, xScale])
      .range([ 0, this.width ]);
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, yScale])
      .range([ this.height, 0]);
    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Add dots
    const dots = this.svg.append('g');
    dots.selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", d => x(d?.[xAttribute]))
      .attr("cy", d => y(d?.[yAttribute]))
      .attr("r", 7)
      .style("opacity", .5)
      .style("fill", "#673ab7");

    // Add labels
    dots.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(d => d?.name)
      .attr("x", d => x(d?.[xAttribute]))
      .attr("y", d => y(d?.[yAttribute]))
      .style("fill", "white")
      .style("font-size", "12px")
  }
}
