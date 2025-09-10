/**
 * The ItemOffersRequestParams model module.
 * @module pricing_v0/model/ItemOffersRequestParams
 * @version v0
 */
export class ItemOffersRequestParams {
    /**
     * Constructs a <code>ItemOffersRequestParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemOffersRequestParams} obj Optional instance to populate.
     * @return {ItemOffersRequestParams} The populated <code>ItemOffersRequestParams</code> instance.
     */
    static constructFromObject(data: any, obj: ItemOffersRequestParams): ItemOffersRequestParams;
    /**
     * Constructs a new <code>ItemOffersRequestParams</code>.
     * List of request parameters that can be accepted by &#x60;ItemOffersRequest&#x60;
     * @alias module:pricing_v0/model/ItemOffersRequestParams
     * @class
     * @implements module:pricing_v0/model/BatchOffersRequestParams
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
    /**
     * The Amazon Standard Identification Number (ASIN) of the item. This is the same Asin passed as a request parameter.
     * @member {String} asin
     * @type {String}
     */
    asin: string;
}
import { ItemCondition } from './ItemCondition.js';
import { CustomerType } from './CustomerType.js';
//# sourceMappingURL=ItemOffersRequestParams.d.ts.map