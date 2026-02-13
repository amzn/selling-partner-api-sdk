/**
 * The OfferType model module.
 * @module pricing_v0/model/OfferType
 * @version v0
 */
export class OfferType {
    /**
     * Constructs a <code>OfferType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OfferType} obj Optional instance to populate.
     * @return {OfferType} The populated <code>OfferType</code> instance.
     */
    static constructFromObject(data: any, obj: OfferType): OfferType;
    /**
     * Constructs a new <code>OfferType</code>.
     * Schema for an individual offer.
     * @alias module:pricing_v0/model/OfferType
     * @class
     * @param buyingPrice {PriceType}
     * @param regularPrice {MoneyType}
     * @param fulfillmentChannel {String} The fulfillment channel for the offer listing. Possible values:  * Amazon - Fulfilled by Amazon. * Merchant - Fulfilled by the seller.
     * @param itemCondition {String} The item condition for the offer listing. Possible values: New, Used, Collectible, Refurbished, or Club.
     * @param itemSubCondition {String} The item subcondition for the offer listing. Possible values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other.
     * @param sellerSKU {String} The seller stock keeping unit (SKU) of the item.
     */
    constructor(buyingPrice: PriceType, regularPrice: MoneyType, fulfillmentChannel: string, itemCondition: string, itemSubCondition: string, sellerSKU: string);
    buyingPrice: PriceType;
    regularPrice: MoneyType;
    fulfillmentChannel: string;
    itemCondition: string;
    itemSubCondition: string;
    sellerSKU: string;
    /**
     * @member {OfferCustomerType} offerType
     * @type {OfferCustomerType}
     */
    offerType: OfferCustomerType;
    /**
     * @member {MoneyType} businessPrice
     * @type {MoneyType}
     */
    businessPrice: MoneyType;
    /**
     * List of `QuantityDiscountPrice` that contains item's pricing information when buy in bulk.
     * @member {QuantityDiscountPriceType[]} quantityDiscountPrices
     * @type {QuantityDiscountPriceType[]}
     */
    quantityDiscountPrices: QuantityDiscountPriceType[];
}
import { PriceType } from './PriceType.js';
import { MoneyType } from './MoneyType.js';
import { OfferCustomerType } from './OfferCustomerType.js';
import { QuantityDiscountPriceType } from './QuantityDiscountPriceType.js';
//# sourceMappingURL=OfferType.d.ts.map