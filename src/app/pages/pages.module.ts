import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { GraphicsComponent } from "./graphics/graphics.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { SharedModule } from "../shared/shared.modules";
import { PAGES_ROUTES } from "./pages.routes";

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraphicsComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraphicsComponent
  ],
  imports: [SharedModule, PAGES_ROUTES]
})
export class PagesModule {}
