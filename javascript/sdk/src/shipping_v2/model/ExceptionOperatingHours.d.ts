/**
 * The ExceptionOperatingHours model module.
 * @module shipping_v2/model/ExceptionOperatingHours
 * @version v2
 */
export class ExceptionOperatingHours {
    /**
     * Constructs a <code>ExceptionOperatingHours</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ExceptionOperatingHours} obj Optional instance to populate.
     * @return {ExceptionOperatingHours} The populated <code>ExceptionOperatingHours</code> instance.
     */
    static constructFromObject(data: any, obj: ExceptionOperatingHours): ExceptionOperatingHours;
    /**
     * @member {DateRange} dateRange
     * @type {DateRange}
     */
    dateRange: DateRange;
    /**
     * @member {OperatingHours} operatingHours
     * @type {OperatingHours}
     */
    operatingHours: OperatingHours;
}
import { DateRange } from './DateRange.js';
import { OperatingHours } from './OperatingHours.js';
//# sourceMappingURL=ExceptionOperatingHours.d.ts.map