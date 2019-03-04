import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SmartHouseComponent } from './smart-house/smart-house.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "main", pathMatch: "full" },
  { path: "main", component: MainComponent },
  { path: "smart-house", component: SmartHouseComponent },
  {
    path: "climate-control",
    loadChildren:
      "./climate-control/climate-control.module#ClimateControlModule"
  },
  {
    path: "projects",
    loadChildren: "./projects/projects.module#ProjectsModule"
  },
  { path: "contacts", component: ContactsComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
