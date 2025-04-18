import { parse } from 'yaml';
import { readFile } from 'fs/promises';
import { RateLimitConfiguration } from './RateLimitConfiguration.mjs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { join } from 'path';

export class DefaultRateLimitFetcher {

    #defaultRateLimitMap;

    constructor() {
        this.#defaultRateLimitMap = null;
    }

    // Initialize the configuration by loading the YAML file
    async init() {
        const fileName = fileURLToPath(import.meta.url);
        const dirName = dirname(fileName);
        try {
            const fileContents = await readFile(join(dirName, 'rate-limits.yml'), 'utf8');            
            this.#defaultRateLimitMap = parse(fileContents);
        } catch (error) {
            this.#defaultRateLimitMap = {};
            throw new error('Error loading rate-limits.yml:', error);
        }
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

    // Singleton implementation
    static #instance = null;

    static async create() {
        const instance = new DefaultRateLimitFetcher();
        await instance.init();
        return instance;
    }

    static async getInstance() {
        if (!DefaultRateLimitFetcher.#instance) {
            DefaultRateLimitFetcher.#instance = await DefaultRateLimitFetcher.create();
        }
        return DefaultRateLimitFetcher.#instance;
    }
}