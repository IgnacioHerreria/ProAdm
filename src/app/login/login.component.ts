import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

declare function plugsInit();
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(public _router: Router) {}

  ngOnInit() {
    plugsInit();
  }

  singIn() {
    console.log("ingresando");
    this._router.navigate(["/dashboard"]);
  }
}
