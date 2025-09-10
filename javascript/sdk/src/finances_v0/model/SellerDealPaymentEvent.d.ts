/**
 * The SellerDealPaymentEvent model module.
 * @module finances_v0/model/SellerDealPaymentEvent
 * @version v0
 */
export class SellerDealPaymentEvent {
    /**
     * Constructs a <code>SellerDealPaymentEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SellerDealPaymentEvent} obj Optional instance to populate.
     * @return {SellerDealPaymentEvent} The populated <code>SellerDealPaymentEvent</code> instance.
     */
    static constructFromObject(data: any, obj: SellerDealPaymentEvent): SellerDealPaymentEvent;
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * The unique identifier of the deal.
     * @member {String} dealId
     * @type {String}
     */
    dealId: string;
    /**
     * The internal description of the deal.
     * @member {String} dealDescription
     * @type {String}
     */
    dealDescription: string;
    /**
     * The type of event: SellerDealComplete.
     * @member {String} eventType
     * @type {String}
     */
    eventType: string;
    /**
     * The type of fee: RunLightningDealFee.
     * @member {String} feeType
     * @type {String}
     */
    feeType: string;
    /**
     * @member {Currency} feeAmount
     * @type {Currency}
     */
    feeAmount: Currency;
    /**
     * @member {Currency} taxAmount
     * @type {Currency}
     */
    taxAmount: Currency;
    /**
     * @member {Currency} totalAmount
     * @type {Currency}
     */
    totalAmount: Currency;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=SellerDealPaymentEvent.d.ts.map