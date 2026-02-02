/**
 * The OutboundShipmentSummary model module.
 * @module awd_v2024_05_09/model/OutboundShipmentSummary
 * @version 2024-05-09
 */
export class OutboundShipmentSummary {
    /**
     * Constructs a <code>OutboundShipmentSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OutboundShipmentSummary} obj Optional instance to populate.
     * @return {OutboundShipmentSummary} The populated <code>OutboundShipmentSummary</code> instance.
     */
    static constructFromObject(data: any, obj: OutboundShipmentSummary): OutboundShipmentSummary;
    /**
     * Constructs a new <code>OutboundShipmentSummary</code>.
     * Summary of an AWD inbound shipment containing the shipment ID which can be used to fetch the actual shipment
     * @alias module:awd_v2024_05_09/model/OutboundShipmentSummary
     * @class
     * @param orderId {String} Order ID of AWD inbound order this inbound shipment belongs to
     * @param shipmentId {String} Unique shipment ID
     * @param shipmentStatus {OutboundShipmentStatus}
     */
    constructor(orderId: string, shipmentId: string, shipmentStatus: OutboundShipmentStatus);
    orderId: string;
    shipmentId: string;
    shipmentStatus: OutboundShipmentStatus;
    /**
     * Timestamp denoting when the shipment was created
     * @member {Date} createdAt
     * @type {Date}
     */
    createdAt: Date;
    /**
     * Timestamp denoting when the shipment was updated
     * @member {Date} updatedAt
     * @type {Date}
     */
    updatedAt: Date;
}
import { OutboundShipmentStatus } from './OutboundShipmentStatus.js';
//# sourceMappingURL=OutboundShipmentSummary.d.ts.map