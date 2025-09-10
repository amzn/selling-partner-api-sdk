/**
 * The PriceToEstimateFees model module.
 * @module productfees_v0/model/PriceToEstimateFees
 * @version v0
 */
export class PriceToEstimateFees {
    /**
     * Constructs a <code>PriceToEstimateFees</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PriceToEstimateFees} obj Optional instance to populate.
     * @return {PriceToEstimateFees} The populated <code>PriceToEstimateFees</code> instance.
     */
    static constructFromObject(data: any, obj: PriceToEstimateFees): PriceToEstimateFees;
    /**
     * Constructs a new <code>PriceToEstimateFees</code>.
     * Price information for an item, used to estimate fees.
     * @alias module:productfees_v0/model/PriceToEstimateFees
     * @class
     * @param listingPrice {MoneyType}
     */
    constructor(listingPrice: MoneyType);
    listingPrice: MoneyType;
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
import { Points } from './Points.js';
//# sourceMappingURL=PriceToEstimateFees.d.ts.map