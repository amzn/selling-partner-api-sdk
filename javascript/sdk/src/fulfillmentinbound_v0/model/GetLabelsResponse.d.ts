/**
 * The GetLabelsResponse model module.
 * @module fulfillmentinbound_v0/model/GetLabelsResponse
 * @version v0
 */
export class GetLabelsResponse {
    /**
     * Constructs a <code>GetLabelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetLabelsResponse} obj Optional instance to populate.
     * @return {GetLabelsResponse} The populated <code>GetLabelsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetLabelsResponse): GetLabelsResponse;
    /**
     * @member {LabelDownloadURL} payload
     * @type {LabelDownloadURL}
     */
    payload: LabelDownloadURL;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { LabelDownloadURL } from './LabelDownloadURL.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetLabelsResponse.d.ts.map