import superagent from 'superagent';

/**
 * Internal shape of the credential/refresh-token information tracked per client.
 */
interface LwaClientInfo {
    clientId: string;
    clientSecret: string;
    refreshToken: string | null;
    scope: string | null;
}

/**
 * Cached access-token entry with its absolute expiration timestamp (ms since epoch).
 */
interface CachedTokenItem {
    cachedToken: string;
    cachedTokenExpiration: number;
}

/**
 * Shape of the LWA token endpoint response body.
 */
interface LwaTokenResponse {
    access_token: string;
    expires_in: number;
    [key: string]: unknown;
}

/**
 * LwaAuthClient retrieves and caches Login With Amazon (LWA) access tokens.
 *
 * Supports both the refresh-token flow (user-delegated operations) and the
 * client-credentials flow (grantless operations). Retrieved tokens are cached
 * per unique set of credentials, with a 60s buffer to avoid using
 * nearly-expired tokens.
 */
export class LwaAuthClient {
    /**
     * Stored LWA credential and refresh token/scope.
     */
    private readonly lwaClientInfo: LwaClientInfo;

    /**
     * Cache of access tokens retrieved by auto-retrieval, keyed by a
     * serialized representation of the credentials.
     */
    private cachedTokenMap: Map<string, CachedTokenItem> | null = null;

    /**
     * Constructs a new LwaAuthClient.
     * @param clientId LWA client ID. Get this value from SP-API Developer Portal.
     * @param clientSecret LWA client secret. Get this value from SP-API Developer Portal.
     * @param refreshToken LWA refresh token. Get this value from SP-API Developer Portal.
     * @param scope LWA scope(s) for grantless operations.
     */
    constructor(
        clientId: string,
        clientSecret: string,
        refreshToken: string | null = null,
        scope: string | null = null
    ) {
        if (!clientId || typeof clientId !== 'string') {
            throw new Error('invalid clientId.');
        }
        if (!clientSecret || typeof clientSecret !== 'string') {
            throw new Error('invalid clientSecret');
        }
        if ((!refreshToken && !scope) || (refreshToken && scope)) {
            throw new Error('Either refreshToken or scope must be defined');
        }
        this.lwaClientInfo = { clientId, clientSecret, refreshToken, scope };
    }

    /**
     * Either retrieve a new LWA access token or return a cached token if it is still valid.
     * @returns LWA access token.
     */
    async getAccessToken(): Promise<string> {
        const key = JSON.stringify(this.lwaClientInfo);

        if (this.cachedTokenMap) {
            const cachedTokenItem = this.cachedTokenMap.get(key);

            if (cachedTokenItem) {
                const { cachedToken, cachedTokenExpiration } = cachedTokenItem;
                // Adjustment in milliseconds (60s) to avoid using nearly expired tokens
                const adjustedExpiryTime = cachedTokenExpiration - 60000;
                if (adjustedExpiryTime > Date.now()) {
                    return cachedToken;
                }
                this.cachedTokenMap.delete(key);
            }
        }

        const res = await this.doRefresh();
        if (!this.cachedTokenMap) {
            this.cachedTokenMap = new Map();
        }
        this.cachedTokenMap.set(key, {
            cachedToken: res.access_token,
            cachedTokenExpiration: Date.now() + res.expires_in * 1000,
        });
        return res.access_token;
    }

    /**
     * Execute the LWA token refresh flow.
     * @returns LWA token response.
     */
    private async doRefresh(): Promise<LwaTokenResponse> {
        let requestBody: string;
        if (this.lwaClientInfo.scope) {
            // grantless operations
            requestBody = `grant_type=client_credentials&client_id=${this.lwaClientInfo.clientId}&client_secret=${this.lwaClientInfo.clientSecret}&scope=${this.lwaClientInfo.scope}`;
        } else {
            requestBody = `grant_type=refresh_token&refresh_token=${this.lwaClientInfo.refreshToken}&client_id=${this.lwaClientInfo.clientId}&client_secret=${this.lwaClientInfo.clientSecret}`;
        }
        const res = await superagent
            .post('https://api.amazon.com/auth/o2/token')
            .send(requestBody)
            .set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        return res.body as LwaTokenResponse;
    }

    /**
     * Clear the cached token map.
     */
    clearCachedTokenMap(): void {
        if (this.cachedTokenMap) {
            this.cachedTokenMap.clear();
        }
    }
}
