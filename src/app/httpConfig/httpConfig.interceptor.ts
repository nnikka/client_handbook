import { Injectable } from '@angular/core'
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http'
import { MessageService } from 'primeng/api'

import { Observable, throwError } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { Router } from "@angular/router"

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private router: Router, private messageService: MessageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.method === 'GET') {
      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => event),
        catchError((error: HttpErrorResponse) => {
          // this.router.navigateByUrl('error', {replaceUrl: true});
          this.messageService.add({
            severity: 'error',
            summary: 'Failed to load data',
            detail: error.message
          })
          return throwError(error)
        })
      )
    }
    return next.handle(request)
  }
}
