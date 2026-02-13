/**
 * The CreateConfirmCustomizationDetailsRequest model module.
 * @module messaging_v1/model/CreateConfirmCustomizationDetailsRequest
 * @version v1
 */
export class CreateConfirmCustomizationDetailsRequest {
    /**
     * Constructs a <code>CreateConfirmCustomizationDetailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateConfirmCustomizationDetailsRequest} obj Optional instance to populate.
     * @return {CreateConfirmCustomizationDetailsRequest} The populated <code>CreateConfirmCustomizationDetailsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateConfirmCustomizationDetailsRequest): CreateConfirmCustomizationDetailsRequest;
    /**
     * The text to be sent to the buyer. Only links related to customization details are allowed. Do not include HTML or email addresses. The text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
     * @member {String} text
     * @type {String}
     */
    text: string;
    /**
     * Attachments to include in the message to the buyer.
     * @member {Attachment[]} attachments
     * @type {Attachment[]}
     */
    attachments: Attachment[];
}
import { Attachment } from './Attachment.js';
//# sourceMappingURL=CreateConfirmCustomizationDetailsRequest.d.ts.map