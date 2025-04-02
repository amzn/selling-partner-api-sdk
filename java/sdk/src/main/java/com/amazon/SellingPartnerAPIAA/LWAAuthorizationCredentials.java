package com.amazon.SellingPartnerAPIAA;

import java.util.Arrays;
import java.util.HashSet;
import lombok.Builder;
import lombok.Data;
import lombok.NonNull;

/** LWAAuthorizationCredentials */
@Data
@Builder
public class LWAAuthorizationCredentials {
    /** LWA Client Id */
    @NonNull private String clientId;

    /** LWA Client Secret */
    @NonNull private String clientSecret;

    /** LWA Refresh Token */
    private String refreshToken;

    /** LWA Authorization Server Endpoint */
    @NonNull private String endpoint;

    /** LWA Client Scopes */
    private LWAClientScopes scopes;

    public static class LWAAuthorizationCredentialsBuilder {

        {
            scopes = new LWAClientScopes(new HashSet<>());
        }

        public LWAAuthorizationCredentialsBuilder withScope(String scope) {
            return withScopes(scope);
        }

        public LWAAuthorizationCredentialsBuilder withScopes(String... scopes) {
            if (scopes != null) {
                Arrays.stream(scopes).forEach(this.scopes::addScope);
            }
            return this;
        }
    }
}
