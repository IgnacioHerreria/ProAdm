import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-incrementable",
  templateUrl: "./incrementable.component.html",
  styles: []
})
export class IncrementableComponent implements OnInit {
  @ViewChild('txtProgress', { static: false }) txtProgress: ElementRef;
  @Input() btnClass: string = "btn btn-danger"
  @Input("name") legend: string = "Leyenda";
  @Input() progress: number = 20;
  @Output("updateValue") changeValueProgress: EventEmitter<number> = new EventEmitter();

  constructor() {
  }
  ngOnInit() {
  }

  changeValue(valor: number) {
    if (this.progress <= 0 && valor < 0) return;
    if (this.progress >= 100 && valor > 0) return;
    this.progress += valor;

    this.changeValueProgress.emit(this.progress);
  }

  onChange(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    this.txtProgress.nativeElement.value = this.progress;
    this.changeValueProgress.emit(this.progress);
    this.txtProgress.nativeElement.focus();
  }
}
