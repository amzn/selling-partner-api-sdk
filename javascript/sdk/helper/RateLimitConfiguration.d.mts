export class RateLimitConfiguration {
    /**
     *
     * @param {number} rateLimitPermit rate limit in requests/second
     * @param {number} burstRequests number of busrt requests allowed
     */
    constructor(rateLimitPermit: number, burstRequests: number);
    /**
     * @returns {number}
     */
    getRateLimitPermit(): number;
    /**
     * @param {number} rateLimitPermit
     */
    setRateLimitPermit(rateLimitPermit: number): void;
    /**
     * @returns {number}
     */
    getBurstRequests(): number;
    /**
     * @param {number} burstRequests
     */
    setBurstRequests(burstRequests: number): void;
    #private;
}
//# sourceMappingURL=RateLimitConfiguration.d.mts.map