/**
 * The OfferIdentifier model module.
 * @module pricing_v2022_05_01/model/OfferIdentifier
 * @version 2022-05-01
 */
export class OfferIdentifier {
    /**
     * Constructs a <code>OfferIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OfferIdentifier} obj Optional instance to populate.
     * @return {OfferIdentifier} The populated <code>OfferIdentifier</code> instance.
     */
    static constructFromObject(data: any, obj: OfferIdentifier): OfferIdentifier;
    /**
     * Constructs a new <code>OfferIdentifier</code>.
     * Identifies an offer from a particular seller for a specified ASIN.
     * @alias module:pricing_v2022_05_01/model/OfferIdentifier
     * @class
     * @param marketplaceId {String} The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @param asin {String} The ASIN of the item.
     */
    constructor(marketplaceId: string, asin: string);
    marketplaceId: string;
    asin: string;
    /**
     * The seller identifier for the offer.
     * @member {String} sellerId
     * @type {String}
     */
    sellerId: string;
    /**
     * The seller SKU of the item. This will only be present for the target offer, which belongs to the requesting seller.
     * @member {String} sku
     * @type {String}
     */
    sku: string;
    /**
     * @member {FulfillmentType} fulfillmentType
     * @type {FulfillmentType}
     */
    fulfillmentType: FulfillmentType;
}
import { FulfillmentType } from './FulfillmentType.js';
//# sourceMappingURL=OfferIdentifier.d.ts.map