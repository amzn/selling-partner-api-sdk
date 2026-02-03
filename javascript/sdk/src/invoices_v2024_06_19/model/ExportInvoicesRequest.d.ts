/**
 * The ExportInvoicesRequest model module.
 * @module invoices_v2024_06_19/model/ExportInvoicesRequest
 * @version 2024-06-19
 */
export class ExportInvoicesRequest {
    /**
     * Constructs a <code>ExportInvoicesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ExportInvoicesRequest} obj Optional instance to populate.
     * @return {ExportInvoicesRequest} The populated <code>ExportInvoicesRequest</code> instance.
     */
    static constructFromObject(data: any, obj: ExportInvoicesRequest): ExportInvoicesRequest;
    /**
     * Constructs a new <code>ExportInvoicesRequest</code>.
     * The information required to create the export request.
     * @alias module:invoices_v2024_06_19/model/ExportInvoicesRequest
     * @class
     * @param marketplaceId {String} The ID of the marketplace from which you want the invoices.
     */
    constructor(marketplaceId: string);
    marketplaceId: string;
    /**
     * The latest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is the time of the request.
     * @member {Date} dateEnd
     * @type {Date}
     */
    dateEnd: Date;
    /**
     * The earliest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is 24 hours prior to the time of the request.
     * @member {Date} dateStart
     * @type {Date}
     */
    dateStart: Date;
    /**
     * The external ID of the invoices you want included in the response.
     * @member {String} externalInvoiceId
     * @type {String}
     */
    externalInvoiceId: string;
    /**
     * @member {FileFormat} fileFormat
     * @type {FileFormat}
     */
    fileFormat: FileFormat;
    /**
     * The marketplace-specific classification of the invoice type. Use the `getInvoicesAttributes` operation to check `invoiceType` options.
     * @member {String} invoiceType
     * @type {String}
     */
    invoiceType: string;
    /**
     * The series number of the invoices you want included in the response.
     * @member {String} series
     * @type {String}
     */
    series: string;
    /**
     * A list of statuses that you can use to filter invoices. Use the `getInvoicesAttributes` operation to check invoice status options.  Min count: 1
     * @member {Array[]} statuses
     * @type {Array[]}
     */
    statuses: any[][];
    /**
     * @member {TransactionIdentifier} transactionIdentifier
     * @type {TransactionIdentifier}
     */
    transactionIdentifier: TransactionIdentifier;
    /**
     * The marketplace-specific classification of the transaction type for which the invoice was created. Use the `getInvoicesAttributes` operation to check `transactionType` options
     * @member {String} transactionType
     * @type {String}
     */
    transactionType: string;
}
import { FileFormat } from './FileFormat.js';
import { TransactionIdentifier } from './TransactionIdentifier.js';
//# sourceMappingURL=ExportInvoicesRequest.d.ts.map