/**
 * The ItemOffersRequest model module.
 * @module pricing_v0/model/ItemOffersRequest
 * @version v0
 */
export class ItemOffersRequest {
    /**
     * Constructs a <code>ItemOffersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemOffersRequest} obj Optional instance to populate.
     * @return {ItemOffersRequest} The populated <code>ItemOffersRequest</code> instance.
     */
    static constructFromObject(data: any, obj: ItemOffersRequest): ItemOffersRequest;
    /**
     * Constructs a new <code>ItemOffersRequest</code>.
     * List of request parameters can be accepted by &#x60;ItemOffersRequests&#x60; operation
     * @alias module:pricing_v0/model/ItemOffersRequest
     * @class
     * @implements module:pricing_v0/model/BatchRequest
     * @implements module:pricing_v0/model/BatchOffersRequestParams
     * @param uri {String} The resource path of the operation you are calling in batch without any query parameters.  If you are calling `getItemOffersBatch`, supply the path of `getItemOffers`.  **Example:** `/products/pricing/v0/items/B000P6Q7MY/offers`  If you are calling `getListingOffersBatch`, supply the path of `getListingOffers`.  **Example:** `/products/pricing/v0/listings/B000P6Q7MY/offers`
     * @param method {HttpMethod}
     * @param marketplaceId {String} A marketplace identifier. Specifies the marketplace for which prices are returned.
     * @param itemCondition {ItemCondition}
     */
    constructor(uri: string, method: HttpMethod, marketplaceId: string, itemCondition: ItemCondition);
    uri: string;
    method: HttpMethod;
    marketplaceId: string;
    itemCondition: ItemCondition;
    /**
     * A mapping of additional HTTP headers to send/receive for the individual batch request.
     * @member {{String: String}} headers
     * @type {{String: String}}
     */
    headers: {
        String: string;
    };
    /**
     * @member {CustomerType} customerType
     * @type {CustomerType}
     */
    customerType: CustomerType;
}
import { HttpMethod } from './HttpMethod.js';
import { ItemCondition } from './ItemCondition.js';
import { CustomerType } from './CustomerType.js';
//# sourceMappingURL=ItemOffersRequest.d.ts.map