/**
 * The SubmitShipmentConfirmationRequest model module.
 * @module vendorshipments_v1/model/SubmitShipmentConfirmationRequest
 * @version v1
 */
export class SubmitShipmentConfirmationRequest {
    /**
     * Constructs a <code>SubmitShipmentConfirmationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SubmitShipmentConfirmationRequest} obj Optional instance to populate.
     * @return {SubmitShipmentConfirmationRequest} The populated <code>SubmitShipmentConfirmationRequest</code> instance.
     */
    static constructFromObject(data: any, obj: SubmitShipmentConfirmationRequest): SubmitShipmentConfirmationRequest;
    /**
     * Constructs a new <code>SubmitShipmentConfirmationRequest</code>.
     * The request schema for the SubmitShipmentConfirmation operation.
     * @alias module:vendorshipments_v1/model/SubmitShipmentConfirmationRequest
     * @class
     * @param shipmentConfirmation {ShipmentConfirmation}
     */
    constructor(shipmentConfirmation: ShipmentConfirmation);
    shipmentConfirmation: ShipmentConfirmation;
}
import { ShipmentConfirmation } from './ShipmentConfirmation.js';
//# sourceMappingURL=SubmitShipmentConfirmationRequest.d.ts.map