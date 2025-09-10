/**
 * The Attachment model module.
 * @module messaging_v1/model/Attachment
 * @version v1
 */
export class Attachment {
    /**
     * Constructs a <code>Attachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Attachment} obj Optional instance to populate.
     * @return {Attachment} The populated <code>Attachment</code> instance.
     */
    static constructFromObject(data: any, obj: Attachment): Attachment;
    /**
     * Constructs a new <code>Attachment</code>.
     * Represents a file that was uploaded to a destination that was created by the Uploads API [&#x60;createUploadDestinationForResource&#x60;](https://developer-docs.amazon.com/sp-api/reference/createuploaddestinationforresource) operation.
     * @alias module:messaging_v1/model/Attachment
     * @class
     * @param uploadDestinationId {String} The identifier for the upload destination. To retrieve this value, call the Uploads API [`createUploadDestinationForResource`](https://developer-docs.amazon.com/sp-api/reference/createuploaddestinationforresource) operation.
     * @param fileName {String} The name of the file, including the extension. This is the file name that will appear in the message. This does not need to match the file name of the file that you uploaded.
     */
    constructor(uploadDestinationId: string, fileName: string);
    uploadDestinationId: string;
    fileName: string;
}
//# sourceMappingURL=Attachment.d.ts.map