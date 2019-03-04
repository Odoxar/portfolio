/* import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateControlComponent } from './climate-control.component';
import { L10nLoader, L10nConfig, StorageStrategy, ProviderType, LocalizationModule } from 'angular-l10n';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from '../shared/components/slider/slider.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ObservableMedia } from '@angular/flex-layout';

describe('ClimateControlComponent', () => {
  let fixture: ComponentFixture<ClimateControlComponent>;
  let component: ClimateControlComponent;

  let l10nLoader: L10nLoader;

  const l10nConfig: L10nConfig = {
    locale: {
      languages: [{ code: "en", dir: "ltr" }, { code: "ua", dir: "ltr" }],
      language: "en",
      storage: StorageStrategy.Cookie
    },
    translation: {
      providers: [
        { type: ProviderType.Static, prefix: "./assets/locale/locale-" }
      ],
      caching: true,
      composedKeySeparator: ".",
      missingValue: "No key"
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        LocalizationModule.forRoot(l10nConfig),
        MatGridListModule,
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule
      ],
      declarations: [ClimateControlComponent, SliderComponent],
      providers: [ObservableMedia]
    }).compileComponents();

    fixture = TestBed.createComponent(ClimateControlComponent);
    component = fixture.componentInstance;
  }));

  beforeEach((done: any) => {
    fixture = TestBed.createComponent(ClimateControlComponent);
    component = fixture.componentInstance;
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load().then(() => done());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 */
