import {
  transition,
  trigger,
  query,
  style,
  animate,
  group
} from '@angular/animations'

export default trigger('routeAnimations', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: 'calc(100% - 16px)', left: '8px' }), {
      optional: true
    }),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateY(-20%)', opacity: 0 }),
          animate('0.3s ease-in-out', style({ transform: 'translateY(0%)', opacity: 1 }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateY(0%)', opacity: 1 }),
          animate('0.3s ease-in-out', style({ transform: 'translateY(20%)', opacity: 0 }))
        ],
        { optional: true }
      )
    ])
  ])
])
