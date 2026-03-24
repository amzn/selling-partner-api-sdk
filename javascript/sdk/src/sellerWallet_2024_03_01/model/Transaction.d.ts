/**
 * The Transaction model module.
 * @module sellerWallet_2024_03_01/model/Transaction
 * @version 2024-03-01
 */
export class Transaction {
    /**
     * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Transaction} obj Optional instance to populate.
     * @return {Transaction} The populated <code>Transaction</code> instance.
     */
    static constructFromObject(data: Object, obj: Transaction): Transaction;
    /**
     * Constructs a new <code>Transaction</code>.
     * The current transaction status and related historical details.
     * @alias module:sellerWallet_2024_03_01/model/Transaction
     * @class
     * @param accountId {String} The unique identifier of the Amazon Seller Wallet bank account from which the money is debited.
     * @param transactionId {String} The unique identifier provided by Amazon to the transaction.
     * @param transactionType {TransactionType}
     * @param transactionStatus {TransactionStatus}
     * @param transactionRequestDate {Date} The date when the transaction was initiated.
     * @param lastUpdateDate {Date} The date of the most recent account balance update.
     * @param transactionRequesterSource {String} The transaction initiation source. This value is either the Amazon portal or PISP name that the customer used to start the transaction.
     * @param transactionDescription {String} A description of the transaction that the requester provides when they initiate the transaction.
     * @param transactionDestinationAccount {TransactionAccount}
     * @param transactionRequestAmount {Currency}
     * @param transferRateDetails {TransferRatePreview}
     */
    constructor(accountId: string, transactionId: string, transactionType: TransactionType, transactionStatus: TransactionStatus, transactionRequestDate: Date, lastUpdateDate: Date, transactionRequesterSource: string, transactionDescription: string, transactionDestinationAccount: TransactionAccount, transactionRequestAmount: Currency, transferRateDetails: TransferRatePreview);
    accountId: string;
    transactionId: string;
    transactionType: TransactionType;
    transactionStatus: TransactionStatus;
    transactionRequestDate: Date;
    lastUpdateDate: Date;
    transactionRequesterSource: string;
    transactionDescription: string;
    transactionDestinationAccount: TransactionAccount;
    transactionRequestAmount: Currency;
    transferRateDetails: TransferRatePreview;
    /**
     * The expected completion date of the transaction.
     * @member {Date} expectedCompletionDate
     * @type {Date}
     */
    expectedCompletionDate: Date;
    /**
     * The transaction's completion date.
     * @member {Date} transactionActualCompletionDate
     * @type {Date}
     */
    transactionActualCompletionDate: Date;
    /**
     * The Amazon Seller Wallet customer who requested the transaction.
     * @member {String} requesterName
     * @type {String}
     */
    requesterName: string;
    /**
     * @member {TransactionAccount} transactionSourceAccount
     * @type {TransactionAccount}
     */
    transactionSourceAccount: TransactionAccount;
    /**
     * @member {Currency} transactionFinalAmount
     * @type {Currency}
     */
    transactionFinalAmount: Currency;
    /**
     * The reason the transaction failed, if applicable.
     * @member {String} transactionFailureReason
     * @type {String}
     */
    transactionFailureReason: string;
}
import { TransactionType } from './TransactionType.js';
import { TransactionStatus } from './TransactionStatus.js';
import { TransactionAccount } from './TransactionAccount.js';
import { Currency } from './Currency.js';
import { TransferRatePreview } from './TransferRatePreview.js';
//# sourceMappingURL=Transaction.d.ts.map