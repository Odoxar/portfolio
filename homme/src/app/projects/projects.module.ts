import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppLanguageModule } from '../app-language.module';

@NgModule({
  declarations: [ProjectsComponent, ProjectDetailsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatGridListModule,
    AppLanguageModule
  ]
})
export class ProjectsModule {}
