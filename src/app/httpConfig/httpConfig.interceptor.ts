import { Injectable } from '@angular/core'
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http'

import { Observable, throwError } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { Router } from "@angular/router"

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.method === 'GET') {
      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => event),
        catchError((error: HttpErrorResponse) => {
          this.router.navigateByUrl('error', {replaceUrl: true});
          return throwError(error)
        })
      )
    }
    return next.handle(request)
  }
}
