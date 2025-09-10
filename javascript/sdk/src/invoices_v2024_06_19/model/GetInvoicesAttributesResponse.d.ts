/**
 * The GetInvoicesAttributesResponse model module.
 * @module invoices_v2024_06_19/model/GetInvoicesAttributesResponse
 * @version 2024-06-19
 */
export class GetInvoicesAttributesResponse {
    /**
     * Constructs a <code>GetInvoicesAttributesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetInvoicesAttributesResponse} obj Optional instance to populate.
     * @return {GetInvoicesAttributesResponse} The populated <code>GetInvoicesAttributesResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetInvoicesAttributesResponse): GetInvoicesAttributesResponse;
    /**
     * @member {InvoicesAttributes} invoicesAttributes
     * @type {InvoicesAttributes}
     */
    invoicesAttributes: InvoicesAttributes;
}
import { InvoicesAttributes } from './InvoicesAttributes.js';
//# sourceMappingURL=GetInvoicesAttributesResponse.d.ts.map