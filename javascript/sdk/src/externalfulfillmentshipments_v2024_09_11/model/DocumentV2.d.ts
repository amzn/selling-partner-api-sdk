/**
 * The DocumentV2 model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/DocumentV2
 * @version 2024-09-11
 */
export class DocumentV2 {
    /**
     * Constructs a <code>DocumentV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DocumentV2} obj Optional instance to populate.
     * @return {DocumentV2} The populated <code>DocumentV2</code> instance.
     */
    static constructFromObject(data: any, obj: DocumentV2): DocumentV2;
    /**
     * Constructs a new <code>DocumentV2</code>.
     * An [S3-Presigned URL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html) you can use to retrieve file contents.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/DocumentV2
     * @class
     * @param url {String} A presigned URL to fetch the ship label file using an HTTP GET request. To determine file type, use the `contentType` header of the file response. The file retrieved will be in one of the following supported formats:  - **ZPL**: `x.application/zpl` - **PDF**: `application/pdf` - **PNG**: `image/png` - **Plain Text**: `text/plain`
     */
    constructor(url: string);
    url: string;
}
//# sourceMappingURL=DocumentV2.d.ts.map