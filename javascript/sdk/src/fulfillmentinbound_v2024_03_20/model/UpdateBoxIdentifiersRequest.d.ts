/**
 * The UpdateBoxIdentifiersRequest model module.
 * @module fulfillmentinbound_v2024_03_20/model/UpdateBoxIdentifiersRequest
 * @version 2024-03-20
 */
export class UpdateBoxIdentifiersRequest {
    /**
     * Constructs a <code>UpdateBoxIdentifiersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateBoxIdentifiersRequest} obj Optional instance to populate.
     * @return {UpdateBoxIdentifiersRequest} The populated <code>UpdateBoxIdentifiersRequest</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateBoxIdentifiersRequest): UpdateBoxIdentifiersRequest;
    /**
     * Constructs a new <code>UpdateBoxIdentifiersRequest</code>.
     * Input information for updating a box identifier.
     * @alias module:fulfillmentinbound_v2024_03_20/model/UpdateBoxIdentifiersRequest
     * @class
     * @param boxIdentifiers {[BoxIdentifierInput]} Contains box identifier updates for the boxes within a shipment.
     */
    constructor(boxIdentifiers: [BoxIdentifierInput]);
    boxIdentifiers: [BoxIdentifierInput];
}
import { BoxIdentifierInput } from './BoxIdentifierInput.js';
//# sourceMappingURL=UpdateBoxIdentifiersRequest.d.ts.map