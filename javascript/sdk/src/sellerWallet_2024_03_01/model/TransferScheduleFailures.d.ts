/**
 * The TransferScheduleFailures model module.
 * @module sellerWallet_2024_03_01/model/TransferScheduleFailures
 * @version 2024-03-01
 */
export class TransferScheduleFailures {
    /**
     * Constructs a <code>TransferScheduleFailures</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransferScheduleFailures} obj Optional instance to populate.
     * @return {TransferScheduleFailures} The populated <code>TransferScheduleFailures</code> instance.
     */
    static constructFromObject(data: any, obj: TransferScheduleFailures): TransferScheduleFailures;
    /**
     * Constructs a new <code>TransferScheduleFailures</code>.
     * Specifies the balance amount in the Amazon SW bank account
     * @alias module:sellerWallet_2024_03_01/model/TransferScheduleFailures
     * @class
     * @param transferScheduleFailureDate {Date} The transfer schedule cancellation date
     * @param transferScheduleFailureReason {String} The statement/reasoning listed for the cancellation of the transfer schedule
     */
    constructor(transferScheduleFailureDate: Date, transferScheduleFailureReason: string);
    transferScheduleFailureDate: Date;
    transferScheduleFailureReason: string;
}
//# sourceMappingURL=TransferScheduleFailures.d.ts.map