import { trigger, transition, style, animate } from "@angular/animations";

export const detailsAnimationTriger = trigger('detailsAnimation', [
  transition('* => *', [
    style({
      opacity: 0
    }),
    animate('500ms ease-in', style({
      opacity: 1
    }))
  ])
])