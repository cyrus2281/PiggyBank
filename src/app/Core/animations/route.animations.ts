
import { trigger, transition, style, query, group, animateChild, animate, keyframes } from "@angular/animations";


export const fader = trigger('routeAnimation', [
  transition('* <=> *', [
    query(':enter', [
      style({
        position: 'absolute',
        opacity: 0,
        width: '100%'
      }),
    ], {optional: true}),
    query(':leave', [
      style({
        position: 'absolute',
      }),
    ], {optional: true}),
    group([
      query(':enter', [
        animate('400ms ease',
          style({ opacity: 1 })
        )
      ], {optional: true}),
      query(':leave', [
        animate('400ms ease',
          style({ opacity: 0 })
        )
      ], {optional: true}),
    ])
  ]),
]);

export const slider = trigger('slideAnimation', [
  transition('isRight => *', slideTo('left')),
  transition('isLeft => *', slideTo('right')),
]);

function slideTo(direction: string) {
  const optional = { optional: true};
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        [direction]: 0,
        width: '100%',
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%' })
    ], optional),
    group([
      query(':leave', [
        animate('600ms ease',
          style({ [direction]: '100%' })
        )
      ], optional),
      query(':enter', [
        animate('600ms ease',
          style({ [direction]: '0%' })
        )
      ], optional),
    ]),
  ];
}
