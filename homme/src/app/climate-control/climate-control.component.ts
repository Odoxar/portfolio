import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { Language } from 'angular-l10n';
import { DataAnimationService } from '../shared/services/data-animation.service';
import { langHoverTriger, langAnimationTriger } from '../shared/animations/app.animation';
import { projectsAnimationTrigger } from '../shared/animations/projects.animation';
import { Subscription } from 'rxjs';



@Component({
  selector: "dsa-climate-control",
  templateUrl: "./climate-control.component.html",
  styleUrls: ["./climate-control.component.scss"],
  animations: [langHoverTriger, langAnimationTriger, projectsAnimationTrigger]
})
export class ClimateControlComponent implements OnInit, OnDestroy {
  @HostBinding("@projectsAnimation") routerTransition = true;
  public animateLanguage: boolean;
  @Language() lang: string;
  private subscription1: Subscription;

  constructor(public state: DataAnimationService) {}

  ngOnInit(): void {
    this.subscription1 = this.state.currentState.subscribe(
      bool => (this.animateLanguage = bool)
    );
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
  }
}

