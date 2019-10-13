import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { GraphicsComponent } from "./graphics/graphics.component";
import { AccountSettingsComponent } from '../account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';


const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "progress", component: ProgressComponent },
      { path: "graphics", component: GraphicsComponent },
      { path: "promesas", component: PromesasComponent },
      { path: "accountSettings", component: AccountSettingsComponent },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);