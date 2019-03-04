import { Component, OnInit, Input, OnDestroy, HostBinding } from '@angular/core';
import { langAnimationTriger, langHoverTriger } from '../../shared/animations/app.animation';
import { Language } from 'angular-l10n';
import { DataAnimationService } from '../../shared/services/data-animation.service';
import { Subscription } from 'rxjs';
import { smartHouseAnimationTrigger } from '../../shared/animations/smart-house.animation';

@Component({
  selector: "dsa-row",
  templateUrl: "./row.component.html",
  styleUrls: ["./row.component.scss"],
  animations: [langAnimationTriger, langHoverTriger, smartHouseAnimationTrigger]
})
export class RowComponent implements OnInit, OnDestroy {

  @Input()
  odd;
  @Input("row")
  row;
  @Input() idx;
  @Language()
  lang: string;
  public animateLanguage: boolean;

  private subscription1: Subscription;

  constructor(private state: DataAnimationService) {}

  ngOnInit() {
    this.subscription1 = this.state.currentState.subscribe(
      bool => (this.animateLanguage = bool)
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription1.unsubscribe();
  }
}
