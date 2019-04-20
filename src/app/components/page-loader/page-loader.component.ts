import { Component, OnInit } from '@angular/core'
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.css'],
  animations: [
    trigger('loadingAnimation', [
      transition(':enter', [style({ opacity: '0' }), animate(300)]),
      transition(':leave', [animate(300, style({ opacity: '0' }))]),
      state('*', style({ opacity: '1' }))
    ])
  ]
})
export class PageLoaderComponent implements OnInit {
  loading: boolean = true

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true
    }
    if (event instanceof NavigationEnd) {
      this.loading = false
    }
    if (event instanceof NavigationCancel) {
      this.loading = false
    }
    if (event instanceof NavigationError) {
      this.loading = false
    }
  }

  ngOnInit() {}
}
