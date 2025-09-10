/**
 * The PaymentPreference model module.
 * @module sellerWallet_2024_03_01/model/PaymentPreference
 * @version 2024-03-01
 */
export class PaymentPreference {
    /**
     * Constructs a <code>PaymentPreference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PaymentPreference} obj Optional instance to populate.
     * @return {PaymentPreference} The populated <code>PaymentPreference</code> instance.
     */
    static constructFromObject(data: any, obj: PaymentPreference): PaymentPreference;
    /**
     * Constructs a new <code>PaymentPreference</code>.
     * Payment preference type in which transfer is being scheduled
     * @alias module:sellerWallet_2024_03_01/model/PaymentPreference
     * @class
     * @param paymentPreferencePaymentType {PaymentPreferencePaymentType}
     * @param value {Number} A decimal number such as amount or FX rate.
     */
    constructor(paymentPreferencePaymentType: PaymentPreferencePaymentType, value: number);
    paymentPreferencePaymentType: PaymentPreferencePaymentType;
    value: number;
}
import { PaymentPreferencePaymentType } from './PaymentPreferencePaymentType.js';
//# sourceMappingURL=PaymentPreference.d.ts.map