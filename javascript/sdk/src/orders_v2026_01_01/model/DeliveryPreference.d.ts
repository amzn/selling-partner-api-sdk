/**
 * The DeliveryPreference model module.
 * @module orders_v2026_01_01/model/DeliveryPreference
 * @version 2026-01-01
 */
export class DeliveryPreference {
    /**
     * Constructs a <code>DeliveryPreference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeliveryPreference} obj Optional instance to populate.
     * @return {DeliveryPreference} The populated <code>DeliveryPreference</code> instance.
     */
    static constructFromObject(data: any, obj: DeliveryPreference): DeliveryPreference;
    /**
     * The drop-off location selected by the customer.
     * @member {String} dropOffLocation
     * @type {String}
     */
    dropOffLocation: string;
    /**
     * Building instructions, nearby landmark, or navigation instructions.
     * @member {String} addressInstruction
     * @type {String}
     */
    addressInstruction: string;
    /**
     * @member {PreferredDeliveryTime} deliveryTime
     * @type {PreferredDeliveryTime}
     */
    deliveryTime: PreferredDeliveryTime;
    /**
     * A list of miscellaneous delivery capabilities associated with the shipping address.
     * @member {[String]} deliveryCapabilities
     * @type {[String]}
     */
    deliveryCapabilities: [string];
}
import { PreferredDeliveryTime } from './PreferredDeliveryTime.js';
//# sourceMappingURL=DeliveryPreference.d.ts.map