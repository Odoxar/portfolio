import { Injectable } from "@angular/core";
import { HammerGestureConfig } from "@angular/platform-browser";

@Injectable({ providedIn: 'root' })
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { velocity: 0.4, threshold: 20 }, // override default settings
    'pinch': { enable: false },
    'rotate': { enable: false }
  }
}
