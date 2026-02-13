/**
 * The GetDestinationResponse model module.
 * @module notifications_v1/model/GetDestinationResponse
 * @version v1
 */
export class GetDestinationResponse {
    /**
     * Constructs a <code>GetDestinationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetDestinationResponse} obj Optional instance to populate.
     * @return {GetDestinationResponse} The populated <code>GetDestinationResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetDestinationResponse): GetDestinationResponse;
    /**
     * @member {Destination} payload
     * @type {Destination}
     */
    payload: Destination;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { Destination } from './Destination.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetDestinationResponse.d.ts.map