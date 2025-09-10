/**
 * The CollectOnDelivery model module.
 * @module shipping_v2/model/CollectOnDelivery
 * @version v2
 */
export class CollectOnDelivery {
    /**
     * Constructs a <code>CollectOnDelivery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CollectOnDelivery} obj Optional instance to populate.
     * @return {CollectOnDelivery} The populated <code>CollectOnDelivery</code> instance.
     */
    static constructFromObject(data: any, obj: CollectOnDelivery): CollectOnDelivery;
    /**
     * Constructs a new <code>CollectOnDelivery</code>.
     * The amount to collect on delivery.
     * @alias module:shipping_v2/model/CollectOnDelivery
     * @class
     * @param amount {Currency}
     */
    constructor(amount: Currency);
    amount: Currency;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=CollectOnDelivery.d.ts.map