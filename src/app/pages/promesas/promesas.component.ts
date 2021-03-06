import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-promesas",
  templateUrl: "./promesas.component.html",
  styles: []
})
export class PromesasComponent implements OnInit {
  constructor() {
    let promesa = new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador++;
        console.log(contador);

        if (contador === 3) {
          resolve("ok");
          // reject();
          clearInterval(intervalo);
        }
      }, 1000);
    });

    promesa
      .then(msj => console.log("Termino", msj))
      .catch(error => console.log("error", error));
  }

  ngOnInit() {}
}
