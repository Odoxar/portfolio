import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Language } from 'angular-l10n';
import { Subscription } from 'rxjs';
import { langAnimationTriger, langHoverTriger } from 'src/app/shared/animations/app.animation';
import { detailsAnimationTriger } from 'src/app/shared/animations/project-details.animation';
import { Project } from 'src/app/shared/model/project';
import { RouteProjectsService } from 'src/app/shared/services/route-projects.service';
import { DataAnimationService } from 'src/app/shared/services/data-animation.service';



enum SWIPE_ACTION {
  LEFT = "swipeleft",
  RIGHT = "swiperight"
};

@Component({
  selector: "dsa-project-details",
  templateUrl: "./project-details.component.html",
  styleUrls: ["./project-details.component.scss"],
  animations: [langAnimationTriger, langHoverTriger, detailsAnimationTriger]
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  @ViewChild("mainImage") mainImage: ElementRef;
  public id: number;
  public item: Project;
  public animateLanguage: boolean;
  private subscription1: Subscription;
  private subscription2: Subscription;

  constructor(
    private projectsService: RouteProjectsService,
    private _router: Router,
    private _route: ActivatedRoute,
    private state: DataAnimationService
  ) {}

  ngOnInit(): void {
    this.subscription1 = this._route.params.subscribe(params => {
      this.id = +params.id;
      this.item = this.projectsService.getProjectById(this.id);
    });
    this.subscription2 = this.state.currentState.subscribe(bool => {
      this.animateLanguage = bool;
    });
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

  goBack(): void {
    this._router.navigate(["../"], { relativeTo: this._route });
  }
  prevSlide() {
    let nextIndex = 0;
    let currentIndex = this.item.images.findIndex((image) => image.visible === true);
    const isFirst = currentIndex === 0;
    nextIndex = isFirst ? this.item.images.length - 1 : currentIndex - 1;
    this.visibilityImage(nextIndex);
  }
  nextSlide() {
    let nextIndex = 0;
    let currentIndex = this.item.images.findIndex(image => image.visible === true);
    const isLast = currentIndex === this.item.images.length - 1;
    nextIndex = isLast ? 0 : currentIndex + 1;
    this.visibilityImage(nextIndex);
  }

  changeMainImage(idx: string) {
    this.visibilityImage(idx);
    //this.item.images[idx].visible = true;
  }

  // action triggered when user swipes
  swipe(currentIndex: number, action = SWIPE_ACTION.LEFT) {
    // out of range
    if (currentIndex > this.item.images.length || currentIndex < 0) return;

    let nextIndex = 0;

    // swipe right, next avatar
    if (action === SWIPE_ACTION.LEFT) {
      const isLast = currentIndex === this.item.images.length - 1;
      nextIndex = isLast ? 0 : currentIndex + 1;
    }

    // swipe left, previous avatar
    if (action === SWIPE_ACTION.RIGHT) {
      const isFirst = currentIndex === 0;
      nextIndex = isFirst ? this.item.images.length - 1 : currentIndex - 1;
    }
    // toggle avatar visibility
    this.visibilityImage(nextIndex);
  }

  visibilityImage(index) {
    this.item.images.forEach((x, i) => (x.visible = i === index));
  }
}
