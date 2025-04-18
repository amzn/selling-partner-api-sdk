export class RateLimitConfiguration {
    /**
     * RateLimiter Permit: requests per second
     * @type {number}
     * @private
     */
    #rateLimitPermit;

    /**
     * Burst value
     * @type {number}
     * @private
     */
    #burstRequests;

    /**
     * 
     * @param {number} rateLimitPermit rate limit in requests/second
     * @param {number} burstRequests number of busrt requests allowed
     */
    constructor(rateLimitPermit, burstRequests) {
        this.#rateLimitPermit = rateLimitPermit;
        this.#burstRequests = burstRequests;
    }

    /**
     * @returns {number}
     */
    getRateLimitPermit() {
        return this.#rateLimitPermit;
    }

    /**
     * @param {number} rateLimitPermit
     */
    setRateLimitPermit(rateLimitPermit) {
        this.#rateLimitPermit = rateLimitPermit;
    }

    /**
     * @returns {number}
     */
    getBurstRequests() {
        return this.#burstRequests;
    }

    /**
     * @param {number} burstRequests
     */
    setBurstRequests(burstRequests) {
        this.#burstRequests = burstRequests;
    }
}