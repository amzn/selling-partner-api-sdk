package com.amazon.SellingPartnerAPIAA;

import java.util.Objects;

class LWAAccessTokenCacheItem {

    private String accessToken;
    private long accessTokenExpiredTime;

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public long getAccessTokenExpiredTime() {
        return accessTokenExpiredTime;
    }

    public void setAccessTokenExpiredTime(long accessTokenExpiredTime) {
        this.accessTokenExpiredTime = accessTokenExpiredTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LWAAccessTokenCacheItem that = (LWAAccessTokenCacheItem) o;
        return accessTokenExpiredTime == that.accessTokenExpiredTime && Objects.equals(accessToken, that.accessToken);
    }

    @Override
    public int hashCode() {
        return Objects.hash(accessToken, accessTokenExpiredTime);
    }

    @Override
    public String toString() {
        return "LWAAccessTokenCacheItem("
                + "accessToken=" + accessToken
                + ", accessTokenExpiredTime=" + accessTokenExpiredTime
                + ")";
    }
}
