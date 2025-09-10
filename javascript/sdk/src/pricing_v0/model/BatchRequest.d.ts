/**
 * The BatchRequest model module.
 * @module pricing_v0/model/BatchRequest
 * @version v0
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
     * Common properties of batch requests against individual APIs.
     * @alias module:pricing_v0/model/BatchRequest
     * @class
     * @param uri {String} The resource path of the operation you are calling in batch without any query parameters.  If you are calling `getItemOffersBatch`, supply the path of `getItemOffers`.  **Example:** `/products/pricing/v0/items/B000P6Q7MY/offers`  If you are calling `getListingOffersBatch`, supply the path of `getListingOffers`.  **Example:** `/products/pricing/v0/listings/B000P6Q7MY/offers`
     * @param method {HttpMethod}
     */
    constructor(uri: string, method: HttpMethod);
    uri: string;
    method: HttpMethod;
    /**
     * A mapping of additional HTTP headers to send/receive for the individual batch request.
     * @member {{String: String}} headers
     * @type {{String: String}}
     */
    headers: {
        String: string;
    };
}
import { HttpMethod } from './HttpMethod.js';
//# sourceMappingURL=BatchRequest.d.ts.map