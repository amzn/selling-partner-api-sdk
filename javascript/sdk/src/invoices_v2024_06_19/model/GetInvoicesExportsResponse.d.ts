/**
 * The GetInvoicesExportsResponse model module.
 * @module invoices_v2024_06_19/model/GetInvoicesExportsResponse
 * @version 2024-06-19
 */
export class GetInvoicesExportsResponse {
    /**
     * Constructs a <code>GetInvoicesExportsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetInvoicesExportsResponse} obj Optional instance to populate.
     * @return {GetInvoicesExportsResponse} The populated <code>GetInvoicesExportsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetInvoicesExportsResponse): GetInvoicesExportsResponse;
    /**
     * A list of exports.
     * @member {[Export]} exports
     * @type {[Export]}
     */
    exports: [Export];
    /**
     * This token is returned when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the `getInvoices` operation and include this token with the previous call parameters.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
}
import { Export } from './Export.js';
//# sourceMappingURL=GetInvoicesExportsResponse.d.ts.map