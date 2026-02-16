/**
 * The ScheduledDeliveryInfo model module.
 * @module fulfillmentoutbound_v2020_07_01/model/ScheduledDeliveryInfo
 * @version 2020-07-01
 */
export class ScheduledDeliveryInfo {
    /**
     * Constructs a <code>ScheduledDeliveryInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ScheduledDeliveryInfo} obj Optional instance to populate.
     * @return {ScheduledDeliveryInfo} The populated <code>ScheduledDeliveryInfo</code> instance.
     */
    static constructFromObject(data: any, obj: ScheduledDeliveryInfo): ScheduledDeliveryInfo;
    /**
     * Constructs a new <code>ScheduledDeliveryInfo</code>.
     * Delivery information for a scheduled delivery. This is only available in the JP marketplace.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/ScheduledDeliveryInfo
     * @class
     * @param deliveryTimeZone {String} The time zone of the destination address for the fulfillment order preview. Must be an IANA time zone name. Example: Asia/Tokyo.
     * @param deliveryWindows {DeliveryWindow[]} An array of delivery windows.
     */
    constructor(deliveryTimeZone: string, deliveryWindows: DeliveryWindow[]);
    deliveryTimeZone: string;
    deliveryWindows: DeliveryWindow[];
}
import { DeliveryWindow } from './DeliveryWindow.js';
//# sourceMappingURL=ScheduledDeliveryInfo.d.ts.map