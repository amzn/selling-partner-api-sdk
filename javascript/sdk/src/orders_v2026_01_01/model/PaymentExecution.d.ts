/**
 * The PaymentExecution model module.
 * @module orders_v2026_01_01/model/PaymentExecution
 * @version 2026-01-01
 */
export class PaymentExecution {
    /**
     * Constructs a <code>PaymentExecution</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PaymentExecution} obj Optional instance to populate.
     * @return {PaymentExecution} The populated <code>PaymentExecution</code> instance.
     */
    static constructFromObject(data: Object, obj: PaymentExecution): PaymentExecution;
    /**
     * The payment method used for this payment execution (for example, CashOnDelivery, ConvenienceStore, CreditCard, Invoice, Pix, and so on).
     * @member {String} paymentMethod
     * @type {String}
     */
    paymentMethod: string;
    /**
     * @member {Money} paymentAmount
     * @type {Money}
     */
    paymentAmount: Money;
    /**
     * The unique identifier of the payment processor or acquiring bank that authorizes the payment.   **Note**: This attribute is only available for orders in the Brazil (BR) marketplace when the `paymentMethod` is `CreditCard` or `Pix`.
     * @member {String} acquirerId
     * @type {String}
     */
    acquirerId: string;
    /**
     * The card network or brand used in the payment transaction (for example, Visa or Mastercard).  **Note**: This attribute is only available for orders in the Brazil (BR) marketplace when the `paymentMethod` is `CreditCard`.
     * @member {String} cardBrand
     * @type {String}
     */
    cardBrand: string;
    /**
     * The unique code that confirms the payment authorization.  **Note**: This attribute is only available for orders in the Brazil (BR) marketplace when the `paymentMethod` is `CreditCard` or `Pix`.
     * @member {String} authorizationCode
     * @type {String}
     */
    authorizationCode: string;
}
import { Money } from './Money.js';
//# sourceMappingURL=PaymentExecution.d.ts.map