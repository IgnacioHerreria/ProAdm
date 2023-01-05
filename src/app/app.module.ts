import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { FormsModule } from "@angular/forms";
//SERVICES
import { ServiceModule } from "./services/service.module";

//ROUTES
import { APP_ROUTES } from "./app.routes";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";
import { PagesModule } from "./pages/pages.module";
import { RegisterComponent } from "./auth/register/register.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

@NgModule({
  declarations:
    [
      AppComponent,
      LoginComponent,
      RegisterComponent,
      PagenotfoundComponent
    ],
  providers: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
