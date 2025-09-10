/**
 * The ScheduleExpression model module.
 * @module sellerWallet_2024_03_01/model/ScheduleExpression
 * @version 2024-03-01
 */
export class ScheduleExpression {
    /**
     * Constructs a <code>ScheduleExpression</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ScheduleExpression} obj Optional instance to populate.
     * @return {ScheduleExpression} The populated <code>ScheduleExpression</code> instance.
     */
    static constructFromObject(data: any, obj: ScheduleExpression): ScheduleExpression;
    /**
     * Constructs a new <code>ScheduleExpression</code>.
     * Parameters containing information of the expression that defines when the schedule runs. The following formats are supported.
     * @alias module:sellerWallet_2024_03_01/model/ScheduleExpression
     * @class
     * @param scheduleExpressionType {ScheduleExpressionType}
     */
    constructor(scheduleExpressionType: ScheduleExpressionType);
    scheduleExpressionType: ScheduleExpressionType;
    /**
     * @member {RecurringFrequency} recurringFrequency
     * @type {RecurringFrequency}
     */
    recurringFrequency: RecurringFrequency;
}
import { ScheduleExpressionType } from './ScheduleExpressionType.js';
import { RecurringFrequency } from './RecurringFrequency.js';
//# sourceMappingURL=ScheduleExpression.d.ts.map