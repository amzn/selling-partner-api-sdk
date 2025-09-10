/**
 * The Invoice model module.
 * @module invoices_v2024_06_19/model/Invoice
 * @version 2024-06-19
 */
export class Invoice {
    /**
     * Constructs a <code>Invoice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Invoice} obj Optional instance to populate.
     * @return {Invoice} The populated <code>Invoice</code> instance.
     */
    static constructFromObject(data: any, obj: Invoice): Invoice;
    /**
     * The date and time the invoice is issued. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} date
     * @type {Date}
     */
    date: Date;
    /**
     * If the invoice is in an error state, this attribute displays the error code.
     * @member {String} errorCode
     * @type {String}
     */
    errorCode: string;
    /**
     * The invoice identifier that is used by an external party. This is typically the government agency that authorized the invoice.
     * @member {String} externalInvoiceId
     * @type {String}
     */
    externalInvoiceId: string;
    /**
     * The response message from the government authority when there is an error during invoice issuance.
     * @member {String} govResponse
     * @type {String}
     */
    govResponse: string;
    /**
     * The invoice identifier.
     * @member {String} id
     * @type {String}
     */
    id: string;
    /**
     * The classification of the invoice type. This varies across marketplaces. Use the `getInvoicesAttributes` operation to check `invoiceType` options.
     * @member {String} invoiceType
     * @type {String}
     */
    invoiceType: string;
    /**
     * Use this identifier in conjunction with `externalInvoiceId` to identify invoices from the same seller.
     * @member {String} series
     * @type {String}
     */
    series: string;
    /**
     * The invoice status classification. Use the `getInvoicesAttributes` operation to check invoice status options.
     * @member {String} status
     * @type {String}
     */
    status: string;
    /**
     * List with identifiers for the transactions associated to the invoice.
     * @member {[TransactionIdentifier]} transactionIds
     * @type {[TransactionIdentifier]}
     */
    transactionIds: [TransactionIdentifier];
    /**
     * Classification of the transaction that originated this invoice. Use the `getInvoicesAttributes` operation to check `transactionType` options.
     * @member {String} transactionType
     * @type {String}
     */
    transactionType: string;
}
import { TransactionIdentifier } from './TransactionIdentifier.js';
//# sourceMappingURL=Invoice.d.ts.map