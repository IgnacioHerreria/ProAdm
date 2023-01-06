import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { GraphicsComponent } from "./graphics/graphics.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { SharedModule } from "../shared/shared.modules";

// TEMP
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { PagesRoutingModule } from "./pages.routing";
import { ComponentsModule } from "../components/components.module";

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraphicsComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraphicsComponent,
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
    ComponentsModule,
  ],
})
export class PagesModule { }
