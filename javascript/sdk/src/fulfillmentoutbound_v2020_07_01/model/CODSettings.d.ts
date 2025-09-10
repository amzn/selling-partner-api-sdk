/**
 * The CODSettings model module.
 * @module fulfillmentoutbound_v2020_07_01/model/CODSettings
 * @version 2020-07-01
 */
export class CODSettings {
    /**
     * Constructs a <code>CODSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CODSettings} obj Optional instance to populate.
     * @return {CODSettings} The populated <code>CODSettings</code> instance.
     */
    static constructFromObject(data: any, obj: CODSettings): CODSettings;
    /**
     * Constructs a new <code>CODSettings</code>.
     * The COD (Cash On Delivery) charges that you associate with a COD fulfillment order.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/CODSettings
     * @class
     * @param isCodRequired {Boolean} When true, this fulfillment order requires a COD (Cash On Delivery) payment.
     */
    constructor(isCodRequired: boolean);
    isCodRequired: boolean;
    /**
     * @member {Money} codCharge
     * @type {Money}
     */
    codCharge: Money;
    /**
     * @member {Money} codChargeTax
     * @type {Money}
     */
    codChargeTax: Money;
    /**
     * @member {Money} shippingCharge
     * @type {Money}
     */
    shippingCharge: Money;
    /**
     * @member {Money} shippingChargeTax
     * @type {Money}
     */
    shippingChargeTax: Money;
}
import { Money } from './Money.js';
//# sourceMappingURL=CODSettings.d.ts.map