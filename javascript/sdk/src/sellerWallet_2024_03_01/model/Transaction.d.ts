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
    static constructFromObject(data: any, obj: Transaction): Transaction;
    /**
     * Constructs a new <code>Transaction</code>.
     * The current transaction status and related historical details.
     * @alias module:sellerWallet_2024_03_01/model/Transaction
     * @class
     * @param accountId {String} The unique identifier of the Amazon Seller Wallet bank account from which the money is debited.
     * @param transactionId {String} The unique identifier provided by Amazon to the transaction
     * @param transactionType {TransactionType}
     * @param transactionStatus {TransactionStatus}
     * @param transactionRequestDate {Date} The date when the transaction was initiated.
     * @param lastUpdateDate {Date} The last update date on the transaction
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
     * Expected completion date of a transaction, for existing active Payees (Trusted Beneficiaries) it will be 24 hours but for new destination bank accounts the value could go up to 5 days
     * @member {Date} expectedCompletionDate
     * @type {Date}
     */
    expectedCompletionDate: Date;
    /**
     * Transaction completion date
     * @member {Date} transactionActualCompletionDate
     * @type {Date}
     */
    transactionActualCompletionDate: Date;
    /**
     * Amazon SW customer who requested the transaction
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
     * Description in case the transaction fails before completion
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