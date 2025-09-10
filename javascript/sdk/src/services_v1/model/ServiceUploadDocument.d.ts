/**
 * The ServiceUploadDocument model module.
 * @module services_v1/model/ServiceUploadDocument
 * @version v1
 */
export class ServiceUploadDocument {
    /**
     * Constructs a <code>ServiceUploadDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ServiceUploadDocument} obj Optional instance to populate.
     * @return {ServiceUploadDocument} The populated <code>ServiceUploadDocument</code> instance.
     */
    static constructFromObject(data: any, obj: ServiceUploadDocument): ServiceUploadDocument;
    /**
     * Constructs a new <code>ServiceUploadDocument</code>.
     * Input for to be uploaded document.
     * @alias module:services_v1/model/ServiceUploadDocument
     * @class
     * @param contentType {String} The content type of the to-be-uploaded file
     * @param contentLength {Number} The content length of the to-be-uploaded file
     */
    constructor(contentType: string, contentLength: number);
    contentType: string;
    contentLength: number;
    /**
     * An MD5 hash of the content to be submitted to the upload destination. This value is used to determine if the data has been corrupted or tampered with during transit.
     * @member {String} contentMD5
     * @type {String}
     */
    contentMD5: string;
}
export namespace ServiceUploadDocument {
    namespace ContentTypeEnum {
        let TIFF: string;
        let JPG: string;
        let PNG: string;
        let JPEG: string;
        let GIF: string;
        let PDF: string;
    }
    /**
     * *
     */
    type ContentTypeEnum = string;
}
//# sourceMappingURL=ServiceUploadDocument.d.ts.map