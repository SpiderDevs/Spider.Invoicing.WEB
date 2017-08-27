import { Injectable, OnDestroy } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { OidcSecurityService } from './services/oidc.security.service';

@Injectable()
export class AuthGuard implements CanActivate, OnDestroy {

    isAuthorizedSubscription: Subscription;
    isAuthorized: boolean;

    constructor(private router: Router, public oidcSecurityService: OidcSecurityService) {
        console.log('AuthGuard ngOnInit');
        this.isAuthorizedSubscription = this.oidcSecurityService.getIsAuthorized().subscribe(
            (isAuthorized: boolean) => {
                console.log('AuthGuard ngOnInit isAuthorized:' + isAuthorized);
                this.isAuthorized = isAuthorized;
            });

        if (window.location.hash) {
            this.oidcSecurityService.authorizedCallback();
        }
    }

    //TODO: verify, and fix - not sure are it's work. supposed no.
    ngOnDestroy() {
        console.log('AuthGuard ngOnDestroy');
        this.isAuthorizedSubscription.unsubscribe();
        this.oidcSecurityService.onModuleSetup.unsubscribe();
    }

    canActivate() {
        if (this.isAuthorized) {
            return true;
        }
        else {
            this.router.navigate(['/forbidden']);
        }

    }
}
