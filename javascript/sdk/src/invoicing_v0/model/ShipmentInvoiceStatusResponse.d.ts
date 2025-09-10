/**
 * The ShipmentInvoiceStatusResponse model module.
 * @module invoicing_v0/model/ShipmentInvoiceStatusResponse
 * @version v0
 */
export class ShipmentInvoiceStatusResponse {
    /**
     * Constructs a <code>ShipmentInvoiceStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentInvoiceStatusResponse} obj Optional instance to populate.
     * @return {ShipmentInvoiceStatusResponse} The populated <code>ShipmentInvoiceStatusResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentInvoiceStatusResponse): ShipmentInvoiceStatusResponse;
    /**
     * @member {ShipmentInvoiceStatusInfo} shipments
     * @type {ShipmentInvoiceStatusInfo}
     */
    shipments: ShipmentInvoiceStatusInfo;
}
import { ShipmentInvoiceStatusInfo } from './ShipmentInvoiceStatusInfo.js';
//# sourceMappingURL=ShipmentInvoiceStatusResponse.d.ts.map