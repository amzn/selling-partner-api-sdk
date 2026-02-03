/**
 * The SubmitAcknowledgementResponse model module.
 * @module vendororders_v1/model/SubmitAcknowledgementResponse
 * @version v1
 */
export class SubmitAcknowledgementResponse {
    /**
     * Constructs a <code>SubmitAcknowledgementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SubmitAcknowledgementResponse} obj Optional instance to populate.
     * @return {SubmitAcknowledgementResponse} The populated <code>SubmitAcknowledgementResponse</code> instance.
     */
    static constructFromObject(data: any, obj: SubmitAcknowledgementResponse): SubmitAcknowledgementResponse;
    /**
     * @member {TransactionId} payload
     * @type {TransactionId}
     */
    payload: TransactionId;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { TransactionId } from './TransactionId.js';
//# sourceMappingURL=SubmitAcknowledgementResponse.d.ts.map