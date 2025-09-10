/**
 * The CreateDestinationRequest model module.
 * @module notifications_v1/model/CreateDestinationRequest
 * @version v1
 */
export class CreateDestinationRequest {
    /**
     * Constructs a <code>CreateDestinationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateDestinationRequest} obj Optional instance to populate.
     * @return {CreateDestinationRequest} The populated <code>CreateDestinationRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateDestinationRequest): CreateDestinationRequest;
    /**
     * Constructs a new <code>CreateDestinationRequest</code>.
     * The request schema for the &#x60;createDestination&#x60; operation.
     * @alias module:notifications_v1/model/CreateDestinationRequest
     * @class
     * @param resourceSpecification {DestinationResourceSpecification}
     * @param name {String} A developer-defined name to help identify this destination.
     */
    constructor(resourceSpecification: DestinationResourceSpecification, name: string);
    resourceSpecification: DestinationResourceSpecification;
    name: string;
}
import { DestinationResourceSpecification } from './DestinationResourceSpecification.js';
//# sourceMappingURL=CreateDestinationRequest.d.ts.map