/**
 * The SubmitShipmentStatusUpdatesRequest model module.
 * @module vendordfshipping_v2021_12_28/model/SubmitShipmentStatusUpdatesRequest
 * @version 2021-12-28
 */
export class SubmitShipmentStatusUpdatesRequest {
    /**
     * Constructs a <code>SubmitShipmentStatusUpdatesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SubmitShipmentStatusUpdatesRequest} obj Optional instance to populate.
     * @return {SubmitShipmentStatusUpdatesRequest} The populated <code>SubmitShipmentStatusUpdatesRequest</code> instance.
     */
    static constructFromObject(data: any, obj: SubmitShipmentStatusUpdatesRequest): SubmitShipmentStatusUpdatesRequest;
    /**
     * Contains a list of one or more `ShipmentStatusUpdate` objects. Each `ShipmentStatusUpdate` object represents an update to the status of a specific shipment.
     * @member {ShipmentStatusUpdate[]} shipmentStatusUpdates
     * @type {ShipmentStatusUpdate[]}
     */
    shipmentStatusUpdates: ShipmentStatusUpdate[];
}
import { ShipmentStatusUpdate } from './ShipmentStatusUpdate.js';
//# sourceMappingURL=SubmitShipmentStatusUpdatesRequest.d.ts.map