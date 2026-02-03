/**
 * The GetPurchaseOrdersStatusResponse model module.
 * @module vendororders_v1/model/GetPurchaseOrdersStatusResponse
 * @version v1
 */
export class GetPurchaseOrdersStatusResponse {
    /**
     * Constructs a <code>GetPurchaseOrdersStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetPurchaseOrdersStatusResponse} obj Optional instance to populate.
     * @return {GetPurchaseOrdersStatusResponse} The populated <code>GetPurchaseOrdersStatusResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetPurchaseOrdersStatusResponse): GetPurchaseOrdersStatusResponse;
    /**
     * @member {OrderListStatus} payload
     * @type {OrderListStatus}
     */
    payload: OrderListStatus;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { OrderListStatus } from './OrderListStatus.js';
//# sourceMappingURL=GetPurchaseOrdersStatusResponse.d.ts.map