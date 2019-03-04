import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ClimateControlComponent } from "./climate-control.component";

const routes: Routes = [
  {
    path: "",
    component: ClimateControlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClimateControlRoutingModule { }
