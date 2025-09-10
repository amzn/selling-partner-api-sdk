/**
 * The PaymentInformation model module.
 * @module invoicing_v0/model/PaymentInformation
 * @version v0
 */
export class PaymentInformation {
    /**
     * Constructs a <code>PaymentInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PaymentInformation} obj Optional instance to populate.
     * @return {PaymentInformation} The populated <code>PaymentInformation</code> instance.
     */
    static constructFromObject(data: any, obj: PaymentInformation): PaymentInformation;
    /**
     * @member {PaymentMethodEnum} paymentMethod
     * @type {PaymentMethodEnum}
     */
    paymentMethod: PaymentMethodEnum;
    /**
     * Government ID of acquirer
     * @member {String} acquirerId
     * @type {String}
     */
    acquirerId: string;
    /**
     * Credit card brand (if payment method is CreditCard)
     * @member {String} cardBrand
     * @type {String}
     */
    cardBrand: string;
    /**
     * @member {Money} paymentValue
     * @type {Money}
     */
    paymentValue: Money;
    /**
     * Authorization code for this payment
     * @member {String} authorizationCode
     * @type {String}
     */
    authorizationCode: string;
}
import { PaymentMethodEnum } from './PaymentMethodEnum.js';
import { Money } from './Money.js';
//# sourceMappingURL=PaymentInformation.d.ts.map