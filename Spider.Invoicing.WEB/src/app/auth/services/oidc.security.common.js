var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AuthConfiguration } from '../modules/auth.configuration';
import { OidcSecurityStorage } from './oidc.security.storage';
var OidcSecurityCommon = (function () {
    function OidcSecurityCommon(authConfiguration, oidcSecurityStorage) {
        this.authConfiguration = authConfiguration;
        this.oidcSecurityStorage = oidcSecurityStorage;
        this.storage_auth_result = 'authorizationResult';
        this.storage_access_token = 'authorizationData';
        this.storage_id_token = 'authorizationDataIdToken';
        this.storage_is_authorized = '_isAuthorized';
        this.storage_user_data = 'userData';
        this.storage_auth_nonce = 'authNonce';
        this.storage_auth_state_control = 'authStateControl';
        this.storage_well_known_endpoints = 'wellknownendpoints';
        this.storage_session_state = 'session_state';
        this.storage_silent_renew_running = 'storage_silent_renew_running';
        this.storage_custom_request_params = 'storage_custom_request_params';
    }
    OidcSecurityCommon.prototype.setupModule = function () { };
    OidcSecurityCommon.prototype.retrieve = function (key) {
        return this.oidcSecurityStorage.read(key);
    };
    OidcSecurityCommon.prototype.store = function (key, value) {
        this.oidcSecurityStorage.write(key, value);
    };
    OidcSecurityCommon.prototype.resetStorageData = function (isRenewProcess) {
        if (!isRenewProcess) {
            this.store(this.storage_auth_result, '');
            this.store(this.storage_session_state, '');
            this.store(this.storage_silent_renew_running, '');
            this.store(this.storage_is_authorized, false);
            this.store(this.storage_access_token, '');
            this.store(this.storage_id_token, '');
            this.store(this.storage_user_data, '');
        }
    };
    OidcSecurityCommon.prototype.getAccessToken = function () {
        return this.retrieve(this.storage_access_token);
    };
    OidcSecurityCommon.prototype.getIdToken = function () {
        return this.retrieve(this.storage_id_token);
    };
    OidcSecurityCommon.prototype.logError = function (message) {
        console.error(message);
    };
    OidcSecurityCommon.prototype.logWarning = function (message) {
        if (this.authConfiguration.log_console_warning_active) {
            console.warn(message);
        }
    };
    OidcSecurityCommon.prototype.logDebug = function (message) {
        if (this.authConfiguration.log_console_debug_active) {
            console.log(message);
        }
    };
    return OidcSecurityCommon;
}());
OidcSecurityCommon = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AuthConfiguration, OidcSecurityStorage])
], OidcSecurityCommon);
export { OidcSecurityCommon };
//# sourceMappingURL=oidc.security.common.js.map