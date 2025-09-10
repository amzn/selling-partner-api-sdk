/**
 * The SubmitInvoiceResponse model module.
 * @module invoicing_v0/model/SubmitInvoiceResponse
 * @version v0
 */
export class SubmitInvoiceResponse {
    /**
     * Constructs a <code>SubmitInvoiceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SubmitInvoiceResponse} obj Optional instance to populate.
     * @return {SubmitInvoiceResponse} The populated <code>SubmitInvoiceResponse</code> instance.
     */
    static constructFromObject(data: any, obj: SubmitInvoiceResponse): SubmitInvoiceResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { Error } from './Error.js';
//# sourceMappingURL=SubmitInvoiceResponse.d.ts.map