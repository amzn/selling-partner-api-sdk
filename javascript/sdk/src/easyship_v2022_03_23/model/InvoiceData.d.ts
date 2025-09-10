/**
 * The InvoiceData model module.
 * @module easyship_v2022_03_23/model/InvoiceData
 * @version 2022-03-23
 */
export class InvoiceData {
    /**
     * Constructs a <code>InvoiceData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InvoiceData} obj Optional instance to populate.
     * @return {InvoiceData} The populated <code>InvoiceData</code> instance.
     */
    static constructFromObject(data: any, obj: InvoiceData): InvoiceData;
    /**
     * Constructs a new <code>InvoiceData</code>.
     * Invoice number and date.
     * @alias module:easyship_v2022_03_23/model/InvoiceData
     * @class
     * @param invoiceNumber {String} A string of up to 255 characters.
     */
    constructor(invoiceNumber: string);
    invoiceNumber: string;
    /**
     * A datetime value in ISO 8601 format.
     * @member {Date} invoiceDate
     * @type {Date}
     */
    invoiceDate: Date;
}
//# sourceMappingURL=InvoiceData.d.ts.map