import { Component,Optional } from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import { OidcSecurityService } from './auth/services/oidc.security.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Invoicing Demo';


  isAuthorizedSubscription: Subscription;
  isAuthorized: boolean;

  constructor(public securityService: OidcSecurityService) {
  }

  ngOnInit() {
    console.log('AppComponent ngOnInit');
    this.isAuthorizedSubscription = this.securityService.getIsAuthorized().subscribe(
        (isAuthorized: boolean) => {
          
          console.log('AppComponent ngOnInit isAuthorized:' + isAuthorized);
            this.isAuthorized = isAuthorized;
        });

    if (window.location.hash) {
        this.securityService.authorizedCallback();
    }
}

ngOnDestroy(): void {
    this.isAuthorizedSubscription.unsubscribe();
}
  

  login() {
      console.log('start login');
      this.securityService.authorize();
  }

  refreshSession() {
      console.log('start refreshSession');
      this.securityService.authorize();
  }

  logout() {
      console.log('start logoff');
      this.securityService.logoff();
  }
}