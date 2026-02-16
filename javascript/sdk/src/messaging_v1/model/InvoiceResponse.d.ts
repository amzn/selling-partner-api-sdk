/**
 * The InvoiceResponse model module.
 * @module messaging_v1/model/InvoiceResponse
 * @version v1
 */
export class InvoiceResponse {
    /**
     * Constructs a <code>InvoiceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InvoiceResponse} obj Optional instance to populate.
     * @return {InvoiceResponse} The populated <code>InvoiceResponse</code> instance.
     */
    static constructFromObject(data: any, obj: InvoiceResponse): InvoiceResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { Error } from './Error.js';
//# sourceMappingURL=InvoiceResponse.d.ts.map