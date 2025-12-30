/**
 * The Transaction model module.
 * @module finances_v0/model/Transaction
 * @version v0
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
     * @member {SellingPartnerMetadata} sellingPartnerMetadata
     * @type {SellingPartnerMetadata}
     */
    sellingPartnerMetadata: SellingPartnerMetadata;
    /**
     * Related business identifiers of the transaction.
     * @member {[RelatedIdentifier]} relatedIdentifiers
     * @type {[RelatedIdentifier]}
     */
    relatedIdentifiers: [RelatedIdentifier];
    /**
     * The type of transaction.  Possible values:  * `Shipment`
     * @member {String} transactionType
     * @type {String}
     */
    transactionType: string;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * @member {Currency} totalAmount
     * @type {Currency}
     */
    totalAmount: Currency;
}
import { SellingPartnerMetadata } from './SellingPartnerMetadata.js';
import { RelatedIdentifier } from './RelatedIdentifier.js';
import { Currency } from './Currency.js';
//# sourceMappingURL=Transaction.d.ts.map