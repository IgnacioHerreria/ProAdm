import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscriber, Subscription } from "rxjs";
import { retry, map, filter } from "rxjs/operators";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() {
    this.subscription = this.getCountObservable().subscribe(
      numero => console.log("Subscription", numero),
      error => error.log("Error", error),
      () => console.info("Subscription Finalizada")
    );
  }

  ngOnInit() { }
  ngOnDestroy() {
    console.log("Subscription finalized");
    this.subscription.unsubscribe();
  }

  getCountObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador++;
        const salida = {
          valor: contador
        };
        observer.next(salida);

        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }
      }, 1000);
    }).pipe(
      map(resp => resp.valor),
      filter((valor, index) => {
        if (valor % 2 === 1) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
