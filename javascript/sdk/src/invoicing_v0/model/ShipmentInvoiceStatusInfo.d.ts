/**
 * The ShipmentInvoiceStatusInfo model module.
 * @module invoicing_v0/model/ShipmentInvoiceStatusInfo
 * @version v0
 */
export class ShipmentInvoiceStatusInfo {
    /**
     * Constructs a <code>ShipmentInvoiceStatusInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentInvoiceStatusInfo} obj Optional instance to populate.
     * @return {ShipmentInvoiceStatusInfo} The populated <code>ShipmentInvoiceStatusInfo</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentInvoiceStatusInfo): ShipmentInvoiceStatusInfo;
    /**
     * The Amazon-defined shipment identifier.
     * @member {String} amazonShipmentId
     * @type {String}
     */
    amazonShipmentId: string;
    /**
     * @member {ShipmentInvoiceStatus} invoiceStatus
     * @type {ShipmentInvoiceStatus}
     */
    invoiceStatus: ShipmentInvoiceStatus;
}
import { ShipmentInvoiceStatus } from './ShipmentInvoiceStatus.js';
//# sourceMappingURL=ShipmentInvoiceStatusInfo.d.ts.map