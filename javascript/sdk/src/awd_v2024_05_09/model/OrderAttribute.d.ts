/**
 * The OrderAttribute model module.
 * @module awd_v2024_05_09/model/OrderAttribute
 * @version 2024-05-09
 */
export class OrderAttribute {
    /**
     * Constructs a <code>OrderAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderAttribute} obj Optional instance to populate.
     * @return {OrderAttribute} The populated <code>OrderAttribute</code> instance.
     */
    static constructFromObject(data: Object, obj: OrderAttribute): OrderAttribute;
    /**
     * Constructs a new <code>OrderAttribute</code>.
     * Consists of the order preference and corresponding preference value.
     * @alias module:awd_v2024_05_09/model/OrderAttribute
     * @class
     * @param orderPreference {OrderPreference}
     * @param orderPreferenceValue {OrderPreferenceValue}
     */
    constructor(orderPreference: OrderPreference, orderPreferenceValue: OrderPreferenceValue);
    orderPreference: "PARTIAL_ORDER";
    orderPreferenceValue: OrderPreferenceValue;
}
import { OrderPreferenceValue } from './OrderPreferenceValue.js';
import { OrderPreference } from './OrderPreference.js';
//# sourceMappingURL=OrderAttribute.d.ts.map