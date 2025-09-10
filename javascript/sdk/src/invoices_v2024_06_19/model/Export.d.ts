/**
 * The Export model module.
 * @module invoices_v2024_06_19/model/Export
 * @version 2024-06-19
 */
export class Export {
    /**
     * Constructs a <code>Export</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Export} obj Optional instance to populate.
     * @return {Export} The populated <code>Export</code> instance.
     */
    static constructFromObject(data: any, obj: Export): Export;
    /**
     * When the export generation fails, this attribute contains a description of the error.
     * @member {String} errorMessage
     * @type {String}
     */
    errorMessage: string;
    /**
     * The export identifier.
     * @member {String} exportId
     * @type {String}
     */
    exportId: string;
    /**
     * The date and time when the export generation finished. Vales are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} generateExportFinishedAt
     * @type {Date}
     */
    generateExportFinishedAt: Date;
    /**
     * The date and time when the export generation started. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} generateExportStartedAt
     * @type {Date}
     */
    generateExportStartedAt: Date;
    /**
     * The identifier for the export documents. To get the information required to retrieve the export document's contents, pass each ID in the `getInvoicesDocument` operation.  This list is empty until the status is `DONE`.
     * @member {[String]} invoicesDocumentIds
     * @type {[String]}
     */
    invoicesDocumentIds: [string];
    /**
     * @member {ExportStatus} status
     * @type {ExportStatus}
     */
    status: ExportStatus;
}
import { ExportStatus } from './ExportStatus.js';
//# sourceMappingURL=Export.d.ts.map