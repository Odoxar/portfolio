import {
  trigger,
  style,
  query,
  animate,
  transition,
  keyframes,
  group,
} from '@angular/animations'


export const contentSlideTrigger = trigger("contentSlide", [
         transition(":enter", [
           query(
             ".main__content_left .main__description",
             style({
               opacity: 0,
               transform: "translateX(-100%)"
             }),
             { optional: true }
           ),
           query(
             ".main__content_right .main__description",
             style({
               opacity: 0,
               transform: "translateX(100%)"
             }),
             { optional: true }
           ),
           query(
             ".main__content_right .main__title, .main__content_left .main__title",
             style({
               opacity: 0,
               transform: "scale(0)"
             }),
             { optional: true }
           ),
           query(
             ".circle-half_blue, .circle-half_green, true",
             style({
               opacity: 0,
               transform: "rotate(-150deg)"
             }),
             { optional: true }
           ),

           group([
             query(
               ".circle-half_blue, .circle-half_green",
               animate(
                 "500ms ease-in",
                 style({
                   opacity: 1,
                   transform: "rotate3d(0, 0, 1, 0deg)"
                 })
               ),
               { optional: true }
             ),
             query(
               ".main__content_left .main__description",
               animate(
                 "1s ease-in",
                 keyframes([
                   style({
                     opacity: 0,
                     transform: "translateX(-100%)",
                     offset: 0
                   }),
                   style({
                     opacity: 0.4,
                     transform: "translateX(15%)",
                     offset: 0.4
                   }),
                   style({
                     opacity: 1,
                     transform: "translateX(0)",
                     offset: 1
                   })
                 ])
               ),
               { optional: true }
             ),
             query(
               ".main__content_right .main__description",
               animate(
                 "1s ease-in",
                 keyframes([
                   style({
                     opacity: 0,
                     transform: "translateX(100%)",
                     offset: 0
                   }),
                   style({
                     opacity: 0.4,
                     transform: "translateX(-15%)",
                     offset: 0.4
                   }),
                   style({
                     opacity: 1,
                     transform: "translateX(0)",
                     offset: 1
                   })
                 ])
               ),
               { optional: true }
             ),
             query(
               ".main__content_right .main__title, .main__content_left .main__title",
               animate(
                 "1s .8s ease-in",
                 keyframes([
                   style({
                     opacity: 0,
                     transform: "scale(0)",
                     offset: 0
                   }),
                   style({
                     opacity: 0.4,
                     transform: "scale(1.15)",
                     offset: 0.4
                   }),
                   style({
                     opacity: 1,
                     transform: "scale(1)",
                     offset: 1
                   })
                 ])
               ),
               { optional: true }
             )
           ])
         ]),
         transition(":leave", [
           group([
             query(
               ":leave",
               animate(
                 ".5s .3s ease-out",
                 style({
                   opacity: 0
                 })
               ),
               { optional: true }
             ),
             query(
               ".circle-half_blue, .circle-half_green",
               animate(
                 "300ms ease-in",
                 style({
                   opacity: 1,
                   transform: "rotate(180deg)"
                 })
               ),
               { optional: true }
             ),
             query(
               ".main__content_left .main__description",
               animate(
                 ".5s ease-in",
                 keyframes([
                   style({
                     opacity: 1,
                     transform: "translateX(0)",
                     offset: 0
                   }),
                   style({
                     opacity: 0.4,
                     transform: "translateX(15%)",
                     offset: 0.4
                   }),
                   style({
                     opacity: 0,
                     transform: "translateX(-100%)",
                     offset: 1
                   })
                 ])
               ),
               { optional: true }
             ),
             query(
               ".main__content_right .main__description",
               animate(
                 ".5s ease-in",
                 keyframes([
                   style({
                     opacity: 1,
                     transform: "translateX(0)",
                     offset: 0
                   }),
                   style({
                     opacity: 0.4,
                     transform: "translateX(-15%)",
                     offset: 0.4
                   }),
                   style({
                     opacity: 0,
                     transform: "translateX(100%)",
                     offset: 1
                   })
                 ])
               ),
               { optional: true }
             ),
             query(
               ".main__content_right .main__title, .main__content_left .main__title",
               animate(
                 ".5s .3s ease-in",
                 keyframes([
                   style({
                     opacity: 1,
                     transform: "scale(1)",
                     offset: 0
                   }),
                   style({
                     opacity: 0.4,
                     transform: "scale(1.15)",
                     offset: 0.4
                   }),
                   style({
                     opacity: 0,
                     transform: "scale(0)",
                     offset: 1
                   })
                 ])
               ),
               { optional: true }
             )
           ])
         ])
       ]);

