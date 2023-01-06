import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

//SERVICES
import { ServiceModule } from "./services/service.module";

import { AppComponent } from "./app.component";
import { PagesModule } from "./pages/pages.module";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations:
    [
      AppComponent,
      PagenotfoundComponent
    ],
  providers: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ServiceModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
