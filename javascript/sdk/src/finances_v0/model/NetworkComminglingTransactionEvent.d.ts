/**
 * The NetworkComminglingTransactionEvent model module.
 * @module finances_v0/model/NetworkComminglingTransactionEvent
 * @version v0
 */
export class NetworkComminglingTransactionEvent {
    /**
     * Constructs a <code>NetworkComminglingTransactionEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {NetworkComminglingTransactionEvent} obj Optional instance to populate.
     * @return {NetworkComminglingTransactionEvent} The populated <code>NetworkComminglingTransactionEvent</code> instance.
     */
    static constructFromObject(data: any, obj: NetworkComminglingTransactionEvent): NetworkComminglingTransactionEvent;
    /**
     * The type of network item swap.  Possible values:  * `NetCo`: A Fulfillment by Amazon inventory pooling transaction. Available only in the India marketplace.  * `ComminglingVAT`: A commingling VAT transaction. Available only in the Spain, UK, France, Germany, and Italy marketplaces.
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
     * The identifier for the network item swap.
     * @member {String} netCoTransactionID
     * @type {String}
     */
    netCoTransactionID: string;
    /**
     * The reason for the network item swap.
     * @member {String} swapReason
     * @type {String}
     */
    swapReason: string;
    /**
     * The Amazon Standard Identification Number (ASIN) of the swapped item.
     * @member {String} ASIN
     * @type {String}
     */
    ASIN: string;
    /**
     * The marketplace in which the event took place.
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
    /**
     * @member {Currency} taxExclusiveAmount
     * @type {Currency}
     */
    taxExclusiveAmount: Currency;
    /**
     * @member {Currency} taxAmount
     * @type {Currency}
     */
    taxAmount: Currency;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=NetworkComminglingTransactionEvent.d.ts.map