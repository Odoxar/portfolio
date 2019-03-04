import {
  trigger,
  style,
  query,
  animate,
  transition,
  stagger
} from "@angular/animations";

export const smartHouseAnimationTrigger = trigger("smartHouseAnimation", [
  transition(":enter", [
    query(".smart-house__title", style({ opacity: 0 }), {
      optional: true
    }),
    query(
      ".smart-house__row",
      style({
        opacity: 0,
        transform: "translateX(-100%)"
      }),
      { optional: true }
    ),
    query(".smart-house__title", animate(".5s .2s", style({ opacity: 1 })), {
      optional: true
    }),
    query(
      ".smart-house__row",
      stagger(".5s", [
        animate(
          ".5s .1s",
          style({
            opacity: 1,
            transform: "translateX(0)"
          })
        )
      ]),
      {
        optional: true
      }
    )
  ])
]);
