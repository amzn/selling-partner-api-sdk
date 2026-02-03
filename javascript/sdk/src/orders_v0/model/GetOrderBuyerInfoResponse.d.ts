/**
 * The GetOrderBuyerInfoResponse model module.
 * @module orders_v0/model/GetOrderBuyerInfoResponse
 * @version v0
 */
export class GetOrderBuyerInfoResponse {
    /**
     * Constructs a <code>GetOrderBuyerInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetOrderBuyerInfoResponse} obj Optional instance to populate.
     * @return {GetOrderBuyerInfoResponse} The populated <code>GetOrderBuyerInfoResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetOrderBuyerInfoResponse): GetOrderBuyerInfoResponse;
    /**
     * @member {OrderBuyerInfo} payload
     * @type {OrderBuyerInfo}
     */
    payload: OrderBuyerInfo;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { OrderBuyerInfo } from './OrderBuyerInfo.js';
//# sourceMappingURL=GetOrderBuyerInfoResponse.d.ts.map