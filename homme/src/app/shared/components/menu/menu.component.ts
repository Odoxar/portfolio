import { Component, OnInit, OnDestroy, Input, Renderer2 } from '@angular/core';
import { LocaleService, Language } from 'angular-l10n';
import { RouteProjectsService } from '../../services/route-projects.service';
import { DataAnimationService } from '../../services/data-animation.service';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import {langAnimationTriger} from "../../animations/app.animation";
import { Route, Router } from "@angular/router";
import { SidenavService } from '../../services/sidenav.service';
import { navItem } from '../../model/navItems.model';

@Component({
  selector: "dsa-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  animations: [langAnimationTriger]
})
export class MenuComponent implements OnInit, OnDestroy {
  @Input()
  appContainer: HTMLElement;

  @Language()
  lang: string;
  public path: string;
  public status;
  public animateLanguage: boolean;
  public navItems: navItem[];
  private subscription: Subscription;

  constructor(
    public locale: LocaleService,
    private router: Router,
    public state: DataAnimationService,
    public media: ObservableMedia,
    private sidenavService: SidenavService,
    private renderer: Renderer2
  ) {
    this.status = "";
    media.asObservable().subscribe((change: MediaChange) => {
      this.status = change
        ? `'${change.mqAlias}' = (${change.mediaQuery})`
        : "";
    });
  }

  ngOnInit() {
    this.navItems = navItems;
    this.path = this.router.url === "/" ? "/main" : this.router.url;
    this.subscription = this.state.currentState.subscribe(bool => {
      this.animateLanguage = bool;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  menuClose() {
    this.renderer.removeClass(document.body, "modal");
    this.sidenavService.changeMenuState(false);
  }

  pathEqual(): boolean {
    return this.path !== "/main" ? true : false;
  }
}

const navItems: navItem[] = [
  { name: "menu.home", route: "main" },
  { name: "menu.smartHouse", route: "smart-house" },
  { name: "menu.climateControl", route: "climate-control" },
  { name: "menu.projects", route: "projects" },
  { name: "menu.contacts", route: "contacts" }
]
