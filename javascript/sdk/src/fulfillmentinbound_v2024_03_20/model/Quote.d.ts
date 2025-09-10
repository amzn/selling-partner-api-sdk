/**
 * The Quote model module.
 * @module fulfillmentinbound_v2024_03_20/model/Quote
 * @version 2024-03-20
 */
export class Quote {
    /**
     * Constructs a <code>Quote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Quote} obj Optional instance to populate.
     * @return {Quote} The populated <code>Quote</code> instance.
     */
    static constructFromObject(data: any, obj: Quote): Quote;
    /**
     * Constructs a new <code>Quote</code>.
     * The estimated shipping cost associated with the transportation option.
     * @alias module:fulfillmentinbound_v2024_03_20/model/Quote
     * @class
     * @param cost {Currency}
     */
    constructor(cost: Currency);
    cost: Currency;
    /**
     * The time at which this transportation option quote expires. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime with pattern `yyyy-MM-ddTHH:mm:ss.sssZ`.
     * @member {Date} expiration
     * @type {Date}
     */
    expiration: Date;
    /**
     * Voidable until timestamp.
     * @member {Date} voidableUntil
     * @type {Date}
     */
    voidableUntil: Date;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=Quote.d.ts.map