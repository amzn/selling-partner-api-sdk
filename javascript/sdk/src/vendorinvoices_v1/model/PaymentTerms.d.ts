/**
 * The PaymentTerms model module.
 * @module vendorinvoices_v1/model/PaymentTerms
 * @version v1
 */
export class PaymentTerms {
    /**
     * Constructs a <code>PaymentTerms</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PaymentTerms} obj Optional instance to populate.
     * @return {PaymentTerms} The populated <code>PaymentTerms</code> instance.
     */
    static constructFromObject(data: any, obj: PaymentTerms): PaymentTerms;
    /**
     * The payment term type for the invoice.
     * @member {String} type
     * @type {String}
     */
    type: string;
    /**
     * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
     * @member {String} discountPercent
     * @type {String}
     */
    discountPercent: string;
    /**
     * The number of calendar days from the Base date (Invoice date) until the discount is no longer valid.
     * @member {Number} discountDueDays
     * @type {Number}
     */
    discountDueDays: number;
    /**
     * The number of calendar days from the base date (invoice date) until the total amount on the invoice is due.
     * @member {Number} netDueDays
     * @type {Number}
     */
    netDueDays: number;
}
export namespace PaymentTerms {
    namespace TypeEnum {
        let Basic: string;
        let EndOfMonth: string;
        let FixedDate: string;
        let Proximo: string;
        let PaymentDueUponReceiptOfInvoice: string;
        let LetterofCredit: string;
    }
    /**
     * *
     */
    type TypeEnum = string;
}
//# sourceMappingURL=PaymentTerms.d.ts.map