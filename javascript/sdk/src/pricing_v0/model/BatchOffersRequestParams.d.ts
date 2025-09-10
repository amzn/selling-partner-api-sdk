/**
 * The BatchOffersRequestParams model module.
 * @module pricing_v0/model/BatchOffersRequestParams
 * @version v0
 */
export class BatchOffersRequestParams {
    /**
     * Constructs a <code>BatchOffersRequestParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BatchOffersRequestParams} obj Optional instance to populate.
     * @return {BatchOffersRequestParams} The populated <code>BatchOffersRequestParams</code> instance.
     */
    static constructFromObject(data: any, obj: BatchOffersRequestParams): BatchOffersRequestParams;
    /**
     * Constructs a new <code>BatchOffersRequestParams</code>.
     * Common request parameters that can be accepted by &#x60;ItemOffersRequest&#x60; and &#x60;ListingOffersRequest&#x60;
     * @alias module:pricing_v0/model/BatchOffersRequestParams
     * @class
     * @param marketplaceId {String} A marketplace identifier. Specifies the marketplace for which prices are returned.
     * @param itemCondition {ItemCondition}
     */
    constructor(marketplaceId: string, itemCondition: ItemCondition);
    marketplaceId: string;
    itemCondition: ItemCondition;
    /**
     * @member {CustomerType} customerType
     * @type {CustomerType}
     */
    customerType: CustomerType;
}
import { ItemCondition } from './ItemCondition.js';
import { CustomerType } from './CustomerType.js';
//# sourceMappingURL=BatchOffersRequestParams.d.ts.map