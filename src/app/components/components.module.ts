import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IncrementableComponent } from "./incrementable/incrementable.component";
import { GraphicDonutComponent } from "./graphic-donut/graphic-donut.component";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [IncrementableComponent, GraphicDonutComponent],
  exports: [IncrementableComponent, GraphicDonutComponent],
  imports: [CommonModule, FormsModule, ChartsModule],
})
export class ComponentsModule { }
