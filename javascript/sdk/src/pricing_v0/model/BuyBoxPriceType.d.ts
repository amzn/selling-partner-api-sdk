/**
 * The BuyBoxPriceType model module.
 * @module pricing_v0/model/BuyBoxPriceType
 * @version v0
 */
export class BuyBoxPriceType {
    /**
     * Constructs a <code>BuyBoxPriceType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BuyBoxPriceType} obj Optional instance to populate.
     * @return {BuyBoxPriceType} The populated <code>BuyBoxPriceType</code> instance.
     */
    static constructFromObject(data: any, obj: BuyBoxPriceType): BuyBoxPriceType;
    /**
     * Constructs a new <code>BuyBoxPriceType</code>.
     * Schema for an individual buybox price.
     * @alias module:pricing_v0/model/BuyBoxPriceType
     * @class
     * @param condition {String} Indicates the condition of the item. For example: New, Used, Collectible, Refurbished, or Club.
     * @param landedPrice {MoneyType}
     * @param listingPrice {MoneyType}
     * @param shipping {MoneyType}
     */
    constructor(condition: string, landedPrice: MoneyType, listingPrice: MoneyType, shipping: MoneyType);
    condition: string;
    landedPrice: MoneyType;
    listingPrice: MoneyType;
    shipping: MoneyType;
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
     * @member {Points} points
     * @type {Points}
     */
    points: Points;
    /**
     * The seller identifier for the offer.
     * @member {String} sellerId
     * @type {String}
     */
    sellerId: string;
}
import { MoneyType } from './MoneyType.js';
import { OfferCustomerType } from './OfferCustomerType.js';
import { QuantityDiscountType } from './QuantityDiscountType.js';
import { Points } from './Points.js';
//# sourceMappingURL=BuyBoxPriceType.d.ts.map