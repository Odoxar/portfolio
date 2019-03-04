import { trigger, transition, style, stagger, animate, query } from "@angular/animations";


export const contactsAnimationTrigger = trigger("contactsAnimation", [
         transition("* => *", [
           query(".contacts__title", style({ opacity: 0 }), {
             optional: true
           }),
           query(
             "li, .contacts__work-time",
             style({ opacity: 0, transform: "translateX(-40px)" }),
             { optional: true }
           ),
           query(
             ".contacts__title",
             stagger(".3s", [animate(".3s", style({ opacity: 1 }))]),
             { optional: true }
           ),
           query(
             "li, .contacts__work-time",
             stagger("500ms", [
               animate(
                 "500ms .7s ease-out",
                 style({ opacity: 1, transform: "translateX(0)" })
               )
             ]),
             { optional: true }
           )
         ])
       ]);
