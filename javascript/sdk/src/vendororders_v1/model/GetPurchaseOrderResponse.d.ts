/**
 * The GetPurchaseOrderResponse model module.
 * @module vendororders_v1/model/GetPurchaseOrderResponse
 * @version v1
 */
export class GetPurchaseOrderResponse {
    /**
     * Constructs a <code>GetPurchaseOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetPurchaseOrderResponse} obj Optional instance to populate.
     * @return {GetPurchaseOrderResponse} The populated <code>GetPurchaseOrderResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetPurchaseOrderResponse): GetPurchaseOrderResponse;
    /**
     * @member {Order} payload
     * @type {Order}
     */
    payload: Order;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { Order } from './Order.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetPurchaseOrderResponse.d.ts.map