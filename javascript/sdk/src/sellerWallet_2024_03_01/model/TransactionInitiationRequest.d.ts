/**
 * The TransactionInitiationRequest model module.
 * @module sellerWallet_2024_03_01/model/TransactionInitiationRequest
 * @version 2024-03-01
 */
export class TransactionInitiationRequest {
    /**
     * Constructs a <code>TransactionInitiationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransactionInitiationRequest} obj Optional instance to populate.
     * @return {TransactionInitiationRequest} The populated <code>TransactionInitiationRequest</code> instance.
     */
    static constructFromObject(data: any, obj: TransactionInitiationRequest): TransactionInitiationRequest;
    /**
     * Constructs a new <code>TransactionInitiationRequest</code>.
     * Request body to initiate a transaction from a SW bank account to another customer defined bank account
     * @alias module:sellerWallet_2024_03_01/model/TransactionInitiationRequest
     * @class
     * @param sourceAccountId {String} The unique identifier of the source Amazon SW bank account from where the money needs to be debited
     * @param destinationTransactionInstrument {TransactionInstrumentDetails}
     * @param sourceAmount {Currency}
     * @param requestTime {Date} The transaction initiation request time in date-time format
     */
    constructor(sourceAccountId: string, destinationTransactionInstrument: TransactionInstrumentDetails, sourceAmount: Currency, requestTime: Date);
    sourceAccountId: string;
    destinationTransactionInstrument: TransactionInstrumentDetails;
    sourceAmount: Currency;
    requestTime: Date;
    /**
     * Optional field to specify the unique identifier of the destination bank account where the money needs to be deposited
     * @member {String} destinationAccountId
     * @type {String}
     */
    destinationAccountId: string;
    /**
     * A description of the transaction.
     * @member {String} transactionDescription
     * @type {String}
     */
    transactionDescription: string;
    /**
     * If the payment is for VAT (Value-Added-Tax) then enter VAT identification number in this field which will be mandatory. The length constraint is 140 characters and do not allow user to enter any sensitive information other than VAT-ID.
     * @member {String} customerPaymentReference
     * @type {String}
     */
    customerPaymentReference: string;
    /**
     * @member {PayeeContactInformation} payeeContactInformation
     * @type {PayeeContactInformation}
     */
    payeeContactInformation: PayeeContactInformation;
    /**
     * @member {TransferRatePreview} transferRateDetails
     * @type {TransferRatePreview}
     */
    transferRateDetails: TransferRatePreview;
}
import { TransactionInstrumentDetails } from './TransactionInstrumentDetails.js';
import { Currency } from './Currency.js';
import { PayeeContactInformation } from './PayeeContactInformation.js';
import { TransferRatePreview } from './TransferRatePreview.js';
//# sourceMappingURL=TransactionInitiationRequest.d.ts.map