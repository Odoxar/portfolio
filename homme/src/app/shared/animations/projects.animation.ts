import {
  trigger,
  style,
  query,
  animate,
  transition,
  animateChild,
  stagger,
} from '@angular/animations'


export const projectsAnimationTrigger = trigger('projectsAnimation', [
  transition(':enter', [
    query('.projects__title, .climate-control__description, .climate-control__title', style({ opacity: 0 }), { optional: true }),
    query('.climate-control__title', stagger('.1s', [animate('.1s', style({ opacity: 1 }))]), { optional: true }),
    query('.climate-control__description', animate('.3s .1s', style({ opacity: 1 })), { optional: true }),
    query('.projects__title', stagger('.3s', [animate('.1s', style({ opacity: 1 }))]), { optional: true }),
    query('.projects__gallery', stagger('.3s', [animateChild()]), { optional: true })
  ]),
  transition(':leave', [

  ])
]);

export const listAnimationTriger = trigger('listAnimation', [
  transition('* => *', [ // each time the binding value changes
    query(':leave', [
      stagger('.3s', [
        animate('0.5s', style({ opacity: 0 }))
      ])
    ], { optional: true }),
    query(':enter', [
      style({ opacity: 0 }),
      stagger('.3s', [
        animate('0.5s', style({ opacity: 1 }))
      ])
    ], { optional: true })
  ])
])
