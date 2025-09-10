/**
 * The GetDeliveryOffersRequest model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetDeliveryOffersRequest
 * @version 2020-07-01
 */
export class GetDeliveryOffersRequest {
    /**
     * Constructs a <code>GetDeliveryOffersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetDeliveryOffersRequest} obj Optional instance to populate.
     * @return {GetDeliveryOffersRequest} The populated <code>GetDeliveryOffersRequest</code> instance.
     */
    static constructFromObject(data: any, obj: GetDeliveryOffersRequest): GetDeliveryOffersRequest;
    /**
     * Constructs a new <code>GetDeliveryOffersRequest</code>.
     * The request body schema for the &#x60;getDeliveryOffers&#x60; operation.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/GetDeliveryOffersRequest
     * @class
     * @param product {GetDeliveryOffersProduct}
     * @param terms {GetDeliveryOffersTerms}
     */
    constructor(product: GetDeliveryOffersProduct, terms: GetDeliveryOffersTerms);
    product: GetDeliveryOffersProduct;
    terms: GetDeliveryOffersTerms;
}
import { GetDeliveryOffersProduct } from './GetDeliveryOffersProduct.js';
import { GetDeliveryOffersTerms } from './GetDeliveryOffersTerms.js';
//# sourceMappingURL=GetDeliveryOffersRequest.d.ts.map