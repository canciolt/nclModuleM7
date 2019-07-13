import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { M7Component } from "./modules/m7/m7.component";

const routes: Routes = [
  { path: "m7", component: M7Component },
  { path: "**", component: M7Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
