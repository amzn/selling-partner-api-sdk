/**
 * The LowestPriceType model module.
 * @module pricing_v0/model/LowestPriceType
 * @version v0
 */
export class LowestPriceType {
    /**
     * Constructs a <code>LowestPriceType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LowestPriceType} obj Optional instance to populate.
     * @return {LowestPriceType} The populated <code>LowestPriceType</code> instance.
     */
    static constructFromObject(data: any, obj: LowestPriceType): LowestPriceType;
    /**
     * Constructs a new <code>LowestPriceType</code>.
     * Schema for an individual lowest price.
     * @alias module:pricing_v0/model/LowestPriceType
     * @class
     * @param condition {String} Indicates the condition of the item. For example: New, Used, Collectible, Refurbished, or Club.
     * @param fulfillmentChannel {String} Indicates whether the item is fulfilled by Amazon or by the seller.
     * @param listingPrice {MoneyType}
     */
    constructor(condition: string, fulfillmentChannel: string, listingPrice: MoneyType);
    condition: string;
    fulfillmentChannel: string;
    listingPrice: MoneyType;
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
     * @member {MoneyType} landedPrice
     * @type {MoneyType}
     */
    landedPrice: MoneyType;
    /**
     * @member {MoneyType} shipping
     * @type {MoneyType}
     */
    shipping: MoneyType;
    /**
     * @member {Points} points
     * @type {Points}
     */
    points: Points;
}
import { MoneyType } from './MoneyType.js';
import { OfferCustomerType } from './OfferCustomerType.js';
import { QuantityDiscountType } from './QuantityDiscountType.js';
import { Points } from './Points.js';
//# sourceMappingURL=LowestPriceType.d.ts.map