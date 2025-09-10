/**
 * The FeaturedOffer model module.
 * @module pricing_v2022_05_01/model/FeaturedOffer
 * @version 2022-05-01
 */
export class FeaturedOffer {
    /**
     * Constructs a <code>FeaturedOffer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FeaturedOffer} obj Optional instance to populate.
     * @return {FeaturedOffer} The populated <code>FeaturedOffer</code> instance.
     */
    static constructFromObject(data: any, obj: FeaturedOffer): FeaturedOffer;
    /**
     * Constructs a new <code>FeaturedOffer</code>.
     * Schema for &#x60;currentFeaturedOffer&#x60; or &#x60;competingFeaturedOffer&#x60;.
     * @alias module:pricing_v2022_05_01/model/FeaturedOffer
     * @class
     * @param offerIdentifier {OfferIdentifier}
     */
    constructor(offerIdentifier: OfferIdentifier);
    offerIdentifier: OfferIdentifier;
    /**
     * @member {Condition} condition
     * @type {Condition}
     */
    condition: Condition;
    /**
     * @member {Price} price
     * @type {Price}
     */
    price: Price;
}
import { OfferIdentifier } from './OfferIdentifier.js';
import { Condition } from './Condition.js';
import { Price } from './Price.js';
//# sourceMappingURL=FeaturedOffer.d.ts.map