import { animate, state, style, transition, trigger } from '@angular/animations'

export default [
  trigger('FadeInOutAnimation', [
    transition(':enter', [style({ opacity: '0' }), animate(300)]),
    transition(':leave', [animate(300, style({ opacity: '0' }))]),
    state('*', style({ opacity: '1' }))
  ])
]
