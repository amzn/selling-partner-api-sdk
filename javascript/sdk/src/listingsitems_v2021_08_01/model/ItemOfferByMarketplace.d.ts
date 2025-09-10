/**
 * The ItemOfferByMarketplace model module.
 * @module listingsitems_v2021_08_01/model/ItemOfferByMarketplace
 * @version 2021-08-01
 */
export class ItemOfferByMarketplace {
    /**
     * Constructs a <code>ItemOfferByMarketplace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemOfferByMarketplace} obj Optional instance to populate.
     * @return {ItemOfferByMarketplace} The populated <code>ItemOfferByMarketplace</code> instance.
     */
    static constructFromObject(data: any, obj: ItemOfferByMarketplace): ItemOfferByMarketplace;
    /**
     * Constructs a new <code>ItemOfferByMarketplace</code>.
     * Offer details of a listings item for an Amazon marketplace.
     * @alias module:listingsitems_v2021_08_01/model/ItemOfferByMarketplace
     * @class
     * @param marketplaceId {String} The Amazon marketplace identifier.
     * @param offerType {String} Type of offer for the listings item.
     * @param price {Money}
     */
    constructor(marketplaceId: string, offerType: string, price: Money);
    marketplaceId: string;
    offerType: string;
    price: Money;
    /**
     * @member {Points} points
     * @type {Points}
     */
    points: Points;
    /**
     * @member {Audience} audience
     * @type {Audience}
     */
    audience: Audience;
}
export namespace ItemOfferByMarketplace {
    namespace OfferTypeEnum {
        let B2C: string;
        let B2B: string;
    }
    /**
     * *
     */
    type OfferTypeEnum = string;
}
import { Money } from './Money.js';
import { Points } from './Points.js';
import { Audience } from './Audience.js';
//# sourceMappingURL=ItemOfferByMarketplace.d.ts.map