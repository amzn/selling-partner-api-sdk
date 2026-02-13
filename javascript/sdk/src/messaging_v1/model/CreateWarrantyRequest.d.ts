/**
 * The CreateWarrantyRequest model module.
 * @module messaging_v1/model/CreateWarrantyRequest
 * @version v1
 */
export class CreateWarrantyRequest {
    /**
     * Constructs a <code>CreateWarrantyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateWarrantyRequest} obj Optional instance to populate.
     * @return {CreateWarrantyRequest} The populated <code>CreateWarrantyRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateWarrantyRequest): CreateWarrantyRequest;
    /**
     * Attachments to include in the message to the buyer. If any text is included in the attachment, the text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
     * @member {Attachment[]} attachments
     * @type {Attachment[]}
     */
    attachments: Attachment[];
    /**
     * The start date of the warranty coverage to include in the message to the buyer.
     * @member {Date} coverageStartDate
     * @type {Date}
     */
    coverageStartDate: Date;
    /**
     * The end date of the warranty coverage to include in the message to the buyer.
     * @member {Date} coverageEndDate
     * @type {Date}
     */
    coverageEndDate: Date;
}
import { Attachment } from './Attachment.js';
//# sourceMappingURL=CreateWarrantyRequest.d.ts.map