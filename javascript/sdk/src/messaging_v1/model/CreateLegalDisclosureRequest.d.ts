/**
 * The CreateLegalDisclosureRequest model module.
 * @module messaging_v1/model/CreateLegalDisclosureRequest
 * @version v1
 */
export class CreateLegalDisclosureRequest {
    /**
     * Constructs a <code>CreateLegalDisclosureRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateLegalDisclosureRequest} obj Optional instance to populate.
     * @return {CreateLegalDisclosureRequest} The populated <code>CreateLegalDisclosureRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateLegalDisclosureRequest): CreateLegalDisclosureRequest;
    /**
     * Attachments to include in the message to the buyer. If any text is included in the attachment, the text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
     * @member {[Attachment]} attachments
     * @type {[Attachment]}
     */
    attachments: [Attachment];
}
import { Attachment } from './Attachment.js';
//# sourceMappingURL=CreateLegalDisclosureRequest.d.ts.map