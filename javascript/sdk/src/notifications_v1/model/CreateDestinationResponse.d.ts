/**
 * The CreateDestinationResponse model module.
 * @module notifications_v1/model/CreateDestinationResponse
 * @version v1
 */
export class CreateDestinationResponse {
    /**
     * Constructs a <code>CreateDestinationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateDestinationResponse} obj Optional instance to populate.
     * @return {CreateDestinationResponse} The populated <code>CreateDestinationResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateDestinationResponse): CreateDestinationResponse;
    /**
     * @member {Destination} payload
     * @type {Destination}
     */
    payload: Destination;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { Destination } from './Destination.js';
//# sourceMappingURL=CreateDestinationResponse.d.ts.map