/**
 * The Price model module.
 * @module pricing_v2022_05_01/model/Price
 * @version 2022-05-01
 */
export class Price {
    /**
     * Constructs a <code>Price</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Price} obj Optional instance to populate.
     * @return {Price} The populated <code>Price</code> instance.
     */
    static constructFromObject(data: any, obj: Price): Price;
    /**
     * Constructs a new <code>Price</code>.
     * The schema for item&#39;s price information, including listing price, shipping price, and Amazon Points.
     * @alias module:pricing_v2022_05_01/model/Price
     * @class
     * @param listingPrice {MoneyType}
     */
    constructor(listingPrice: MoneyType);
    listingPrice: MoneyType;
    /**
     * @member {MoneyType} shippingPrice
     * @type {MoneyType}
     */
    shippingPrice: MoneyType;
    /**
     * @member {Points} points
     * @type {Points}
     */
    points: Points;
}
import { MoneyType } from './MoneyType.js';
import { Points } from './Points.js';
//# sourceMappingURL=Price.d.ts.map