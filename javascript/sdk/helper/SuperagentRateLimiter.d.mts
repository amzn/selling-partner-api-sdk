export class SuperagentRateLimiter {
    /**
     * @param {RateLimitConfiguration} config
     */
    constructor(config: RateLimitConfiguration);
    /**
     * Creates a Superagent plugin that implements rate limiting
     * @returns {function} Superagent plugin
     */
    getPlugin(): Function;
    #private;
}
import { RateLimitConfiguration } from './RateLimitConfiguration.mjs';
//# sourceMappingURL=SuperagentRateLimiter.d.mts.map