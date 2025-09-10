/**
 * The InvoicesDocument model module.
 * @module invoices_v2024_06_19/model/InvoicesDocument
 * @version 2024-06-19
 */
export class InvoicesDocument {
    /**
     * Constructs a <code>InvoicesDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InvoicesDocument} obj Optional instance to populate.
     * @return {InvoicesDocument} The populated <code>InvoicesDocument</code> instance.
     */
    static constructFromObject(data: any, obj: InvoicesDocument): InvoicesDocument;
    /**
     * The identifier of the export document.
     * @member {String} invoicesDocumentId
     * @type {String}
     */
    invoicesDocumentId: string;
    /**
     * A pre-signed URL that you can use to download the invoices document in zip format. This URL expires after 30 seconds.
     * @member {String} invoicesDocumentUrl
     * @type {String}
     */
    invoicesDocumentUrl: string;
}
//# sourceMappingURL=InvoicesDocument.d.ts.map