/**
 * The GetInvoiceStatusResponse model module.
 * @module invoicing_v0/model/GetInvoiceStatusResponse
 * @version v0
 */
export class GetInvoiceStatusResponse {
    /**
     * Constructs a <code>GetInvoiceStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetInvoiceStatusResponse} obj Optional instance to populate.
     * @return {GetInvoiceStatusResponse} The populated <code>GetInvoiceStatusResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetInvoiceStatusResponse): GetInvoiceStatusResponse;
    /**
     * @member {ShipmentInvoiceStatusResponse} payload
     * @type {ShipmentInvoiceStatusResponse}
     */
    payload: ShipmentInvoiceStatusResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { ShipmentInvoiceStatusResponse } from './ShipmentInvoiceStatusResponse.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetInvoiceStatusResponse.d.ts.map