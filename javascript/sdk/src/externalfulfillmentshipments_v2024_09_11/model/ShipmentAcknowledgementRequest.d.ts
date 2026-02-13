/**
 * The ShipmentAcknowledgementRequest model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/ShipmentAcknowledgementRequest
 * @version 2024-09-11
 */
export class ShipmentAcknowledgementRequest {
    /**
     * Constructs a <code>ShipmentAcknowledgementRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentAcknowledgementRequest} obj Optional instance to populate.
     * @return {ShipmentAcknowledgementRequest} The populated <code>ShipmentAcknowledgementRequest</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentAcknowledgementRequest): ShipmentAcknowledgementRequest;
    /**
     * Constructs a new <code>ShipmentAcknowledgementRequest</code>.
     * Information about the shipment and its line items, used to confirm or reject line items.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/ShipmentAcknowledgementRequest
     * @class
     * @param lineItems {[LineItemWithReason]} Details about the line items from the shipment that are being confirmed or rejected by the seller.
     */
    constructor(lineItems: [LineItemWithReason]);
    lineItems: LineItemWithReason[];
    /**
     * A unique identifier for every shipment rejection.
     * @member {String} referenceId
     * @type {String}
     */
    referenceId: string;
}
import { LineItemWithReason } from './LineItemWithReason.js';
//# sourceMappingURL=ShipmentAcknowledgementRequest.d.ts.map