/**
 * The TransferScheduleRequest model module.
 * @module sellerWallet_2024_03_01/model/TransferScheduleRequest
 * @version 2024-03-01
 */
export class TransferScheduleRequest {
    /**
     * Constructs a <code>TransferScheduleRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransferScheduleRequest} obj Optional instance to populate.
     * @return {TransferScheduleRequest} The populated <code>TransferScheduleRequest</code> instance.
     */
    static constructFromObject(data: Object, obj: TransferScheduleRequest): TransferScheduleRequest;
    /**
     * Constructs a new <code>TransferScheduleRequest</code>.
     * Request body to initiate a scheduled transfer from a Seller Wallet bank account to another customer-defined bank account.
     * @alias module:sellerWallet_2024_03_01/model/TransferScheduleRequest
     * @class
     * @param sourceAccountId {String} The unique identifier of the source Amazon Seller Wallet bank account from which money is debited.
     * @param sourceCurrencyCode {String} The three-letter currency code of the source payment method country, in ISO 4217 format.
     * @param destinationAccountId {String} The unique identifier of the destination bank account where the money is deposited.
     * @param destinationTransactionInstrument {TransactionInstrumentDetails}
     * @param transactionType {TransactionType}
     * @param transferScheduleInformation {TransferScheduleInformation}
     * @param paymentPreference {PaymentPreference}
     */
    constructor(sourceAccountId: string, sourceCurrencyCode: string, destinationAccountId: string, destinationTransactionInstrument: TransactionInstrumentDetails, transactionType: TransactionType, transferScheduleInformation: TransferScheduleInformation, paymentPreference: PaymentPreference);
    sourceAccountId: string;
    sourceCurrencyCode: string;
    destinationAccountId: string;
    destinationTransactionInstrument: TransactionInstrumentDetails;
    transactionType: TransactionType;
    transferScheduleInformation: TransferScheduleInformation;
    paymentPreference: PaymentPreference;
    /**
     * @member {TransferScheduleStatus} transferScheduleStatus
     * @type {TransferScheduleStatus}
     */
    transferScheduleStatus: TransferScheduleStatus;
}
import { TransactionInstrumentDetails } from './TransactionInstrumentDetails.js';
import { TransactionType } from './TransactionType.js';
import { TransferScheduleInformation } from './TransferScheduleInformation.js';
import { PaymentPreference } from './PaymentPreference.js';
import { TransferScheduleStatus } from './TransferScheduleStatus.js';
//# sourceMappingURL=TransferScheduleRequest.d.ts.map