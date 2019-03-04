import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { Language } from 'angular-l10n';
import { Subscription } from 'rxjs';
import { DataAnimationService } from '../shared/services/data-animation.service';
import { RouteProjectsService } from '../shared/services/route-projects.service';
import { langHoverTriger, langAnimationTriger} from '../shared/animations/app.animation';
import { Smart } from '../shared/model/smart';
import { smartHouseAnimationTrigger } from '../shared/animations/smart-house.animation';


@Component({
  selector: "dsa-smart-house",
  templateUrl: "./smart-house.component.html",
  styleUrls: ["./smart-house.component.scss"],
  animations: [
    langHoverTriger,
    langAnimationTriger,
    smartHouseAnimationTrigger
  ]
})
export class SmartHouseComponent implements OnInit, OnDestroy {
  @HostBinding("@smartHouseAnimation") routerTransition = true;
  @Language()
  lang: string;
  public menuState: boolean = false;
  public hover: number;
  public items: Smart;
  public animateLanguage: boolean;
  private subscription1: Subscription;

  constructor(
    private state: DataAnimationService,
    private projectsService: RouteProjectsService
  ) {}

  ngOnInit() {
    this.subscription1 = this.state.currentState.subscribe(
      bool => (this.animateLanguage = bool)
    );
    this.items = this.projectsService.getSmartHouseProjects();
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
  }
}


