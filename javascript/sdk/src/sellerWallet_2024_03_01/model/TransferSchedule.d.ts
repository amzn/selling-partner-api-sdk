/**
 * The TransferSchedule model module.
 * @module sellerWallet_2024_03_01/model/TransferSchedule
 * @version 2024-03-01
 */
export class TransferSchedule {
    /**
     * Constructs a <code>TransferSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransferSchedule} obj Optional instance to populate.
     * @return {TransferSchedule} The populated <code>TransferSchedule</code> instance.
     */
    static constructFromObject(data: any, obj: TransferSchedule): TransferSchedule;
    /**
     * Constructs a new <code>TransferSchedule</code>.
     * Transfer schedule details and related historical details.
     * @alias module:sellerWallet_2024_03_01/model/TransferSchedule
     * @class
     * @param transferScheduleId {String} The unique identifier provided by Amazon to the scheduled transfer
     * @param transactionType {TransactionType}
     * @param transactionDestinationAccount {TransactionAccount}
     * @param transferScheduleStatus {TransferScheduleStatus}
     * @param transferScheduleInformation {TransferScheduleInformation}
     * @param transferScheduleFailures {TransferScheduleFailures[]} Collection that holds Transfer Schedules that has been cancelled or failed due to certain reasons.
     */
    constructor(transferScheduleId: string, transactionType: TransactionType, transactionDestinationAccount: TransactionAccount, transferScheduleStatus: TransferScheduleStatus, transferScheduleInformation: TransferScheduleInformation, transferScheduleFailures: TransferScheduleFailures[]);
    transferScheduleId: string;
    transactionType: TransactionType;
    transactionDestinationAccount: TransactionAccount;
    transferScheduleStatus: TransferScheduleStatus;
    transferScheduleInformation: TransferScheduleInformation;
    transferScheduleFailures: TransferScheduleFailures[];
    /**
     * @member {TransactionAccount} transactionSourceAccount
     * @type {TransactionAccount}
     */
    transactionSourceAccount: TransactionAccount;
    /**
     * @member {PaymentPreference} paymentPreference
     * @type {PaymentPreference}
     */
    paymentPreference: PaymentPreference;
}
import { TransactionType } from './TransactionType.js';
import { TransactionAccount } from './TransactionAccount.js';
import { TransferScheduleStatus } from './TransferScheduleStatus.js';
import { TransferScheduleInformation } from './TransferScheduleInformation.js';
import { TransferScheduleFailures } from './TransferScheduleFailures.js';
import { PaymentPreference } from './PaymentPreference.js';
//# sourceMappingURL=TransferSchedule.d.ts.map