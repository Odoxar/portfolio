import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { LocaleService, TranslationService, Language } from 'angular-l10n';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {
  toggleTriger,
  sidenavAnimationTrigger,
  headerScrollTrigger
} from "./shared/animations/app.animation";
import { SidenavService } from './shared/services/sidenav.service';


@Component({
  selector: "dsa-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [toggleTriger, sidenavAnimationTrigger, headerScrollTrigger]
})
export class AppComponent implements OnInit, OnDestroy {
  public title = "dsa";
  public path: string;
  public scroll: boolean = false;
  public menuState: boolean;
  @Language()
  lang: string;

  @HostListener("window:scroll", ["$event"])
  scrolling(e) {
    this.scroll = this.pathEqual() ? ( e.target.scrollingElement.scrollTop > 100 ? true : false) : false;
  }

  private subscription1: Subscription;
  private subscriptionSidenav: Subscription;

  constructor(
    public locale: LocaleService,
    public translation: TranslationService,
    private router: Router,
    private sidenavService: SidenavService
  ) { }

  ngOnInit(): void {
    this.subscription1 = this.translation.translationChanged().subscribe(() => {
      this.title = this.translation.translate("Title");
    });

    this.subscriptionSidenav = this.sidenavService.currentState.subscribe(
      state => {
        this.menuState = state;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscriptionSidenav.unsubscribe();
  }

  pathEqual(): boolean {
    return this.router.url == "/main" ? false : true;
  }
}
