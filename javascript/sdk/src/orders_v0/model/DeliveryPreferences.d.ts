/**
 * The DeliveryPreferences model module.
 * @module orders_v0/model/DeliveryPreferences
 * @version v0
 */
export class DeliveryPreferences {
    /**
     * Constructs a <code>DeliveryPreferences</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeliveryPreferences} obj Optional instance to populate.
     * @return {DeliveryPreferences} The populated <code>DeliveryPreferences</code> instance.
     */
    static constructFromObject(data: any, obj: DeliveryPreferences): DeliveryPreferences;
    /**
     * Drop-off location selected by the customer.
     * @member {String} dropOffLocation
     * @type {String}
     */
    dropOffLocation: string;
    /**
     * @member {PreferredDeliveryTime} preferredDeliveryTime
     * @type {PreferredDeliveryTime}
     */
    preferredDeliveryTime: PreferredDeliveryTime;
    /**
     * Enumerated list of miscellaneous delivery attributes associated with the shipping address.
     * @member {OtherDeliveryAttributes[]} otherAttributes
     * @type {OtherDeliveryAttributes[]}
     */
    otherAttributes: OtherDeliveryAttributes[];
    /**
     * Building instructions, nearby landmark or navigation instructions.
     * @member {String} addressInstructions
     * @type {String}
     */
    addressInstructions: string;
}
import { PreferredDeliveryTime } from './PreferredDeliveryTime.js';
import { OtherDeliveryAttributes } from './OtherDeliveryAttributes.js';
//# sourceMappingURL=DeliveryPreferences.d.ts.map