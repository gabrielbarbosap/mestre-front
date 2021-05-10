import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('JWT_TOKEN');
    if (request.url.includes('http://localhost:3080/api/login')) {
    } else {
      request = request.clone({
        headers: new HttpHeaders({
          'Content-Type': `application/json`,
          'x-access-token': token,
        }),
      });
    }
    return next.handle(request);
  }
}
