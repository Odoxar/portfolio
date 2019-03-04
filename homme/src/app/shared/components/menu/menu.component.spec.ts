/* import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { L10nLoader, L10nConfig, StorageStrategy, ProviderType, LocalizationModule } from 'angular-l10n';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { LangToggleComponent } from '../lang-toggle/lang-toggle.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
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
        RouterTestingModule.withRoutes([])
      ],
      declarations: [MenuComponent, LangToggleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
  }));

  beforeEach((done: any) => {
    fixture = TestBed.createComponent(MenuComponent);
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
