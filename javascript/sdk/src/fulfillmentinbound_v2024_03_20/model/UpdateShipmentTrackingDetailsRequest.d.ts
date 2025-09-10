/**
 * The UpdateShipmentTrackingDetailsRequest model module.
 * @module fulfillmentinbound_v2024_03_20/model/UpdateShipmentTrackingDetailsRequest
 * @version 2024-03-20
 */
export class UpdateShipmentTrackingDetailsRequest {
    /**
     * Constructs a <code>UpdateShipmentTrackingDetailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateShipmentTrackingDetailsRequest} obj Optional instance to populate.
     * @return {UpdateShipmentTrackingDetailsRequest} The populated <code>UpdateShipmentTrackingDetailsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateShipmentTrackingDetailsRequest): UpdateShipmentTrackingDetailsRequest;
    /**
     * Constructs a new <code>UpdateShipmentTrackingDetailsRequest</code>.
     * The &#x60;updateShipmentTrackingDetails&#x60; request.
     * @alias module:fulfillmentinbound_v2024_03_20/model/UpdateShipmentTrackingDetailsRequest
     * @class
     * @param trackingDetails {TrackingDetailsInput}
     */
    constructor(trackingDetails: TrackingDetailsInput);
    trackingDetails: TrackingDetailsInput;
}
import { TrackingDetailsInput } from './TrackingDetailsInput.js';
//# sourceMappingURL=UpdateShipmentTrackingDetailsRequest.d.ts.map