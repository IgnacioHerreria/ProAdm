import { Component, OnInit } from "@angular/core";
import { SettingsService } from '../../services/service.index';

@Component({
  selector: "app-account-settings",
  templateUrl: "./account-settings.component.html",
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  constructor(public _settings: SettingsService) {}

  ngOnInit() {
    this.setCheck();
  }

  changeTheme(theme: string, link: any) {
    this.setCheckColor(link);
    this._settings.setTheme(theme);
  }

  setCheckColor(link: any) {
    let selectors: any = document.getElementsByClassName("selector");
    for (let select of selectors) {
      select.classList.remove("working");
    }
    link.classList.add("working");
  }
  setCheck() {
    let selectors: any = document.getElementsByClassName("selector");
    let theme = this._settings.settings.theme;
    for (let select of selectors) {
      if (select.getAttribute("data-theme") === theme) {
        select.classList.add("working");
        break;
      }
    }
  }
}
