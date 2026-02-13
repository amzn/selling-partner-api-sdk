/**
 * The PreferredDeliveryTime model module.
 * @module orders_v2026_01_01/model/PreferredDeliveryTime
 * @version 2026-01-01
 */
export class PreferredDeliveryTime {
    /**
     * Constructs a <code>PreferredDeliveryTime</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PreferredDeliveryTime} obj Optional instance to populate.
     * @return {PreferredDeliveryTime} The populated <code>PreferredDeliveryTime</code> instance.
     */
    static constructFromObject(data: any, obj: PreferredDeliveryTime): PreferredDeliveryTime;
    /**
     * Business hours when the business is open for deliveries.
     * @member {BusinessHour[]} businessHours
     * @type {BusinessHour[]}
     */
    businessHours: BusinessHour[];
    /**
     * Specific dates within the next 30 days when normal business hours do not apply.
     * @member {ExceptionDate[]} exceptionDates
     * @type {ExceptionDate[]}
     */
    exceptionDates: ExceptionDate[];
}
import { BusinessHour } from './BusinessHour.js';
import { ExceptionDate } from './ExceptionDate.js';
//# sourceMappingURL=PreferredDeliveryTime.d.ts.map