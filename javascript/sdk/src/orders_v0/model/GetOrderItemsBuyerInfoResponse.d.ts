/**
 * The GetOrderItemsBuyerInfoResponse model module.
 * @module orders_v0/model/GetOrderItemsBuyerInfoResponse
 * @version v0
 */
export class GetOrderItemsBuyerInfoResponse {
    /**
     * Constructs a <code>GetOrderItemsBuyerInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetOrderItemsBuyerInfoResponse} obj Optional instance to populate.
     * @return {GetOrderItemsBuyerInfoResponse} The populated <code>GetOrderItemsBuyerInfoResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetOrderItemsBuyerInfoResponse): GetOrderItemsBuyerInfoResponse;
    /**
     * @member {OrderItemsBuyerInfoList} payload
     * @type {OrderItemsBuyerInfoList}
     */
    payload: OrderItemsBuyerInfoList;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { OrderItemsBuyerInfoList } from './OrderItemsBuyerInfoList.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetOrderItemsBuyerInfoResponse.d.ts.map