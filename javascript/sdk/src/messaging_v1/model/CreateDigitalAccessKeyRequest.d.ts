/**
 * The CreateDigitalAccessKeyRequest model module.
 * @module messaging_v1/model/CreateDigitalAccessKeyRequest
 * @version v1
 */
export class CreateDigitalAccessKeyRequest {
    /**
     * Constructs a <code>CreateDigitalAccessKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateDigitalAccessKeyRequest} obj Optional instance to populate.
     * @return {CreateDigitalAccessKeyRequest} The populated <code>CreateDigitalAccessKeyRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateDigitalAccessKeyRequest): CreateDigitalAccessKeyRequest;
    /**
     * The text that is sent to the buyer. Only links that are related to the digital access key are allowed. Do not include HTML or email addresses. The text must be written in the buyer's preferred language, which you can retrieve from the `GetAttributes` operation.
     * @member {String} text
     * @type {String}
     */
    text: string;
    /**
     * Attachments that you want to include in the message to the buyer.
     * @member {Attachment[]} attachments
     * @type {Attachment[]}
     */
    attachments: Attachment[];
}
import { Attachment } from './Attachment.js';
//# sourceMappingURL=CreateDigitalAccessKeyRequest.d.ts.map