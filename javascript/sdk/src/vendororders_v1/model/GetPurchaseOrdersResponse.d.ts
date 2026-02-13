/**
 * The GetPurchaseOrdersResponse model module.
 * @module vendororders_v1/model/GetPurchaseOrdersResponse
 * @version v1
 */
export class GetPurchaseOrdersResponse {
    /**
     * Constructs a <code>GetPurchaseOrdersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetPurchaseOrdersResponse} obj Optional instance to populate.
     * @return {GetPurchaseOrdersResponse} The populated <code>GetPurchaseOrdersResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetPurchaseOrdersResponse): GetPurchaseOrdersResponse;
    /**
     * @member {OrderList} payload
     * @type {OrderList}
     */
    payload: OrderList;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { OrderList } from './OrderList.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetPurchaseOrdersResponse.d.ts.map