import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Project } from '../../model/project';
import { Language } from 'angular-l10n';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { langAnimationTriger } from '../../animations/app.animation';

@Component({
  selector: 'dsa-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('thumbState', [
      state('inactive', style({
        opacity: 0
      })),
      state('active', style({
        opacity: 1
      })),
      // cubic-bezier from http://easings.net/
      transition('inactive => active', animate('500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)')),
      transition('active => inactive', animate('500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)'))
    ]), langAnimationTriger
  ],
})
export class SliderComponent implements OnInit {
  @Input() items: Project[];
  public counter: number;
  public itemsLength: number;
  public id: number;
  public animateLanguage: boolean;
  private touch1 = {x: 0, time: 0};
  @HostListener('touchstart', ['$event'])
  @HostListener('touchend', ['$event'])
    getTouchMovePosition(e) {
      const touch = e.touches[0] || e.changedTouches[0];
      if (e.type === 'touchstart'){
        this.touch1.x = touch.pageX;
        this.touch1.time = e.timeStamp;
      } else if (e.type === 'touchend'){
        const dx = touch.pageX - this.touch1.x;
        const dt = e.timeStamp - this.touch1.time;

        if (dt < 500){
          // swipe lasted less than 500 ms
          if (Math.abs(dx) > 60){
            // delta x is at least 60 pixels
            if (dx > 0){
              this.dec(this.items.length-1);
            } else {
              this.inc(this.items.length-1)
            }
          }
        }
      }
    }
  
  constructor(
  ) {}

  ngOnInit() {
    this.counter = 0;
  }

  inc(total) {
    this.counter = (this.counter < total) ? this.counter + 1 : 0;
  }

  dec(total) {
    this.counter = (this.counter > 0) ? this.counter - 1 : total;
  }
}
