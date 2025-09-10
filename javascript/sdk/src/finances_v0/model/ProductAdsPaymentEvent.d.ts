/**
 * The ProductAdsPaymentEvent model module.
 * @module finances_v0/model/ProductAdsPaymentEvent
 * @version v0
 */
export class ProductAdsPaymentEvent {
    /**
     * Constructs a <code>ProductAdsPaymentEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ProductAdsPaymentEvent} obj Optional instance to populate.
     * @return {ProductAdsPaymentEvent} The populated <code>ProductAdsPaymentEvent</code> instance.
     */
    static constructFromObject(data: any, obj: ProductAdsPaymentEvent): ProductAdsPaymentEvent;
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * Indicates if the transaction is for a charge or a refund.  Possible values:  * charge - Charge  * refund - Refund
     * @member {String} transactionType
     * @type {String}
     */
    transactionType: string;
    /**
     * Identifier for the invoice that the transaction appears in.
     * @member {String} invoiceId
     * @type {String}
     */
    invoiceId: string;
    /**
     * @member {Currency} baseValue
     * @type {Currency}
     */
    baseValue: Currency;
    /**
     * @member {Currency} taxValue
     * @type {Currency}
     */
    taxValue: Currency;
    /**
     * @member {Currency} transactionValue
     * @type {Currency}
     */
    transactionValue: Currency;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=ProductAdsPaymentEvent.d.ts.map