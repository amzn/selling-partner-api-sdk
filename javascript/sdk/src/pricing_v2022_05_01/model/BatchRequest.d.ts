/**
 * The BatchRequest model module.
 * @module pricing_v2022_05_01/model/BatchRequest
 * @version 2022-05-01
 */
export class BatchRequest {
    /**
     * Constructs a <code>BatchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BatchRequest} obj Optional instance to populate.
     * @return {BatchRequest} The populated <code>BatchRequest</code> instance.
     */
    static constructFromObject(data: any, obj: BatchRequest): BatchRequest;
    /**
     * Constructs a new <code>BatchRequest</code>.
     * The common properties for individual requests within a batch.
     * @alias module:pricing_v2022_05_01/model/BatchRequest
     * @class
     * @param uri {String} The URI associated with an individual request within a batch. For `FeaturedOfferExpectedPrice`, this is `/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice`.
     * @param method {HttpMethod}
     */
    constructor(uri: string, method: HttpMethod);
    uri: string;
    method: HttpMethod;
    /**
     * Additional HTTP body information that is associated with an individual request within a batch.
     * @member {{String: Object}} body
     * @type {{String: Object}}
     */
    body: {
        String: any;
    };
    /**
     * A mapping of additional HTTP headers to send or receive for an individual request within a batch.
     * @member {{String: String}} headers
     * @type {{String: String}}
     */
    headers: {
        String: string;
    };
}
import { HttpMethod } from './HttpMethod.js';
//# sourceMappingURL=BatchRequest.d.ts.map