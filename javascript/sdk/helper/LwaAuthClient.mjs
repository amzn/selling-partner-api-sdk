import superagent from 'superagent';

export class LwaAuthClient {
    /**
    * Private variable to store LWA credential and refresh token.
    * @type {Object<String, String>}
    */
    #lwaClientInfo = {};

    /**
    * Private variable to cache access token that is retrieved by auto-retrieval.
    * @type {Map<String, {String, Number}> | null}
    */
    #cachedTokenMap = null;
    
    /**
    * Constructs a new LwaAuthClient. 
    * @class
    * @param {String} clientId LWA client ID. Get this value from SP-API Developer Portal.
    * @param {String} clientSecret LWA client secret. Get this value from SP-API Developer Portal.
    * @param {String|null} refreshToken LWA refresh token. Get this value from SP-API Developer Portal.
    * @param {String|null} scope LWA scope(s) for grantless operations
    */
    constructor(clientId, clientSecret, refreshToken = null, scope = null) {
        if (!clientId || typeof clientId !== 'string') {
            throw new Error(`invalid clientId.`);
        }
        if (!clientSecret || typeof clientSecret !== 'string') {
            throw new Error(`invalid clientSecret`);
        }
        if ((!refreshToken && !scope) || (refreshToken && scope)) {
            throw new Error(`Either refreshToken or scope must be defined`);
        }
        this.#lwaClientInfo = {
            clientId, clientSecret, refreshToken, scope
        };
    }

    /**
    * Either retrieve LWA access token or return access token if it already has valid token.
    * @returns {Promise<String>} LWA access token.
    */
    async getAccessToken() {
        const key = JSON.stringify(this.#lwaClientInfo);
        
        if (this.#cachedTokenMap) {
            const cachedTokenItem = this.#cachedTokenMap.get(key);

            if (cachedTokenItem) {
                const cachedToken = cachedTokenItem.cachedToken;
                const cachedTokenExpiration = cachedTokenItem.cachedTokenExpiration;
                //Adjustment in milliseconds (60s) to avoid using nearly expired tokens
                const adjustedExpiryTime = cachedTokenExpiration - 60000;
                if (adjustedExpiryTime > Date.now()) {
                    return Promise.resolve(cachedToken); 
                } else {
                    this.#cachedTokenMap.delete(key);
                }
            }            
        }

        const res = await this.#doRefresh();
        if (!this.#cachedTokenMap) {
            this.#cachedTokenMap = new Map();
        }
        this.#cachedTokenMap.set(key, {cachedToken: res.access_token, cachedTokenExpiration: Date.now() + res.expires_in * 1000});
        return res.access_token;
    }

    /**
     * Private method to execute LWA token refresh flow.
     * @returns {Promise<Object>} LWA token response.
     */
    #doRefresh = async () => {
        let requestBody = null;
        if (this.#lwaClientInfo.scope) {
            //grantless operations
            requestBody = `grant_type=client_credentials&client_id=${this.#lwaClientInfo.clientId}&client_secret=${this.#lwaClientInfo.clientSecret}&scope=${this.#lwaClientInfo.scope}`;
        } else {
            requestBody = `grant_type=refresh_token&refresh_token=${this.#lwaClientInfo.refreshToken}&client_id=${this.#lwaClientInfo.clientId}&client_secret=${this.#lwaClientInfo.clientSecret}`;
        }
        const res = await superagent.post('https://api.amazon.com/auth/o2/token')
            .send(requestBody)
            .set("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        return res.body;
    }

    clearCachedTokenMap() {
        if (this.#cachedTokenMap) {
            this.#cachedTokenMap.clear();
        }
    }    
}
