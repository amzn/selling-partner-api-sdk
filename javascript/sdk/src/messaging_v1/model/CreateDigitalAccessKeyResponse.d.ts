/**
 * The CreateDigitalAccessKeyResponse model module.
 * @module messaging_v1/model/CreateDigitalAccessKeyResponse
 * @version v1
 */
export class CreateDigitalAccessKeyResponse {
    /**
     * Constructs a <code>CreateDigitalAccessKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateDigitalAccessKeyResponse} obj Optional instance to populate.
     * @return {CreateDigitalAccessKeyResponse} The populated <code>CreateDigitalAccessKeyResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateDigitalAccessKeyResponse): CreateDigitalAccessKeyResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { Error } from './Error.js';
//# sourceMappingURL=CreateDigitalAccessKeyResponse.d.ts.map