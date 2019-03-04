/* import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { L10nLoader, L10nConfig, StorageStrategy, ProviderType, LocalizationModule } from 'angular-l10n';
import { HttpClientModule } from '@angular/common/http';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
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
      imports: [HttpClientModule, LocalizationModule.forRoot(l10nConfig)],
      declarations: [MainComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
  }));

  beforeEach((done: any) => {
    fixture = TestBed.createComponent(MainComponent);
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
