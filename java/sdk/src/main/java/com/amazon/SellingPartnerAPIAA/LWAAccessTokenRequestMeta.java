package com.amazon.SellingPartnerAPIAA;

import com.google.gson.annotations.SerializedName;
import java.util.Objects;

class LWAAccessTokenRequestMeta {
    @SerializedName("grant_type")
    private String grantType;

    @SerializedName("refresh_token")
    private String refreshToken;

    @SerializedName("client_id")
    private String clientId;

    @SerializedName("client_secret")
    private String clientSecret;

    @SerializedName("scope")
    private LWAClientScopes scopes;

    LWAAccessTokenRequestMeta() {}

    private LWAAccessTokenRequestMeta(Builder builder) {
        this.grantType = builder.grantType;
        this.refreshToken = builder.refreshToken;
        this.clientId = builder.clientId;
        this.clientSecret = builder.clientSecret;
        this.scopes = builder.scopes;
    }

    public static Builder builder() {
        return new Builder();
    }

    public String getGrantType() {
        return grantType;
    }

    public void setGrantType(String grantType) {
        this.grantType = grantType;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }

    public String getClientSecret() {
        return clientSecret;
    }

    public void setClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
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
        LWAAccessTokenRequestMeta that = (LWAAccessTokenRequestMeta) o;
        return Objects.equals(grantType, that.grantType)
                && Objects.equals(refreshToken, that.refreshToken)
                && Objects.equals(clientId, that.clientId)
                && Objects.equals(clientSecret, that.clientSecret)
                && Objects.equals(scopes, that.scopes);
    }

    @Override
    public int hashCode() {
        return Objects.hash(grantType, refreshToken, clientId, clientSecret, scopes);
    }

    @Override
    public String toString() {
        return "LWAAccessTokenRequestMeta("
                + "grantType=" + grantType
                + ", refreshToken=" + refreshToken
                + ", clientId=" + clientId
                + ", clientSecret=" + clientSecret
                + ", scopes=" + scopes
                + ")";
    }

    public static class Builder {
        private String grantType;
        private String refreshToken;
        private String clientId;
        private String clientSecret;
        private LWAClientScopes scopes;

        public Builder grantType(String grantType) {
            this.grantType = grantType;
            return this;
        }

        public Builder refreshToken(String refreshToken) {
            this.refreshToken = refreshToken;
            return this;
        }

        public Builder clientId(String clientId) {
            this.clientId = clientId;
            return this;
        }

        public Builder clientSecret(String clientSecret) {
            this.clientSecret = clientSecret;
            return this;
        }

        public Builder scopes(LWAClientScopes scopes) {
            this.scopes = scopes;
            return this;
        }

        public LWAAccessTokenRequestMeta build() {
            return new LWAAccessTokenRequestMeta(this);
        }
    }
}
