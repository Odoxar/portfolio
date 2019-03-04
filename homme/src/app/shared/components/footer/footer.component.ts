import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Language } from 'angular-l10n';
import { Subscription } from 'rxjs';
import { DataAnimationService } from '../../services/data-animation.service';
import { langAnimationTriger, langHoverTriger } from '../../animations/app.animation';


@Component({
  selector: "dsa-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
  animations: [langHoverTriger, langAnimationTriger]
})
export class FooterComponent implements OnInit, OnDestroy {
  @HostBinding("@langHover")
  routerTransition = true;
  public animateLanguage: boolean;
  public year: Number;
  @Language()
  lang: string;
  private subscription: Subscription;
  constructor(public state: DataAnimationService) {}

  ngOnInit() {
    this.year = Date.now();
    this.subscription = this.state.currentState.subscribe(bool => {
      this.animateLanguage = bool;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
