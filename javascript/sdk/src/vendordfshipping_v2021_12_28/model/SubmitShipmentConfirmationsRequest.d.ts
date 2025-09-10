/**
 * The SubmitShipmentConfirmationsRequest model module.
 * @module vendordfshipping_v2021_12_28/model/SubmitShipmentConfirmationsRequest
 * @version 2021-12-28
 */
export class SubmitShipmentConfirmationsRequest {
    /**
     * Constructs a <code>SubmitShipmentConfirmationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SubmitShipmentConfirmationsRequest} obj Optional instance to populate.
     * @return {SubmitShipmentConfirmationsRequest} The populated <code>SubmitShipmentConfirmationsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: SubmitShipmentConfirmationsRequest): SubmitShipmentConfirmationsRequest;
    /**
     * Array of `ShipmentConfirmation` objects. Each `ShipmentConfirmation` object represents the confirmation details for a specific shipment.
     * @member {[ShipmentConfirmation]} shipmentConfirmations
     * @type {[ShipmentConfirmation]}
     */
    shipmentConfirmations: [ShipmentConfirmation];
}
import { ShipmentConfirmation } from './ShipmentConfirmation.js';
//# sourceMappingURL=SubmitShipmentConfirmationsRequest.d.ts.map