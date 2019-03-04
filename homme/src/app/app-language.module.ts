import { NgModule, APP_INITIALIZER } from '@angular/core';
import {
  L10nConfig,
  L10nLoader,
  TranslationModule,
  StorageStrategy,
  ProviderType
} from 'angular-l10n';

const l10nConfig: L10nConfig = {
  locale: {
    languages: [
      { code: 'en', dir: 'ltr' },
      { code: 'ua', dir: 'ltr' }
    ],
    language: 'en',

    storage: StorageStrategy.Cookie
  },
  translation: {
    providers: [
      { type: ProviderType.Static, prefix: './assets/locale/locale-' }
    ],
    caching: true,
    composedKeySeparator: '.',
    missingValue: 'No key'
  }
};

// Advanced initialization.
export function initL10n(l10nLoader: L10nLoader): Function {
  return () => l10nLoader.load();
}
// APP_INITIALIZER will execute the function when the app is initialized and delay what it provides.

@NgModule({
  declarations: [],
  imports: [
    TranslationModule.forRoot(l10nConfig)
  ],
  exports: [TranslationModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initL10n,
      deps: [L10nLoader],
      multi: true
    }
  ],
})
export class AppLanguageModule {
  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();
  }
}
