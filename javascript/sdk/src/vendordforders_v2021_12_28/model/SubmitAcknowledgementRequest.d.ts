/**
 * The SubmitAcknowledgementRequest model module.
 * @module vendordforders_v2021_12_28/model/SubmitAcknowledgementRequest
 * @version 2021-12-28
 */
export class SubmitAcknowledgementRequest {
    /**
     * Constructs a <code>SubmitAcknowledgementRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SubmitAcknowledgementRequest} obj Optional instance to populate.
     * @return {SubmitAcknowledgementRequest} The populated <code>SubmitAcknowledgementRequest</code> instance.
     */
    static constructFromObject(data: any, obj: SubmitAcknowledgementRequest): SubmitAcknowledgementRequest;
    /**
     * A list of one or more purchase orders.
     * @member {[OrderAcknowledgementItem]} orderAcknowledgements
     * @type {[OrderAcknowledgementItem]}
     */
    orderAcknowledgements: [OrderAcknowledgementItem];
}
import { OrderAcknowledgementItem } from './OrderAcknowledgementItem.js';
//# sourceMappingURL=SubmitAcknowledgementRequest.d.ts.map