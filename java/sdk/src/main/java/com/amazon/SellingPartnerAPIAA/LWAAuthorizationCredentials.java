package com.amazon.SellingPartnerAPIAA;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Objects;

/** LWAAuthorizationCredentials */
public class LWAAuthorizationCredentials {
    /** LWA Client Id */
    private String clientId;

    /** LWA Client Secret */
    private String clientSecret;

    /** LWA Refresh Token */
    private String refreshToken;

    /** LWA Authorization Server Endpoint */
    private String endpoint;

    /** LWA Client Scopes */
    private LWAClientScopes scopes;

    private LWAAuthorizationCredentials(LWAAuthorizationCredentialsBuilder builder) {
        if (builder.clientId == null) {
            throw new NullPointerException("clientId is marked non-null but is null");
        }
        if (builder.clientSecret == null) {
            throw new NullPointerException("clientSecret is marked non-null but is null");
        }
        if (builder.endpoint == null) {
            throw new NullPointerException("endpoint is marked non-null but is null");
        }
        this.clientId = builder.clientId;
        this.clientSecret = builder.clientSecret;
        this.refreshToken = builder.refreshToken;
        this.endpoint = builder.endpoint;
        this.scopes = builder.scopes;
    }

    public static LWAAuthorizationCredentialsBuilder builder() {
        return new LWAAuthorizationCredentialsBuilder();
    }

    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        if (clientId == null) {
            throw new NullPointerException("clientId is marked non-null but is null");
        }
        this.clientId = clientId;
    }

    public String getClientSecret() {
        return clientSecret;
    }

    public void setClientSecret(String clientSecret) {
        if (clientSecret == null) {
            throw new NullPointerException("clientSecret is marked non-null but is null");
        }
        this.clientSecret = clientSecret;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public String getEndpoint() {
        return endpoint;
    }

    public void setEndpoint(String endpoint) {
        if (endpoint == null) {
            throw new NullPointerException("endpoint is marked non-null but is null");
        }
        this.endpoint = endpoint;
    }

    public LWAClientScopes getScopes() {
        return scopes;
    }

    public void setScopes(LWAClientScopes scopes) {
        this.scopes = scopes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LWAAuthorizationCredentials that = (LWAAuthorizationCredentials) o;
        return Objects.equals(clientId, that.clientId)
                && Objects.equals(clientSecret, that.clientSecret)
                && Objects.equals(refreshToken, that.refreshToken)
                && Objects.equals(endpoint, that.endpoint)
                && Objects.equals(scopes, that.scopes);
    }

    @Override
    public int hashCode() {
        return Objects.hash(clientId, clientSecret, refreshToken, endpoint, scopes);
    }

    @Override
    public String toString() {
        return "LWAAuthorizationCredentials("
                + "clientId=" + clientId
                + ", clientSecret=" + clientSecret
                + ", refreshToken=" + refreshToken
                + ", endpoint=" + endpoint
                + ", scopes=" + scopes
                + ")";
    }

    public static class LWAAuthorizationCredentialsBuilder {

        private String clientId;
        private String clientSecret;
        private String refreshToken;
        private String endpoint;
        private LWAClientScopes scopes;

        {
            scopes = new LWAClientScopes(new HashSet<>());
        }

        public LWAAuthorizationCredentialsBuilder clientId(String clientId) {
            this.clientId = clientId;
            return this;
        }

        public LWAAuthorizationCredentialsBuilder clientSecret(String clientSecret) {
            this.clientSecret = clientSecret;
            return this;
        }

        public LWAAuthorizationCredentialsBuilder refreshToken(String refreshToken) {
            this.refreshToken = refreshToken;
            return this;
        }

        public LWAAuthorizationCredentialsBuilder endpoint(String endpoint) {
            this.endpoint = endpoint;
            return this;
        }

        public LWAAuthorizationCredentialsBuilder scopes(LWAClientScopes scopes) {
            this.scopes = scopes;
            return this;
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

        public LWAAuthorizationCredentials build() {
            return new LWAAuthorizationCredentials(this);
        }
    }
}
