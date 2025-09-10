/**
 * The LowestPricedOffersInput model module.
 * @module pricing_v2022_05_01/model/LowestPricedOffersInput
 * @version 2022-05-01
 */
export class LowestPricedOffersInput {
    /**
     * Constructs a <code>LowestPricedOffersInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LowestPricedOffersInput} obj Optional instance to populate.
     * @return {LowestPricedOffersInput} The populated <code>LowestPricedOffersInput</code> instance.
     */
    static constructFromObject(data: any, obj: LowestPricedOffersInput): LowestPricedOffersInput;
    /**
     * Constructs a new <code>LowestPricedOffersInput</code>.
     * The input required for building &#x60;LowestPricedOffers&#x60; data in the response.
     * @alias module:pricing_v2022_05_01/model/LowestPricedOffersInput
     * @class
     * @param itemCondition {Condition}
     * @param offerType {String} The input parameter specifies the type of offers requested for `LowestPricedOffers`. This applies to `Consumer` and `Business` offers. `Consumer` is the default `offerType`.
     */
    constructor(itemCondition: Condition, offerType: string);
    itemCondition: Condition;
    offerType: string;
}
export namespace LowestPricedOffersInput {
    namespace OfferTypeEnum {
        let Consumer: string;
    }
    /**
     * *
     */
    type OfferTypeEnum = string;
}
import { Condition } from './Condition.js';
//# sourceMappingURL=LowestPricedOffersInput.d.ts.map