import Bottleneck from 'bottleneck';
import { RateLimitConfiguration } from './RateLimitConfiguration.mjs';

export class SuperagentRateLimiter {
    /** @type {Bottleneck} */
    #limiter;

    /**
     * @param {RateLimitConfiguration} config 
     */
    constructor(config) {
        if (!config.getRateLimitPermit() || !config.getBurstRequests()) {
            throw new Error("Invalid parameter for RateLimitConfiguration");
        }

        const rateLimit = config.getRateLimitPermit();
        const burstRequests = config.getBurstRequests();
        
        //Math.floor to handle special case for ShipmentInvoiceApi API
        const refreshAmount = rateLimit < 1 ? 1 : Math.floor(rateLimit);
        const refreshInterval = rateLimit < 1 ? Math.ceil(1/rateLimit) * 1000 : 1000;

        this.#limiter = new Bottleneck({
            reservoir: burstRequests,  // Initial capacity
            reservoirIncreaseAmount: refreshAmount, // How many tokens to increase during each refresh
            reservoirIncreaseInterval: refreshInterval, // increase interval in milliseconds
            reservoirIncreaseMaximum: burstRequests, // maximum token bucket size
            maxConcurrent: burstRequests, // Maximum number of requests running at the same time
            highWater: 0,
            strategy: Bottleneck.strategy.BLOCK, // Block requests when rate limit reached
        });
          
    }

    /**
     * Creates a Superagent plugin that implements rate limiting
     * @returns {function} Superagent plugin
     */
    getPlugin() {
        return (request) => {
            // Create a promise that must resolve before the request is sent
            const rateLimitPromise = new Promise((resolve, reject) => {
                this.#limiter.schedule(async () => {
                    resolve();
                }).catch(error => {
                    reject(new Error(`Rate limit exceed error: ${error.message}`));
                });
            });

            // Modify the request to wait for rate limiting
            const originalEnd = request.end;
            request.end = function (fn) {
                rateLimitPromise
                    .then(() => {
                        originalEnd.call(request, fn);
                    })
                    .catch(error => {
                        fn(error);
                    });
            };
        };
    }
}