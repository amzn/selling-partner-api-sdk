/**
 * The PaymentMethodDetails model module.
 * @module transfers_v2024_06_01/model/PaymentMethodDetails
 * @version 2024-06-01
 */
export class PaymentMethodDetails {
    /**
     * Constructs a <code>PaymentMethodDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PaymentMethodDetails} obj Optional instance to populate.
     * @return {PaymentMethodDetails} The populated <code>PaymentMethodDetails</code> instance.
     */
    static constructFromObject(data: any, obj: PaymentMethodDetails): PaymentMethodDetails;
    /**
     * The name of the account holder who is registered for the payment method.
     * @member {String} accountHolderName
     * @type {String}
     */
    accountHolderName: string;
    /**
     * The payment method identifier.
     * @member {String} paymentMethodId
     * @type {String}
     */
    paymentMethodId: string;
    /**
     * The last three or four digits of the payment method.
     * @member {String} tail
     * @type {String}
     */
    tail: string;
    /**
     * @member {ExpiryDate} expiryDate
     * @type {ExpiryDate}
     */
    expiryDate: ExpiryDate;
    /**
     * The two-letter country code in ISO 3166-1 alpha-2 format. For payment methods in the `card` category, the code is for the country where the card was issued. For payment methods in the `bank account` category, the code is for the country where the account is located.
     * @member {String} countryCode
     * @type {String}
     */
    countryCode: string;
    /**
     * @member {PaymentMethodType} paymentMethodType
     * @type {PaymentMethodType}
     */
    paymentMethodType: PaymentMethodType;
    /**
     * @member {AssignmentType} assignmentType
     * @type {AssignmentType}
     */
    assignmentType: AssignmentType;
}
import { ExpiryDate } from './ExpiryDate.js';
import { PaymentMethodType } from './PaymentMethodType.js';
import { AssignmentType } from './AssignmentType.js';
//# sourceMappingURL=PaymentMethodDetails.d.ts.map