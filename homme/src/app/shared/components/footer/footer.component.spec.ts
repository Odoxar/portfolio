/* import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FooterComponent } from "./footer.component";
import {
  L10nLoader,
  L10nConfig,
  LocalizationModule,
  StorageStrategy,
  ProviderType
} from "angular-l10n";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

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
        BrowserAnimationsModule
      ],
      declarations: [FooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  }));

  beforeEach((done: any) => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load().then(() => done());
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
 */