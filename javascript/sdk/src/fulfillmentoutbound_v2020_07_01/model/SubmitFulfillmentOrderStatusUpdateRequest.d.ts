/**
 * The SubmitFulfillmentOrderStatusUpdateRequest model module.
 * @module fulfillmentoutbound_v2020_07_01/model/SubmitFulfillmentOrderStatusUpdateRequest
 * @version 2020-07-01
 */
export class SubmitFulfillmentOrderStatusUpdateRequest {
    /**
     * Constructs a <code>SubmitFulfillmentOrderStatusUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SubmitFulfillmentOrderStatusUpdateRequest} obj Optional instance to populate.
     * @return {SubmitFulfillmentOrderStatusUpdateRequest} The populated <code>SubmitFulfillmentOrderStatusUpdateRequest</code> instance.
     */
    static constructFromObject(data: any, obj: SubmitFulfillmentOrderStatusUpdateRequest): SubmitFulfillmentOrderStatusUpdateRequest;
    /**
     * @member {FulfillmentOrderStatus} fulfillmentOrderStatus
     * @type {FulfillmentOrderStatus}
     */
    fulfillmentOrderStatus: FulfillmentOrderStatus;
}
import { FulfillmentOrderStatus } from './FulfillmentOrderStatus.js';
//# sourceMappingURL=SubmitFulfillmentOrderStatusUpdateRequest.d.ts.map