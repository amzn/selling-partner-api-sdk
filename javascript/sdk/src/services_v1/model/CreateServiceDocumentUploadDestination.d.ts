/**
 * The CreateServiceDocumentUploadDestination model module.
 * @module services_v1/model/CreateServiceDocumentUploadDestination
 * @version v1
 */
export class CreateServiceDocumentUploadDestination {
    /**
     * Constructs a <code>CreateServiceDocumentUploadDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateServiceDocumentUploadDestination} obj Optional instance to populate.
     * @return {CreateServiceDocumentUploadDestination} The populated <code>CreateServiceDocumentUploadDestination</code> instance.
     */
    static constructFromObject(data: any, obj: CreateServiceDocumentUploadDestination): CreateServiceDocumentUploadDestination;
    /**
     * @member {ServiceDocumentUploadDestination} payload
     * @type {ServiceDocumentUploadDestination}
     */
    payload: ServiceDocumentUploadDestination;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { ServiceDocumentUploadDestination } from './ServiceDocumentUploadDestination.js';
//# sourceMappingURL=CreateServiceDocumentUploadDestination.d.ts.map