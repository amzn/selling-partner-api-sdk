/**
 * The CompetitivePriceType model module.
 * @module pricing_v0/model/CompetitivePriceType
 * @version v0
 */
export class CompetitivePriceType {
    /**
     * Constructs a <code>CompetitivePriceType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CompetitivePriceType} obj Optional instance to populate.
     * @return {CompetitivePriceType} The populated <code>CompetitivePriceType</code> instance.
     */
    static constructFromObject(data: any, obj: CompetitivePriceType): CompetitivePriceType;
    /**
     * Constructs a new <code>CompetitivePriceType</code>.
     * Schema for competitive pricing information
     * @alias module:pricing_v0/model/CompetitivePriceType
     * @class
     * @param competitivePriceId {String} The pricing model for each price that is returned.  Possible values:  * 1 - New Buy Box Price. * 2 - Used Buy Box Price.
     * @param price {PriceType}
     */
    constructor(competitivePriceId: string, price: PriceType);
    competitivePriceId: string;
    price: PriceType;
    /**
     * Indicates the condition of the item whose pricing information is returned. Possible values are: New, Used, Collectible, Refurbished, or Club.
     * @member {String} condition
     * @type {String}
     */
    condition: string;
    /**
     * Indicates the subcondition of the item whose pricing information is returned. Possible values are: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other.
     * @member {String} subcondition
     * @type {String}
     */
    subcondition: string;
    /**
     * @member {OfferCustomerType} offerType
     * @type {OfferCustomerType}
     */
    offerType: OfferCustomerType;
    /**
     * Indicates at what quantity this price becomes active.
     * @member {Number} quantityTier
     * @type {Number}
     */
    quantityTier: number;
    /**
     * @member {QuantityDiscountType} quantityDiscountType
     * @type {QuantityDiscountType}
     */
    quantityDiscountType: QuantityDiscountType;
    /**
     * The seller identifier for the offer.
     * @member {String} sellerId
     * @type {String}
     */
    sellerId: string;
    /**
     *  Indicates whether or not the pricing information is for an offer listing that belongs to the requester. The requester is the seller associated with the SellerId that was submitted with the request. Possible values are: true and false.
     * @member {Boolean} belongsToRequester
     * @type {Boolean}
     */
    belongsToRequester: boolean;
}
import { PriceType } from './PriceType.js';
import { OfferCustomerType } from './OfferCustomerType.js';
import { QuantityDiscountType } from './QuantityDiscountType.js';
//# sourceMappingURL=CompetitivePriceType.d.ts.map