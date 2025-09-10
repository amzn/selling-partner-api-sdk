/**
 * The ServiceDocumentUploadDestination model module.
 * @module services_v1/model/ServiceDocumentUploadDestination
 * @version v1
 */
export class ServiceDocumentUploadDestination {
    /**
     * Constructs a <code>ServiceDocumentUploadDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ServiceDocumentUploadDestination} obj Optional instance to populate.
     * @return {ServiceDocumentUploadDestination} The populated <code>ServiceDocumentUploadDestination</code> instance.
     */
    static constructFromObject(data: any, obj: ServiceDocumentUploadDestination): ServiceDocumentUploadDestination;
    /**
     * Constructs a new <code>ServiceDocumentUploadDestination</code>.
     * Information about an upload destination.
     * @alias module:services_v1/model/ServiceDocumentUploadDestination
     * @class
     * @param uploadDestinationId {String} The unique identifier to be used by APIs that reference the upload destination.
     * @param url {String} The URL to which to upload the file.
     * @param encryptionDetails {EncryptionDetails}
     */
    constructor(uploadDestinationId: string, url: string, encryptionDetails: EncryptionDetails);
    uploadDestinationId: string;
    url: string;
    encryptionDetails: EncryptionDetails;
    /**
     * The headers to include in the upload request.
     * @member {Object} headers
     * @type {Object}
     */
    headers: any;
}
import { EncryptionDetails } from './EncryptionDetails.js';
//# sourceMappingURL=ServiceDocumentUploadDestination.d.ts.map