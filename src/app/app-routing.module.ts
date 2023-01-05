import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthRoutingModule } from "./auth/auth.routing";
import { PagesRoutingModule } from "./pages/pages.routing";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "**", component: PagenotfoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
