import {
  Component,
  OnInit,
  HostBinding,
  OnDestroy,
  ViewChild
} from "@angular/core";
import { DataAnimationService } from "../shared/services/data-animation.service";
import { RouteProjectsService } from "../shared/services/route-projects.service";
import { ObservableMedia } from "@angular/flex-layout";
import { Language } from "angular-l10n";
import { Project } from "../shared/model/project";
import { Subscription, Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/takeWhile";
import "rxjs/add/operator/startWith";
import {
  langAnimationTriger,
  langHoverTriger
} from "../shared/animations/app.animation";
import {
  projectsAnimationTrigger,
  listAnimationTriger
} from "../shared/animations/projects.animation";
import { MatGridList } from "@angular/material/grid-list";

@Component({
  selector: "dsa-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
  animations: [
    langHoverTriger,
    langAnimationTriger,
    projectsAnimationTrigger,
    listAnimationTriger
  ]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  @HostBinding("@projectsAnimation") routerTransition = true;

  @ViewChild("grid") grid: MatGridList;

  public rowHeight: Observable<string>;
  public cols: Observable<number>;

  public items: Project[];
  public animateLanguage: boolean;
  @Language() lang: string;
  private subscription1: Subscription;

  constructor(
    public state: DataAnimationService,
    public projectsService: RouteProjectsService,
    public media: ObservableMedia
  ) {}

  ngOnInit() {
    let start: number;
    const grid = new Map([
      ["xs", 1],
      ["sm", 2],
      ["md", 2],
      ["lg", 3],
      ["xl", 3]
    ]);
    this.subscription1 = this.state.currentState.subscribe(
      bool => (this.animateLanguage = bool)
    );

    grid.forEach((cols, mqAlias) => {
      if (this.media.isActive(mqAlias)) {
        start = cols;
      }
    });
    this.cols = this.media
      .asObservable()
      .map(change => {
        return grid.get(change.mqAlias);
      })
      .startWith(start);

    this.items = this.projectsService.getProjects();
  }


  getRowHeight(cols) {
    return  cols === 1 ? '250px' : '330px';
  };

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
  }
}
