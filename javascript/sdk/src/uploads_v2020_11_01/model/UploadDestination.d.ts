/**
 * The UploadDestination model module.
 * @module uploads_v2020_11_01/model/UploadDestination
 * @version 2020-11-01
 */
export class UploadDestination {
    /**
     * Constructs a <code>UploadDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UploadDestination} obj Optional instance to populate.
     * @return {UploadDestination} The populated <code>UploadDestination</code> instance.
     */
    static constructFromObject(data: any, obj: UploadDestination): UploadDestination;
    /**
     * The unique identifier for the upload destination.
     * @member {String} uploadDestinationId
     * @type {String}
     */
    uploadDestinationId: string;
    /**
     * The URL for the upload destination.
     * @member {String} url
     * @type {String}
     */
    url: string;
    /**
     * The headers to include in the upload request.
     * @member {Object} headers
     * @type {Object}
     */
    headers: any;
}
//# sourceMappingURL=UploadDestination.d.ts.map