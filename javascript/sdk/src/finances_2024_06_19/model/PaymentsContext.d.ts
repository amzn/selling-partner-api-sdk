/**
 * The PaymentsContext model module.
 * @module finances_2024_06_19/model/PaymentsContext
 * @version 2024-06-19
 */
export class PaymentsContext {
    /**
     * Constructs a <code>PaymentsContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PaymentsContext} obj Optional instance to populate.
     * @return {PaymentsContext} The populated <code>PaymentsContext</code> instance.
     */
    static constructFromObject(data: any, obj: PaymentsContext): PaymentsContext;
    /**
     * The type of payment.
     * @member {String} paymentType
     * @type {String}
     */
    paymentType: string;
    /**
     * The method of payment.
     * @member {String} paymentMethod
     * @type {String}
     */
    paymentMethod: string;
    /**
     * The reference number of the payment.
     * @member {String} paymentReference
     * @type {String}
     */
    paymentReference: string;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} paymentDate
     * @type {Date}
     */
    paymentDate: Date;
}
//# sourceMappingURL=PaymentsContext.d.ts.map