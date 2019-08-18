import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { FormsModule } from "@angular/forms";
//SERVICES
import { ServiceModule } from "./services/service.module";

//ROUTES
import { APP_ROUTES } from "./app.routes";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./login/register.component";
import { PagesModule } from "./pages/pages.module";

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  providers: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
