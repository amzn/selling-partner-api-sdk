/**
 * The DirectPayment model module.
 * @module finances_v0/model/DirectPayment
 * @version v0
 */
export class DirectPayment {
    /**
     * Constructs a <code>DirectPayment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DirectPayment} obj Optional instance to populate.
     * @return {DirectPayment} The populated <code>DirectPayment</code> instance.
     */
    static constructFromObject(data: any, obj: DirectPayment): DirectPayment;
    /**
     * The type of payment.  Possible values:  * StoredValueCardRevenue - The amount that is deducted from the seller's account because the seller received money through a stored value card.  * StoredValueCardRefund - The amount that Amazon returns to the seller if the order that is bought using a stored value card is refunded.  * PrivateLabelCreditCardRevenue - The amount that is deducted from the seller's account because the seller received money through a private label credit card offered by Amazon.  * PrivateLabelCreditCardRefund - The amount that Amazon returns to the seller if the order that is bought using a private label credit card offered by Amazon is refunded.  * CollectOnDeliveryRevenue - The COD amount that the seller collected directly from the buyer.  * CollectOnDeliveryRefund - The amount that Amazon refunds to the buyer if an order paid for by COD is refunded.
     * @member {String} directPaymentType
     * @type {String}
     */
    directPaymentType: string;
    /**
     * @member {Currency} directPaymentAmount
     * @type {Currency}
     */
    directPaymentAmount: Currency;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=DirectPayment.d.ts.map