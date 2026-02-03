/**
 * The OfferDetail model module.
 * @module pricing_v0/model/OfferDetail
 * @version v0
 */
export class OfferDetail {
    /**
     * Constructs a <code>OfferDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OfferDetail} obj Optional instance to populate.
     * @return {OfferDetail} The populated <code>OfferDetail</code> instance.
     */
    static constructFromObject(data: any, obj: OfferDetail): OfferDetail;
    /**
     * Constructs a new <code>OfferDetail</code>.
     * Schema for an individual offer. Object in &#x60;OfferDetailList&#x60;.
     * @alias module:pricing_v0/model/OfferDetail
     * @class
     * @param subCondition {String} The subcondition of the item. Subcondition values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other.
     * @param shippingTime {DetailedShippingTimeType}
     * @param listingPrice {MoneyType}
     * @param shipping {MoneyType}
     * @param isFulfilledByAmazon {Boolean} When true, the offer is fulfilled by Amazon.
     */
    constructor(subCondition: string, shippingTime: DetailedShippingTimeType, listingPrice: MoneyType, shipping: MoneyType, isFulfilledByAmazon: boolean);
    subCondition: string;
    shippingTime: DetailedShippingTimeType;
    listingPrice: MoneyType;
    shipping: MoneyType;
    isFulfilledByAmazon: boolean;
    /**
     * When true, this is the seller's offer.
     * @member {Boolean} myOffer
     * @type {Boolean}
     */
    myOffer: boolean;
    /**
     * @member {OfferCustomerType} offerType
     * @type {OfferCustomerType}
     */
    offerType: OfferCustomerType;
    /**
     * The seller identifier for the offer.
     * @member {String} sellerId
     * @type {String}
     */
    sellerId: string;
    /**
     * Information about the condition of the item.
     * @member {String} conditionNotes
     * @type {String}
     */
    conditionNotes: string;
    /**
     * @member {SellerFeedbackType} sellerFeedbackRating
     * @type {SellerFeedbackType}
     */
    sellerFeedbackRating: SellerFeedbackType;
    /**
     * List of `QuantityDiscountPrice` that contains item's pricing information when buy in bulk.
     * @member {Array[]} quantityDiscountPrices
     * @type {Array[]}
     */
    quantityDiscountPrices: any[][];
    /**
     * @member {Points} points
     * @type {Points}
     */
    points: Points;
    /**
     * @member {ShipsFromType} shipsFrom
     * @type {ShipsFromType}
     */
    shipsFrom: ShipsFromType;
    /**
     * @member {PrimeInformationType} primeInformation
     * @type {PrimeInformationType}
     */
    primeInformation: PrimeInformationType;
    /**
     * When true, the offer is currently in the Buy Box. There can be up to two Buy Box winners at any time per ASIN, one that is eligible for Prime and one that is not eligible for Prime.
     * @member {Boolean} isBuyBoxWinner
     * @type {Boolean}
     */
    isBuyBoxWinner: boolean;
    /**
     * When true, the seller of the item is eligible to win the Buy Box.
     * @member {Boolean} isFeaturedMerchant
     * @type {Boolean}
     */
    isFeaturedMerchant: boolean;
}
import { DetailedShippingTimeType } from './DetailedShippingTimeType.js';
import { MoneyType } from './MoneyType.js';
import { OfferCustomerType } from './OfferCustomerType.js';
import { SellerFeedbackType } from './SellerFeedbackType.js';
import { Points } from './Points.js';
import { ShipsFromType } from './ShipsFromType.js';
import { PrimeInformationType } from './PrimeInformationType.js';
//# sourceMappingURL=OfferDetail.d.ts.map