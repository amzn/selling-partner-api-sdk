/**
 * The LowestPricedOffer model module.
 * @module pricing_v2022_05_01/model/LowestPricedOffer
 * @version 2022-05-01
 */
export class LowestPricedOffer {
    /**
     * Constructs a <code>LowestPricedOffer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LowestPricedOffer} obj Optional instance to populate.
     * @return {LowestPricedOffer} The populated <code>LowestPricedOffer</code> instance.
     */
    static constructFromObject(data: any, obj: LowestPricedOffer): LowestPricedOffer;
    /**
     * Constructs a new <code>LowestPricedOffer</code>.
     * Describes the lowest priced offers for the specified item condition and offer type.
     * @alias module:pricing_v2022_05_01/model/LowestPricedOffer
     * @class
     * @param lowestPricedOffersInput {LowestPricedOffersInput}
     * @param offers {[Offer]} A list of up to 20 lowest priced offers that match the criteria specified in `lowestPricedOffersInput`.
     */
    constructor(lowestPricedOffersInput: LowestPricedOffersInput, offers: [Offer]);
    lowestPricedOffersInput: LowestPricedOffersInput;
    offers: [Offer];
}
import { LowestPricedOffersInput } from './LowestPricedOffersInput.js';
import { Offer } from './Offer.js';
//# sourceMappingURL=LowestPricedOffer.d.ts.map