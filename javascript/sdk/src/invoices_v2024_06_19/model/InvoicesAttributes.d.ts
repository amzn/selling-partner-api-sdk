/**
 * The InvoicesAttributes model module.
 * @module invoices_v2024_06_19/model/InvoicesAttributes
 * @version 2024-06-19
 */
export class InvoicesAttributes {
    /**
     * Constructs a <code>InvoicesAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InvoicesAttributes} obj Optional instance to populate.
     * @return {InvoicesAttributes} The populated <code>InvoicesAttributes</code> instance.
     */
    static constructFromObject(data: any, obj: InvoicesAttributes): InvoicesAttributes;
    /**
     * A list of all the options that are available for the invoice status attribute.
     * @member {Array[]} invoiceStatusOptions
     * @type {Array[]}
     */
    invoiceStatusOptions: any[][];
    /**
     * A list of all the options that are available for the invoice type attribute.
     * @member {Array[]} invoiceTypeOptions
     * @type {Array[]}
     */
    invoiceTypeOptions: any[][];
    /**
     * A list of all the options that are available for the transaction identifier name attribute.
     * @member {Array[]} transactionIdentifierNameOptions
     * @type {Array[]}
     */
    transactionIdentifierNameOptions: any[][];
    /**
     * A list of all the options that are available for the transaction type attribute.
     * @member {Array[]} transactionTypeOptions
     * @type {Array[]}
     */
    transactionTypeOptions: any[][];
}
//# sourceMappingURL=InvoicesAttributes.d.ts.map