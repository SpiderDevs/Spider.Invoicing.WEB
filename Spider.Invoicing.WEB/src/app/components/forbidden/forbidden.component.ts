import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from '../../auth/services/oidc.security.service';

@Component({
    selector: 'forbidden',
    templateUrl: 'forbidden.component.html'
})

export class ForbiddenComponent implements OnInit {

    public message: string;
    public values: any[];
    public forbiddenImgUrl: string;

    constructor(public securityService: OidcSecurityService) {
        this.message = 'ForbiddenComponent constructor';
        this.forbiddenImgUrl = "assets/images/no.png"
    }

    ngOnInit() {
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
