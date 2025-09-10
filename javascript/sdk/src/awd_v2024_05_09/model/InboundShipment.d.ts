/**
 * The InboundShipment model module.
 * @module awd_v2024_05_09/model/InboundShipment
 * @version 2024-05-09
 */
export class InboundShipment {
    /**
     * Constructs a <code>InboundShipment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InboundShipment} obj Optional instance to populate.
     * @return {InboundShipment} The populated <code>InboundShipment</code> instance.
     */
    static constructFromObject(data: any, obj: InboundShipment): InboundShipment;
    /**
     * Constructs a new <code>InboundShipment</code>.
     * Represents an AWD inbound shipment.
     * @alias module:awd_v2024_05_09/model/InboundShipment
     * @class
     * @param destinationAddress {Address}
     * @param orderId {String} The AWD inbound order ID that this inbound shipment belongs to.
     * @param originAddress {Address}
     * @param shipmentContainerQuantities {[DistributionPackageQuantity]} Packages that are part of this shipment.
     * @param shipmentId {String} Unique shipment ID.
     * @param shipmentStatus {InboundShipmentStatus}
     */
    constructor(destinationAddress: Address, orderId: string, originAddress: Address, shipmentContainerQuantities: [DistributionPackageQuantity], shipmentId: string, shipmentStatus: InboundShipmentStatus);
    destinationAddress: Address;
    orderId: string;
    originAddress: Address;
    shipmentContainerQuantities: [DistributionPackageQuantity];
    shipmentId: string;
    shipmentStatus: InboundShipmentStatus;
    /**
     * @member {CarrierCode} carrierCode
     * @type {CarrierCode}
     */
    carrierCode: CarrierCode;
    /**
     * Timestamp when the shipment was created. The date is returned in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
     * @member {Date} createdAt
     * @type {Date}
     */
    createdAt: Date;
    /**
     * Client-provided reference ID that can correlate this shipment to client resources. For example, to map this shipment to an internal bookkeeping order record.
     * @member {String} externalReferenceId
     * @type {String}
     */
    externalReferenceId: string;
    /**
     * Quantity received (at the receiving end) as part of this shipment.
     * @member {[InventoryQuantity]} receivedQuantity
     * @type {[InventoryQuantity]}
     */
    receivedQuantity: [InventoryQuantity];
    /**
     * Timestamp when the shipment will be shipped.
     * @member {Date} shipBy
     * @type {Date}
     */
    shipBy: Date;
    /**
     * Quantity details at SKU level for the shipment. This attribute will only appear if the skuQuantities parameter in the request is set to SHOW.
     * @member {[SkuQuantity]} shipmentSkuQuantities
     * @type {[SkuQuantity]}
     */
    shipmentSkuQuantities: [SkuQuantity];
    /**
     * Assigned region where the order will be shipped. This can differ from what was passed as preference. AWD currently supports following region IDs: [us-west, us-east, us-southcentral, us-southeast]
     * @member {String} destinationRegion
     * @type {String}
     */
    destinationRegion: string;
    /**
     * Carrier-unique tracking ID for this shipment.
     * @member {String} trackingId
     * @type {String}
     */
    trackingId: string;
    /**
     * Timestamp when the shipment was updated. The date is returned in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
     * @member {Date} updatedAt
     * @type {Date}
     */
    updatedAt: Date;
    /**
     * An AWD-provided reference ID that you can use to interact with the warehouse. For example, a carrier appointment booking.
     * @member {String} warehouseReferenceId
     * @type {String}
     */
    warehouseReferenceId: string;
}
import { Address } from './Address.js';
import { DistributionPackageQuantity } from './DistributionPackageQuantity.js';
import { InboundShipmentStatus } from './InboundShipmentStatus.js';
import { CarrierCode } from './CarrierCode.js';
import { InventoryQuantity } from './InventoryQuantity.js';
import { SkuQuantity } from './SkuQuantity.js';
//# sourceMappingURL=InboundShipment.d.ts.map