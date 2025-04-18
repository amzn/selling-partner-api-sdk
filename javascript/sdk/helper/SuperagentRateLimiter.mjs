import Bottleneck from 'bottleneck';
import { RateLimitConfiguration } from "./RateLimitConfiguration.mjs";

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
            reservoirRefreshAmount: refreshAmount, // How many tokens to add during each refresh
            reservoirRefreshInterval: refreshInterval, // Refresh interval in milliseconds
            maxConcurrent: burstRequests // Maximum number of requests running at the same time
        });
          
    }

    /**
     * Creates a Superagent plugin that implements rate limiting
     * @returns {function} Superagent plugin
     */
    getPlugin() {
        return (request) => {
            // Add rate limiting before the request is sent
            request.on('request', async () => {
                try {
                    // Schedule the request
                    await this.#limiter.schedule(async () => {
                        return Promise.resolve();
                    });
                } catch (error) {
                    throw new Error(`Rate limit exceed error: ${error.message}`);
                }
            });
        };
    }
}