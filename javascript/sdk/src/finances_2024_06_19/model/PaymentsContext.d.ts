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
     * Type of payment made.
     * @member {String} paymentType
     * @type {String}
     */
    paymentType: string;
    /**
     * Method of payment made.
     * @member {String} paymentMethod
     * @type {String}
     */
    paymentMethod: string;
    /**
     * Reference number of payment made.
     * @member {String} paymentReference
     * @type {String}
     */
    paymentReference: string;
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @member {Date} paymentDate
     * @type {Date}
     */
    paymentDate: Date;
}
//# sourceMappingURL=PaymentsContext.d.ts.map