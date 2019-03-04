import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AppLanguageModule } from './app-language.module';
import { ContactsComponent } from './contacts/contacts.component';
import { SmartHouseComponent } from './smart-house/smart-house.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DataAnimationService } from './shared/services/data-animation.service';
import { RouteProjectsService } from './shared/services/route-projects.service';
import { LangToggleComponent } from './shared/components/lang-toggle/lang-toggle.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { SidenavService } from './shared/services/sidenav.service';
import { RowComponent } from './smart-house/row/row.component';
import { ProjectsModule } from './projects/projects.module';
import { MyHammerConfig } from './shared/services/hammer-config.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ContactsComponent,
    SmartHouseComponent,
    FooterComponent,
    LangToggleComponent,
    SliderComponent,
    PageNotFoundComponent,
    MenuComponent,
    RowComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    AppLanguageModule,
    HttpClientModule,
    ProjectsModule
  ],
  providers: [
    DataAnimationService,
    RouteProjectsService,
    SidenavService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
