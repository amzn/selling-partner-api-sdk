/**
 * The InvoiceRequest model module.
 * @module messaging_v1/model/InvoiceRequest
 * @version v1
 */
export class InvoiceRequest {
    /**
     * Constructs a <code>InvoiceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InvoiceRequest} obj Optional instance to populate.
     * @return {InvoiceRequest} The populated <code>InvoiceRequest</code> instance.
     */
    static constructFromObject(data: any, obj: InvoiceRequest): InvoiceRequest;
    /**
     * Attachments to include in the message to the buyer.
     * @member {Attachment[]} attachments
     * @type {Attachment[]}
     */
    attachments: Attachment[];
}
import { Attachment } from './Attachment.js';
//# sourceMappingURL=InvoiceRequest.d.ts.map