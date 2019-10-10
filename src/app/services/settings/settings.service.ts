import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  settings: Settings = {
    themeUrl: "assets/css/colors/default.css",
    theme: "default"
  };
  constructor(@Inject(DOCUMENT) private _document) {
    this.loadSettings();
  }

  saveSettings() {
    console.log("Save local storage");
    localStorage.setItem("settings", JSON.stringify(this.settings));
  }

  loadSettings() {
    if (localStorage.getItem("settings")) {
      this.settings = JSON.parse(localStorage.getItem("settings"));
      console.log("Load from local storage");
      this.setTheme(this.settings.theme);
    } else {
      console.log("Using default data");
    }
  }

  setTheme(theme: string) {
    let uri = `assets/css/colors/${theme}.css`;
    this._document.getElementById("theme").setAttribute("href", uri);
    this.settings.themeUrl = uri;
    this.settings.theme = theme;
    this.saveSettings();
  }
}
interface Settings {
  themeUrl: string;
  theme: string;
}
