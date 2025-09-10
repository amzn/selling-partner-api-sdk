/**
 * The SegmentedFeaturedOffer model module.
 * @module pricing_v2022_05_01/model/SegmentedFeaturedOffer
 * @version 2022-05-01
 */
export class SegmentedFeaturedOffer {
    /**
     * Constructs a <code>SegmentedFeaturedOffer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SegmentedFeaturedOffer} obj Optional instance to populate.
     * @return {SegmentedFeaturedOffer} The populated <code>SegmentedFeaturedOffer</code> instance.
     */
    static constructFromObject(data: any, obj: SegmentedFeaturedOffer): SegmentedFeaturedOffer;
    /**
     * Constructs a new <code>SegmentedFeaturedOffer</code>.
     * A product offer with segment information indicating where it&#39;s featured.
     * @alias module:pricing_v2022_05_01/model/SegmentedFeaturedOffer
     * @class
     * @implements module:pricing_v2022_05_01/model/Offer
     * @param sellerId {String} The seller identifier for the offer.
     * @param condition {Condition}
     * @param fulfillmentType {FulfillmentType}
     * @param listingPrice {MoneyType}
     * @param featuredOfferSegments {[FeaturedOfferSegment]} The list of segment information in which the offer is featured.
     */
    constructor(sellerId: string, condition: Condition, fulfillmentType: FulfillmentType, listingPrice: MoneyType, featuredOfferSegments: [FeaturedOfferSegment]);
    sellerId: string;
    condition: Condition;
    fulfillmentType: FulfillmentType;
    listingPrice: MoneyType;
    featuredOfferSegments: [FeaturedOfferSegment];
    /**
     * The item subcondition of the offer.
     * @member {String} subCondition
     * @type {String}
     */
    subCondition: string;
    /**
     * A list of shipping options associated with this offer
     * @member {[ShippingOption]} shippingOptions
     * @type {[ShippingOption]}
     */
    shippingOptions: [ShippingOption];
    /**
     * @member {Points} points
     * @type {Points}
     */
    points: Points;
    /**
     * @member {PrimeDetails} primeDetails
     * @type {PrimeDetails}
     */
    primeDetails: PrimeDetails;
}
export namespace SegmentedFeaturedOffer {
    namespace SubConditionEnum {
        let New: string;
        let Mint: string;
        let VeryGood: string;
        let Good: string;
        let Acceptable: string;
        let Poor: string;
        let Club: string;
        let OEM: string;
        let Warranty: string;
        let RefurbishedWarranty: string;
        let Refurbished: string;
        let OpenBox: string;
        let Other: string;
    }
    /**
     * *
     */
    type SubConditionEnum = string;
}
import { Condition } from './Condition.js';
import { FulfillmentType } from './FulfillmentType.js';
import { MoneyType } from './MoneyType.js';
import { FeaturedOfferSegment } from './FeaturedOfferSegment.js';
import { ShippingOption } from './ShippingOption.js';
import { Points } from './Points.js';
import { PrimeDetails } from './PrimeDetails.js';
//# sourceMappingURL=SegmentedFeaturedOffer.d.ts.map