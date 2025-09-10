/**
 * The UpdateShipmentStatusRequest model module.
 * @module orders_v0/model/UpdateShipmentStatusRequest
 * @version v0
 */
export class UpdateShipmentStatusRequest {
    /**
     * Constructs a <code>UpdateShipmentStatusRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateShipmentStatusRequest} obj Optional instance to populate.
     * @return {UpdateShipmentStatusRequest} The populated <code>UpdateShipmentStatusRequest</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateShipmentStatusRequest): UpdateShipmentStatusRequest;
    /**
     * Constructs a new <code>UpdateShipmentStatusRequest</code>.
     * The request body for the &#x60;updateShipmentStatus&#x60; operation.
     * @alias module:orders_v0/model/UpdateShipmentStatusRequest
     * @class
     * @param marketplaceId {String} The unobfuscated marketplace identifier.
     * @param shipmentStatus {ShipmentStatus}
     */
    constructor(marketplaceId: string, shipmentStatus: ShipmentStatus);
    marketplaceId: string;
    shipmentStatus: ShipmentStatus;
    /**
     * For partial shipment status updates, the list of order items and quantities to be updated.
     * @member {[OrderItemsInner]} orderItems
     * @type {[OrderItemsInner]}
     */
    orderItems: [OrderItemsInner];
}
import { ShipmentStatus } from './ShipmentStatus.js';
import { OrderItemsInner } from './OrderItemsInner.js';
//# sourceMappingURL=UpdateShipmentStatusRequest.d.ts.map