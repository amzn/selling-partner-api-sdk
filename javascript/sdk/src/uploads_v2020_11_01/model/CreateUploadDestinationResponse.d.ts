/**
 * The CreateUploadDestinationResponse model module.
 * @module uploads_v2020_11_01/model/CreateUploadDestinationResponse
 * @version 2020-11-01
 */
export class CreateUploadDestinationResponse {
    /**
     * Constructs a <code>CreateUploadDestinationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateUploadDestinationResponse} obj Optional instance to populate.
     * @return {CreateUploadDestinationResponse} The populated <code>CreateUploadDestinationResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateUploadDestinationResponse): CreateUploadDestinationResponse;
    /**
     * @member {UploadDestination} payload
     * @type {UploadDestination}
     */
    payload: UploadDestination;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { UploadDestination } from './UploadDestination.js';
//# sourceMappingURL=CreateUploadDestinationResponse.d.ts.map