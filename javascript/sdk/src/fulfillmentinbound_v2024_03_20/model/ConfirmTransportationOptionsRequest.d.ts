/**
 * The ConfirmTransportationOptionsRequest model module.
 * @module fulfillmentinbound_v2024_03_20/model/ConfirmTransportationOptionsRequest
 * @version 2024-03-20
 */
export class ConfirmTransportationOptionsRequest {
    /**
     * Constructs a <code>ConfirmTransportationOptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ConfirmTransportationOptionsRequest} obj Optional instance to populate.
     * @return {ConfirmTransportationOptionsRequest} The populated <code>ConfirmTransportationOptionsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: ConfirmTransportationOptionsRequest): ConfirmTransportationOptionsRequest;
    /**
     * Constructs a new <code>ConfirmTransportationOptionsRequest</code>.
     * The &#x60;confirmTransportationOptions&#x60; request.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ConfirmTransportationOptionsRequest
     * @class
     * @param transportationSelections {[TransportationSelection]} Information needed to confirm one of the available transportation options.
     */
    constructor(transportationSelections: [TransportationSelection]);
    transportationSelections: TransportationSelection[];
}
import { TransportationSelection } from './TransportationSelection.js';
//# sourceMappingURL=ConfirmTransportationOptionsRequest.d.ts.map