/**
 * The PaymentInformation model module.
 * @module fulfillmentoutbound_v2020_07_01/model/PaymentInformation
 * @version 2020-07-01
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
     * Constructs a new <code>PaymentInformation</code>.
     * The attributes related to the payment made from customer to seller for this order.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/PaymentInformation
     * @class
     * @param paymentTransactionId {String} The transaction identifier of this payment.
     * @param paymentMode {String} The transaction mode of this payment.
     * @param paymentDate {Date} Date timestamp
     */
    constructor(paymentTransactionId: string, paymentMode: string, paymentDate: Date);
    paymentTransactionId: string;
    paymentMode: string;
    paymentDate: Date;
}
//# sourceMappingURL=PaymentInformation.d.ts.map