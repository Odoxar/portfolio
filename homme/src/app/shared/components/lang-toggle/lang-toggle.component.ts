import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { LocaleService } from 'angular-l10n';
import { DataAnimationService } from '../../services/data-animation.service';
import { Subscription } from 'rxjs';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'dsa-lang-toggle',
  templateUrl: './lang-toggle.component.html',
  styleUrls: ['./lang-toggle.component.scss']
})
export class LangToggleComponent implements OnInit, OnDestroy {
  @Input() path: boolean;
  public showLang: string;
  public animateLanguage: boolean;
  public status;
  private subscription: Subscription;
  constructor(
    public locale: LocaleService,
    public state: DataAnimationService,
    public media: ObservableMedia
  ) {
    this.status = '';
    media.asObservable()
      .subscribe((change: MediaChange) => {
        this.status = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      });
  }

  ngOnInit(): void {

    this.animateLanguage = false;
    this.showLang = (this.locale.getCurrentLocale() == 'undefined') ? 'en' : this.locale.getCurrentLocale();
    this.subscription = this.state.currentState
    .subscribe(bool => this.animateLanguage = bool);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeLocale(): void {
    this.showLang = this.showLang == 'en' ? 'ua' : 'en';
    this.locale.setCurrentLanguage(this.showLang);
  }

  animated(): void {
    this.state.changeState(true);
    setTimeout(() => {
      this.state.changeState(false);
    }, 500);
  }
}
