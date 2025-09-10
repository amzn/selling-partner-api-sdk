/**
 * The SolutionProviderCreditEvent model module.
 * @module finances_v0/model/SolutionProviderCreditEvent
 * @version v0
 */
export class SolutionProviderCreditEvent {
    /**
     * Constructs a <code>SolutionProviderCreditEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SolutionProviderCreditEvent} obj Optional instance to populate.
     * @return {SolutionProviderCreditEvent} The populated <code>SolutionProviderCreditEvent</code> instance.
     */
    static constructFromObject(data: any, obj: SolutionProviderCreditEvent): SolutionProviderCreditEvent;
    /**
     * The transaction type.
     * @member {String} providerTransactionType
     * @type {String}
     */
    providerTransactionType: string;
    /**
     * A seller-defined identifier for an order.
     * @member {String} sellerOrderId
     * @type {String}
     */
    sellerOrderId: string;
    /**
     * The identifier of the marketplace where the order was placed.
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
    /**
     * The two-letter country code of the country associated with the marketplace where the order was placed.
     * @member {String} marketplaceCountryCode
     * @type {String}
     */
    marketplaceCountryCode: string;
    /**
     * The Amazon-defined identifier of the seller.
     * @member {String} sellerId
     * @type {String}
     */
    sellerId: string;
    /**
     * The store name where the payment event occurred.
     * @member {String} sellerStoreName
     * @type {String}
     */
    sellerStoreName: string;
    /**
     * The Amazon-defined identifier of the solution provider.
     * @member {String} providerId
     * @type {String}
     */
    providerId: string;
    /**
     * The store name where the payment event occurred.
     * @member {String} providerStoreName
     * @type {String}
     */
    providerStoreName: string;
    /**
     * @member {Currency} transactionAmount
     * @type {Currency}
     */
    transactionAmount: Currency;
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @member {Date} transactionCreationDate
     * @type {Date}
     */
    transactionCreationDate: Date;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=SolutionProviderCreditEvent.d.ts.map