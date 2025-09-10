/**
 * The PaymentExecutionDetailItem model module.
 * @module orders_v0/model/PaymentExecutionDetailItem
 * @version v0
 */
export class PaymentExecutionDetailItem {
    /**
     * Constructs a <code>PaymentExecutionDetailItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PaymentExecutionDetailItem} obj Optional instance to populate.
     * @return {PaymentExecutionDetailItem} The populated <code>PaymentExecutionDetailItem</code> instance.
     */
    static constructFromObject(data: any, obj: PaymentExecutionDetailItem): PaymentExecutionDetailItem;
    /**
     * Constructs a new <code>PaymentExecutionDetailItem</code>.
     * Information about a sub-payment method used to pay for a COD order.
     * @alias module:orders_v0/model/PaymentExecutionDetailItem
     * @class
     * @param payment {Money}
     * @param paymentMethod {String} The sub-payment method for an order.   **Possible values**: * `COD`: Cash on delivery  * `GC`: Gift card  * `PointsAccount`: Amazon Points  * `Invoice`: Invoice  * `CreditCard`: Credit card  * `Pix`: Pix  * `Other`: Other.
     */
    constructor(payment: Money, paymentMethod: string);
    payment: Money;
    paymentMethod: string;
    /**
     * The Brazilian Taxpayer Identifier (CNPJ) of the payment processor or acquiring bank that authorizes the payment.   **Note**: This attribute is only available for orders in the Brazil (BR) marketplace when the `PaymentMethod` is `CreditCard` or `Pix`.
     * @member {String} acquirerId
     * @type {String}
     */
    acquirerId: string;
    /**
     * The card network or brand used in the payment transaction (for example, Visa or Mastercard).   **Note**: This attribute is only available for orders in the Brazil (BR) marketplace when the `PaymentMethod` is `CreditCard`.
     * @member {String} cardBrand
     * @type {String}
     */
    cardBrand: string;
    /**
     * The unique code that confirms the payment authorization.   **Note**: This attribute is only available for orders in the Brazil (BR) marketplace when the `PaymentMethod` is `CreditCard` or `Pix`.
     * @member {String} authorizationCode
     * @type {String}
     */
    authorizationCode: string;
}
import { Money } from './Money.js';
//# sourceMappingURL=PaymentExecutionDetailItem.d.ts.map