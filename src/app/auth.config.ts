import {AuthConfig} from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
    issuer: "http://localhost:8181/realms/gyaan100-realm",
    redirectUri: window.location.origin,
    clientId: 'oauth2-demo-pkce-client',
    responseType: 'code',
    strictDiscoveryDocumentValidation: true,
    scope: 'openid profile email offline_access',
}
