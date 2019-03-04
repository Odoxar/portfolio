import {
  trigger,
  state,
  style,
  animate,
  transition,
  query
} from "@angular/animations";

export const langHoverTriger = trigger("langHover", [
  transition(":enter", [
    style({
      zIndex: 1,
      opacity: 0
    }),
    animate(
      "500ms ease-in",
      style({
        opacity: 1
      })
    )
  ]),
  transition(":leave", [
    animate(
      "300ms ease-out",
      style({
        zIndex: 0,
        opacity: 0
      })
    )
  ])
]);

export const toggleTriger = trigger("toggle", [
  state("hidden", style({ opacity: 0, transform: "translateY(-100%)" })),
  state("visible", style({ opacity: 1, transform: "translateY(0)" })),
  transition("* => *", animate("200ms 50ms ease-in"))
]);

export const langAnimationTriger = trigger("langAnimation", [
  transition("false => true", [
    style({
      opacity: 0
    }),
    animate(
      "500ms 100ms ease-in",
      style({
        opacity: 1
      })
    )
  ])
]);

export const headerScrollTrigger = trigger("headerScroll", [
  transition("false => true", [
    style({
      opacity: 0,
      transform: "translateY(-100%)"
    }),
    animate(
      "300ms ease-in",
      style({
        opacity: 1,
        transform: "translateY(0)"
      })
    )
  ])
]);

export const sidenavAnimationTrigger = trigger("sidenavAnimation", [
  transition(":enter", [
    query(
      ".menu",
      style({
        opacity: 0,
        transform: "translateX(-100%)"
      }),
      { optional: true }
    ),
    query(
      ".overlay",
      style({
        opacity: 0
      }),
      { optional: true }
    ),
    query(
      ".menu",
      animate(
        ".3s .1s ease-out",
        style({
          opacity: 1,
          transform: "translateX(0)"
        })
      ),
      { optional: true }
    ),
    query(
      ".overlay",
      animate(
        ".1s ease-out",
        style({
          opacity: 1,
          transform: "translateX(0)"
        })
      ),
      { optional: true }
    )
  ]),
  transition(":leave", [
    query(
      ".menu",
      animate(
        ".3s ease-out",
        style({
          opacity: 0,
          transform: "translateX(-100%)"
        })
      )
    ),
    query(
      ".overlay",
      animate(
        ".1s .2s ease-out",
        style({
          opacity: 0
        })
      )
    )
  ])
]);
