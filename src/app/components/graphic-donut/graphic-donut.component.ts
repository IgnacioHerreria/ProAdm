import { Component, OnInit, Input } from "@angular/core";
import { ChartType } from "chart.js";
import { MultiDataSet, Label } from "ng2-charts";

@Component({
  selector: "app-graphic-donut",
  templateUrl: "./graphic-donut.component.html",
  styles: []
})
export class GraphicDonutComponent implements OnInit {


 @Input('label') doughnutChartLabels: Label[] = [
    "Download Sales",
    "In-Store Sales",
    "Mail-Order Sales"
  ];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70]
  ];
  @Input('type') doughnutChartType: ChartType = "doughnut";

  
  constructor() {}

  ngOnInit() {}
}
