/**
 * The DeliveryPreferences model module.
 * @module fulfillmentoutbound_v2020_07_01/model/DeliveryPreferences
 * @version 2020-07-01
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
     * Additional delivery instructions. For example, this could be instructions on how to enter a building, nearby landmark or navigation instructions, 'Beware of dogs', etc.
     * @member {String} deliveryInstructions
     * @type {String}
     */
    deliveryInstructions: string;
    /**
     * @member {DropOffLocation} dropOffLocation
     * @type {DropOffLocation}
     */
    dropOffLocation: DropOffLocation;
}
import { DropOffLocation } from './DropOffLocation.js';
//# sourceMappingURL=DeliveryPreferences.d.ts.map