/**
 * The FeaturedOfferExpectedPrice model module.
 * @module pricing_v2022_05_01/model/FeaturedOfferExpectedPrice
 * @version 2022-05-01
 */
export class FeaturedOfferExpectedPrice {
    /**
     * Constructs a <code>FeaturedOfferExpectedPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FeaturedOfferExpectedPrice} obj Optional instance to populate.
     * @return {FeaturedOfferExpectedPrice} The populated <code>FeaturedOfferExpectedPrice</code> instance.
     */
    static constructFromObject(data: any, obj: FeaturedOfferExpectedPrice): FeaturedOfferExpectedPrice;
    /**
     * Constructs a new <code>FeaturedOfferExpectedPrice</code>.
     * The item price at or below which the target offer may be featured.
     * @alias module:pricing_v2022_05_01/model/FeaturedOfferExpectedPrice
     * @class
     * @param listingPrice {MoneyType}
     */
    constructor(listingPrice: MoneyType);
    listingPrice: MoneyType;
    /**
     * @member {Points} points
     * @type {Points}
     */
    points: Points;
}
import { MoneyType } from './MoneyType.js';
import { Points } from './Points.js';
//# sourceMappingURL=FeaturedOfferExpectedPrice.d.ts.map