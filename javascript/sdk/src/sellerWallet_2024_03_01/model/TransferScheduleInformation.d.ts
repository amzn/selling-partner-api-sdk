/**
 * The TransferScheduleInformation model module.
 * @module sellerWallet_2024_03_01/model/TransferScheduleInformation
 * @version 2024-03-01
 */
export class TransferScheduleInformation {
    /**
     * Constructs a <code>TransferScheduleInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransferScheduleInformation} obj Optional instance to populate.
     * @return {TransferScheduleInformation} The populated <code>TransferScheduleInformation</code> instance.
     */
    static constructFromObject(data: any, obj: TransferScheduleInformation): TransferScheduleInformation;
    /**
     * Field to specify start date of the scheduled transfer
     * @member {Date} scheduleStartDate
     * @type {Date}
     */
    scheduleStartDate: Date;
    /**
     * Field to specify end date of the scheduled transfer
     * @member {Date} scheduleEndDate
     * @type {Date}
     */
    scheduleEndDate: Date;
    /**
     * @member {ScheduleExpression} scheduleExpression
     * @type {ScheduleExpression}
     */
    scheduleExpression: ScheduleExpression;
    /**
     * @member {ScheduleTransferType} scheduleType
     * @type {ScheduleTransferType}
     */
    scheduleType: ScheduleTransferType;
}
import { ScheduleExpression } from './ScheduleExpression.js';
import { ScheduleTransferType } from './ScheduleTransferType.js';
//# sourceMappingURL=TransferScheduleInformation.d.ts.map