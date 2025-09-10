/**
 * The ListingOffersRequestParams model module.
 * @module pricing_v0/model/ListingOffersRequestParams
 * @version v0
 */
export class ListingOffersRequestParams {
    /**
     * Constructs a <code>ListingOffersRequestParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListingOffersRequestParams} obj Optional instance to populate.
     * @return {ListingOffersRequestParams} The populated <code>ListingOffersRequestParams</code> instance.
     */
    static constructFromObject(data: any, obj: ListingOffersRequestParams): ListingOffersRequestParams;
    /**
     * Constructs a new <code>ListingOffersRequestParams</code>.
     * List of request parameters that can be accepted by &#x60;ListingOffersRequest&#x60;
     * @alias module:pricing_v0/model/ListingOffersRequestParams
     * @class
     * @implements module:pricing_v0/model/BatchOffersRequestParams
     * @param marketplaceId {String} A marketplace identifier. Specifies the marketplace for which prices are returned.
     * @param itemCondition {ItemCondition}
     * @param sellerSKU {String} The seller stock keeping unit (SKU) of the item. This is the same SKU passed as a path parameter.
     */
    constructor(marketplaceId: string, itemCondition: ItemCondition, sellerSKU: string);
    marketplaceId: string;
    itemCondition: ItemCondition;
    sellerSKU: string;
    /**
     * @member {CustomerType} customerType
     * @type {CustomerType}
     */
    customerType: CustomerType;
}
import { ItemCondition } from './ItemCondition.js';
import { CustomerType } from './CustomerType.js';
//# sourceMappingURL=ListingOffersRequestParams.d.ts.map