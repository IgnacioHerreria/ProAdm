import { RxjsComponent } from "./rxjs/rxjs.component";
import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { GraphicsComponent } from "./graphics/graphics.component";
import { AccountSettingsComponent } from "../account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";

const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        data: { title: "Dashboard" }
      },
      {
        path: "progress",
        component: ProgressComponent,
        data: { title: "Progress" }
      },
      {
        path: "graphics",
        component: GraphicsComponent,
        data: { title: "Graphics" }
      },
      {
        path: "promesas",
        component: PromesasComponent,
        data: { title: "Promises" }
      },
      { path: "rxjs", component: RxjsComponent, data: { title: "RxJs" } },
      {
        path: "accountSettings",
        component: AccountSettingsComponent,
        data: { title: "Settings Account" }
      },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
