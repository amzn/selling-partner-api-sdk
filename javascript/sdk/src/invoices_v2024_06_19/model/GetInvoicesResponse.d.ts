/**
 * The GetInvoicesResponse model module.
 * @module invoices_v2024_06_19/model/GetInvoicesResponse
 * @version 2024-06-19
 */
export class GetInvoicesResponse {
    /**
     * Constructs a <code>GetInvoicesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetInvoicesResponse} obj Optional instance to populate.
     * @return {GetInvoicesResponse} The populated <code>GetInvoicesResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetInvoicesResponse): GetInvoicesResponse;
    /**
     * A list of invoices.
     * @member {Invoice[]} invoices
     * @type {Invoice[]}
     */
    invoices: Invoice[];
    /**
     * This token is returned when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the `getInvoices` operation and include this token with the previous call parameters.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
}
import { Invoice } from './Invoice.js';
//# sourceMappingURL=GetInvoicesResponse.d.ts.map