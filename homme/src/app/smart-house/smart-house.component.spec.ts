/* import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SmartHouseComponent } from "./smart-house.component";
import {
  L10nLoader,
  L10nConfig,
  StorageStrategy,
  ProviderType,
  LocalizationModule
} from "angular-l10n";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";

describe("SmartHouseComponent", () => {
  let component: SmartHouseComponent;
  let fixture: ComponentFixture<SmartHouseComponent>;
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
        FlexLayoutModule
      ],
      declarations: [SmartHouseComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SmartHouseComponent);
    component = fixture.componentInstance;
  }));

  beforeEach((done: any) => {
    fixture = TestBed.createComponent(SmartHouseComponent);
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
