/**
 * The GetOffersResult model module.
 * @module pricing_v0/model/GetOffersResult
 * @version v0
 */
export class GetOffersResult {
    /**
     * Constructs a <code>GetOffersResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetOffersResult} obj Optional instance to populate.
     * @return {GetOffersResult} The populated <code>GetOffersResult</code> instance.
     */
    static constructFromObject(data: any, obj: GetOffersResult): GetOffersResult;
    /**
     * Constructs a new <code>GetOffersResult</code>.
     * The payload for the getListingOffers and getItemOffers operations.
     * @alias module:pricing_v0/model/GetOffersResult
     * @class
     * @param marketplaceID {String} A marketplace identifier.
     * @param itemCondition {ConditionType}
     * @param status {String} The status of the operation.
     * @param identifier {ItemIdentifier}
     * @param summary {Summary}
     * @param offers {OfferDetail[]} A list of offer details. The list is the same length as the TotalOfferCount in the Summary or 20, whichever is less.
     */
    constructor(marketplaceID: string, itemCondition: ConditionType, status: string, identifier: ItemIdentifier, summary: Summary, offers: OfferDetail[]);
    marketplaceID: string;
    itemCondition: ConditionType;
    status: string;
    identifier: ItemIdentifier;
    summary: Summary;
    offers: OfferDetail[];
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @member {String} ASIN
     * @type {String}
     */
    ASIN: string;
    /**
     * The stock keeping unit (SKU) of the item.
     * @member {String} SKU
     * @type {String}
     */
    SKU: string;
}
import { ConditionType } from './ConditionType.js';
import { ItemIdentifier } from './ItemIdentifier.js';
import { Summary } from './Summary.js';
import { OfferDetail } from './OfferDetail.js';
//# sourceMappingURL=GetOffersResult.d.ts.map