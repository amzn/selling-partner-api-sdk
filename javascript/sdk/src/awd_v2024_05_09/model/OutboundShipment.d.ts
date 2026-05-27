/**
 * The OutboundShipment model module.
 * @module awd_v2024_05_09/model/OutboundShipment
 * @version 2024-05-09
 */
export class OutboundShipment {
    /**
     * Constructs a <code>OutboundShipment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OutboundShipment} obj Optional instance to populate.
     * @return {OutboundShipment} The populated <code>OutboundShipment</code> instance.
     */
    static constructFromObject(data: Object, obj: OutboundShipment): OutboundShipment;
    /**
     * Constructs a new <code>OutboundShipment</code>.
     * Represents an AWD outbound shipment.
     * @alias module:awd_v2024_05_09/model/OutboundShipment
     * @class
     * @param destinationAddress {Address}
     * @param orderId {String} Outbound order ID this outbound shipment belongs to.
     * @param originAddress {Address}
     * @param shipmentId {String} Unique shipment ID.
     * @param shipmentStatus {OutboundShipmentStatus}
     */
    constructor(destinationAddress: Address, orderId: string, originAddress: Address, shipmentId: string, shipmentStatus: OutboundShipmentStatus);
    destinationAddress: Address;
    orderId: string;
    originAddress: Address;
    shipmentId: string;
    shipmentStatus: OutboundShipmentStatus;
    /**
     * Timestamp when the shipment was created.
     * @member {Date} createdAt
     * @type {Date}
     */
    createdAt: Date;
    /**
     * Specific distribution packages that are included in the context of this shipment.
     * @member {DistributionPackageQuantity[]} shipmentPackageQuantities
     * @type {DistributionPackageQuantity[]}
     */
    shipmentPackageQuantities: DistributionPackageQuantity[];
    /**
     * Specific product units that are included in the context of this shipment.
     * @member {ProductQuantity[]} shipmentProductQuantities
     * @type {ProductQuantity[]}
     */
    shipmentProductQuantities: ProductQuantity[];
    /**
     * Timestamp when the shipment was updated.
     * @member {Date} updatedAt
     * @type {Date}
     */
    updatedAt: Date;
}
import { Address } from './Address.js';
import { OutboundShipmentStatus } from './OutboundShipmentStatus.js';
import { DistributionPackageQuantity } from './DistributionPackageQuantity.js';
import { ProductQuantity } from './ProductQuantity.js';
//# sourceMappingURL=OutboundShipment.d.ts.map