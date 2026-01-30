/**
 * The InvoiceError model module.
 * @module invoices_v2024_06_19/model/InvoiceError
 * @version 2024-06-19
 */
export class InvoiceError {
    /**
     * Constructs a <code>InvoiceError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InvoiceError} obj Optional instance to populate.
     * @return {InvoiceError} The populated <code>InvoiceError</code> instance.
     */
    static constructFromObject(data: any, obj: InvoiceError): InvoiceError;
    /**
     * A text description of the error.
     * @member {String} description
     * @type {String}
     */
    description: string;
    /**
     * The code of the error.
     * @member {String} errorCode
     * @type {String}
     */
    errorCode: string;
}
//# sourceMappingURL=InvoiceError.d.ts.map