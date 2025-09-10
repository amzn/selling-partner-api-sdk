/**
 * The Destination model module.
 * @module notifications_v1/model/Destination
 * @version v1
 */
export class Destination {
    /**
     * Constructs a <code>Destination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Destination} obj Optional instance to populate.
     * @return {Destination} The populated <code>Destination</code> instance.
     */
    static constructFromObject(data: any, obj: Destination): Destination;
    /**
     * Constructs a new <code>Destination</code>.
     * Information about the destination created when you call the &#x60;createDestination&#x60; operation.
     * @alias module:notifications_v1/model/Destination
     * @class
     * @param name {String} The developer-defined name for this destination.
     * @param destinationId {String} The destination identifier generated when you created the destination.
     * @param resource {DestinationResource}
     */
    constructor(name: string, destinationId: string, resource: DestinationResource);
    name: string;
    destinationId: string;
    resource: DestinationResource;
}
import { DestinationResource } from './DestinationResource.js';
//# sourceMappingURL=Destination.d.ts.map