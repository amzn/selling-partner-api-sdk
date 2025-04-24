import { RateLimitConfiguration } from './RateLimitConfiguration.mjs';
import { defaultRateLimitMap } from './DefaultRateLimitMap.mjs';

export class DefaultRateLimitFetcher {

    #defaultRateLimitMap;

    constructor() {
        this.#defaultRateLimitMap = defaultRateLimitMap;
    }

    getLimit(operation) {
        const burst = this.getValue(operation, 1);
        const rateLimitPermit = this.getValue(operation, 0) / this.getValue(operation, 2);
        return new RateLimitConfiguration(rateLimitPermit, burst);
    }

    getValue(operation, position) {
        if (this.#defaultRateLimitMap && 
            this.#defaultRateLimitMap[operation] && 
            position < this.#defaultRateLimitMap[operation].length) {
            return this.#defaultRateLimitMap[operation][position];
        }
        return 1;
    }
}