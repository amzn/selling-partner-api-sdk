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
     * @member {[AttributeOption]} invoiceStatusOptions
     * @type {[AttributeOption]}
     */
    invoiceStatusOptions: [AttributeOption];
    /**
     * A list of all the options that are available for the invoice type attribute.
     * @member {[AttributeOption]} invoiceTypeOptions
     * @type {[AttributeOption]}
     */
    invoiceTypeOptions: [AttributeOption];
    /**
     * A list of all the options that are available for the transaction identifier name attribute.
     * @member {[AttributeOption]} transactionIdentifierNameOptions
     * @type {[AttributeOption]}
     */
    transactionIdentifierNameOptions: [AttributeOption];
    /**
     * A list of all the options that are available for the transaction type attribute.
     * @member {[AttributeOption]} transactionTypeOptions
     * @type {[AttributeOption]}
     */
    transactionTypeOptions: [AttributeOption];
}
import { AttributeOption } from './AttributeOption.js';
//# sourceMappingURL=InvoicesAttributes.d.ts.map