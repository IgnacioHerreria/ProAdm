import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styles: []
})
export class ProgressComponent implements OnInit {
  progressOne: number = 80;
  progressTwo: number = 20;
  constructor() { }

  ngOnInit() { }

  get getPercent() {
    return `${this.progressOne}%`;
  }
}
