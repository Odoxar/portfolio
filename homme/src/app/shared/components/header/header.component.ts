import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  AfterViewInit,
  HostBinding,
  ViewChildren,
  ElementRef,
  HostListener,
  Renderer2
} from "@angular/core";
import { NavigationEnd, Route, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { LocaleService, Language } from "angular-l10n";

import { RouteProjectsService } from "../../services/route-projects.service";

import { DataAnimationService } from "../../services/data-animation.service";
import {
  toggleTriger,
  langAnimationTriger
} from "../../animations/app.animation";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { SidenavService } from "../../services/sidenav.service";

enum VisibilityState {
  Visible = "visible",
  Hidden = "hidden"
}

@Component({
  selector: "dsa-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  animations: [toggleTriger, langAnimationTriger]
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  appContainer: HTMLElement;
  public menuState: boolean;
  @Language()
  lang: string;
  private isVisible = true;
  private startScroll: boolean = false;
  public path: string;
  public animateLanguage: boolean;
  public status: string;

  private subscription: Subscription;

  @HostBinding("@toggle")
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

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

  ngOnInit(): void {
    this.path = this.router.url === "/" ? "/main" : this.router.url;
    this.subscription = this.state.currentState.subscribe(bool => {
      this.animateLanguage = bool;
    });
  }

  ngAfterViewInit(): void {
    this.scrolled();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openMenu(): void {
    this.renderer.addClass(document.body, 'modal');
    //this.appContainer.style.overflowY = 'hidden';
    this.sidenavService.changeMenuState(true);
  }

  pathEqual(): boolean {
    return this.router.url !== "/main" ? true : false;
  }

  scrolled(): boolean {
    return (this.startScroll = this.pathEqual() === false ? true : false);
  }
}
