/**
 * The PriceType model module.
 * @module pricing_v0/model/PriceType
 * @version v0
 */
export class PriceType {
    /**
     * Constructs a <code>PriceType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PriceType} obj Optional instance to populate.
     * @return {PriceType} The populated <code>PriceType</code> instance.
     */
    static constructFromObject(data: any, obj: PriceType): PriceType;
    /**
     * Constructs a new <code>PriceType</code>.
     * Schema for item&#39;s price information, including listing price, shipping price, and Amazon points.
     * @alias module:pricing_v0/model/PriceType
     * @class
     * @param listingPrice {MoneyType}
     */
    constructor(listingPrice: MoneyType);
    listingPrice: MoneyType;
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
import { Points } from './Points.js';
//# sourceMappingURL=PriceType.d.ts.map