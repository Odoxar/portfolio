import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClimateControlRoutingModule } from './climate-control-routing.module';
import { ClimateControlComponent } from './climate-control.component';
import { AppLanguageModule } from '../app-language.module';

@NgModule({
  declarations: [ClimateControlComponent],
  imports: [
    CommonModule,
    ClimateControlRoutingModule,
    AppLanguageModule
  ],
  exports: [],
  providers: []
})
export class ClimateControlModule {}
