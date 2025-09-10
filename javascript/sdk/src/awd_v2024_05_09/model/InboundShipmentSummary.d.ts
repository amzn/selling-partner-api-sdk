/**
 * The InboundShipmentSummary model module.
 * @module awd_v2024_05_09/model/InboundShipmentSummary
 * @version 2024-05-09
 */
export class InboundShipmentSummary {
    /**
     * Constructs a <code>InboundShipmentSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InboundShipmentSummary} obj Optional instance to populate.
     * @return {InboundShipmentSummary} The populated <code>InboundShipmentSummary</code> instance.
     */
    static constructFromObject(data: any, obj: InboundShipmentSummary): InboundShipmentSummary;
    /**
     * Constructs a new <code>InboundShipmentSummary</code>.
     * Summary for an AWD inbound shipment containing the shipment ID, which can be used to retrieve the actual shipment.
     * @alias module:awd_v2024_05_09/model/InboundShipmentSummary
     * @class
     * @param orderId {String} The AWD inbound order ID that this inbound shipment belongs to.
     * @param shipmentId {String} A unique shipment ID.
     * @param shipmentStatus {InboundShipmentStatus}
     */
    constructor(orderId: string, shipmentId: string, shipmentStatus: InboundShipmentStatus);
    orderId: string;
    shipmentId: string;
    shipmentStatus: InboundShipmentStatus;
    /**
     * Timestamp when the shipment was created.
     * @member {Date} createdAt
     * @type {Date}
     */
    createdAt: Date;
    /**
     * Optional client-provided reference ID that can be used to correlate this shipment with client resources. For example, to map this shipment to an internal bookkeeping order record.
     * @member {String} externalReferenceId
     * @type {String}
     */
    externalReferenceId: string;
    /**
     * Timestamp when the shipment was updated.
     * @member {Date} updatedAt
     * @type {Date}
     */
    updatedAt: Date;
}
import { InboundShipmentStatus } from './InboundShipmentStatus.js';
//# sourceMappingURL=InboundShipmentSummary.d.ts.map