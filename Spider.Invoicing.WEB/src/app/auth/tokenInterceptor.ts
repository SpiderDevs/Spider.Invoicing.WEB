import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { OidcSecurityService } from './services/oidc.security.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private oidcSecurityService: OidcSecurityService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    console.log("Bearer "+ this.oidcSecurityService.getToken());

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.oidcSecurityService.getToken()}`,
        AccessControlAllowHeaders: 'Content-Type',
        AccessControlAllowMethods: 'GET',
        AccessControlAllowOrigin: '*',
        AccessControlAllowCredentials: 'true',
      }
    });

    return next.handle(request);
  }
}