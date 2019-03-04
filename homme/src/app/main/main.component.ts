import { Component, OnInit, HostBinding, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Language } from 'angular-l10n';
import { DataAnimationService } from '../shared/services/data-animation.service';
import { Subscription } from 'rxjs';
import { contentSlideTrigger } from '../shared/animations/main.animations';
import { langAnimationTriger } from '../shared/animations/app.animation';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'dsa-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [contentSlideTrigger, langAnimationTriger]
})
export class MainComponent implements OnInit, OnDestroy {
  @HostBinding('@contentSlide') contentSlide = true;
  public animateLanguage: boolean; public status: string;
  @Language() lang: string;
  private subscription: Subscription;
  @ViewChild('contentLeft') contentLeft: ElementRef;
  @ViewChild('contentRight') contentRight: ElementRef;

  constructor(public state: DataAnimationService, public media: ObservableMedia) {
    this.status = "";
    media.asObservable().subscribe((change: MediaChange) => {
      this.status = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : "";
    });
  }

  ngOnInit() {
    this.subscription = this.state.currentState
      .subscribe(bool => {
        this.animateLanguage = bool
      });

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
