
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { InvoicingComponent } from './components/invoicing/invoicing.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { OidcSecurityService } from './auth/services/oidc.security.service';
import { OpenIDImplicitFlowConfiguration } from './auth/modules/auth.configuration';
import { AuthModule } from './auth/modules/auth.module';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvoicingComponent,
    ForbiddenComponent,
    UnauthorizedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    AuthModule.forRoot(),
    MaterialModule,
  ],
  providers: [
    OidcSecurityService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(public oidcSecurityService: OidcSecurityService) {

      let openIDImplicitFlowConfiguration = new OpenIDImplicitFlowConfiguration();

      openIDImplicitFlowConfiguration.stsServer = 'http://localhost:5000';
      openIDImplicitFlowConfiguration.redirect_url = 'http://localhost:4200';
      // The Client MUST validate that the aud (audience) Claim contains its client_id value registered at the Issuer identified by the iss (issuer) Claim as an audience.
      // The ID Token MUST be rejected if the ID Token does not list the Client as a valid audience, or if it contains additional audiences not trusted by the Client.
      openIDImplicitFlowConfiguration.client_id = 'angularclientidtokenonly';
      openIDImplicitFlowConfiguration.response_type = 'id_token';
      openIDImplicitFlowConfiguration.scope = 'openid profile email';
      openIDImplicitFlowConfiguration.post_logout_redirect_uri = 'http://localhost:4200/Unauthorized';
      openIDImplicitFlowConfiguration.start_checksession = false;
      openIDImplicitFlowConfiguration.silent_renew = true;
      openIDImplicitFlowConfiguration.startup_route = '/home';
      // HTTP 403
      openIDImplicitFlowConfiguration.forbidden_route = '/Forbidden';
      // HTTP 401
      openIDImplicitFlowConfiguration.unauthorized_route = '/Unauthorized';
      openIDImplicitFlowConfiguration.log_console_warning_active = true;
      openIDImplicitFlowConfiguration.log_console_debug_active = false;
      // id_token C8: The iat Claim can be used to reject tokens that were issued too far away from the current time,
      // limiting the amount of time that nonces need to be stored to prevent attacks.The acceptable range is Client specific.
      openIDImplicitFlowConfiguration.max_id_token_iat_offset_allowed_in_seconds = 3;
      openIDImplicitFlowConfiguration.auto_clean_state_after_authentication = false;

      this.oidcSecurityService.setupModule(openIDImplicitFlowConfiguration);
  }
}
