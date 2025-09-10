/**
 * The Transaction model module.
 * @module finances_2024_06_19/model/Transaction
 * @version 2024-06-19
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
     * The type of transaction.  Possible values:  * Shipment
     * @member {String} transactionType
     * @type {String}
     */
    transactionType: string;
    /**
     * The unique identifier for the transaction.
     * @member {String} transactionId
     * @type {String}
     */
    transactionId: string;
    /**
     * The status of the transaction.  **Possible values:**  * `DEFERRED`: the transaction is currently deferred. * `RELEASED`: the transaction is currently released. * `DEFERRED_RELEASED`: the transaction was deferred in the past, but is now released. The status of a deferred transaction is updated to `DEFERRED_RELEASED` when the transaction is released.
     * @member {String} transactionStatus
     * @type {String}
     */
    transactionStatus: string;
    /**
     * Describes the reasons for the transaction.  Example: 'Order Payment','Refund Order'
     * @member {String} description
     * @type {String}
     */
    description: string;
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * @member {Currency} totalAmount
     * @type {Currency}
     */
    totalAmount: Currency;
    /**
     * @member {MarketplaceDetails} marketplaceDetails
     * @type {MarketplaceDetails}
     */
    marketplaceDetails: MarketplaceDetails;
    /**
     * List of items in the transaction
     * @member {[Item]} items
     * @type {[Item]}
     */
    items: [Item];
    /**
     * List of additional Information about the item.
     * @member {[Context]} contexts
     * @type {[Context]}
     */
    contexts: [Context];
    /**
     * A list of breakdowns that detail how the total amount is calculated for the transaction.
     * @member {[Breakdown]} breakdowns
     * @type {[Breakdown]}
     */
    breakdowns: [Breakdown];
}
import { SellingPartnerMetadata } from './SellingPartnerMetadata.js';
import { RelatedIdentifier } from './RelatedIdentifier.js';
import { Currency } from './Currency.js';
import { MarketplaceDetails } from './MarketplaceDetails.js';
import { Item } from './Item.js';
import { Context } from './Context.js';
import { Breakdown } from './Breakdown.js';
//# sourceMappingURL=Transaction.d.ts.map