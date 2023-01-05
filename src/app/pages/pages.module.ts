import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { GraphicsComponent } from "./graphics/graphics.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { SharedModule } from "../shared/shared.modules";

// TEMP
import { FormsModule } from "@angular/forms";
import { IncrementableComponent } from "../components/incrementable/incrementable.component";
import { ChartsModule } from "ng2-charts";
import { GraphicDonutComponent } from "../components/graphic-donut/graphic-donut.component";
import { AccountSettingsComponent } from "../account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { PagesRoutingModule } from './pages.routes';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraphicsComponent,
    IncrementableComponent,
    GraphicDonutComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraphicsComponent
  ],
  imports: [SharedModule, PagesRoutingModule, FormsModule, ChartsModule]
})
export class PagesModule { }
