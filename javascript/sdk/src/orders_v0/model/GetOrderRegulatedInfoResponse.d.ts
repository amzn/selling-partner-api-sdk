/**
 * The GetOrderRegulatedInfoResponse model module.
 * @module orders_v0/model/GetOrderRegulatedInfoResponse
 * @version v0
 */
export class GetOrderRegulatedInfoResponse {
    /**
     * Constructs a <code>GetOrderRegulatedInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetOrderRegulatedInfoResponse} obj Optional instance to populate.
     * @return {GetOrderRegulatedInfoResponse} The populated <code>GetOrderRegulatedInfoResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetOrderRegulatedInfoResponse): GetOrderRegulatedInfoResponse;
    /**
     * @member {OrderRegulatedInfo} payload
     * @type {OrderRegulatedInfo}
     */
    payload: OrderRegulatedInfo;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { OrderRegulatedInfo } from './OrderRegulatedInfo.js';
//# sourceMappingURL=GetOrderRegulatedInfoResponse.d.ts.map