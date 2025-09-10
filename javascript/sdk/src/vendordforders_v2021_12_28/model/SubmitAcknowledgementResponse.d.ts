/**
 * The SubmitAcknowledgementResponse model module.
 * @module vendordforders_v2021_12_28/model/SubmitAcknowledgementResponse
 * @version 2021-12-28
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
     * @member {ErrorList} errors
     * @type {ErrorList}
     */
    errors: ErrorList;
}
import { TransactionId } from './TransactionId.js';
import { ErrorList } from './ErrorList.js';
//# sourceMappingURL=SubmitAcknowledgementResponse.d.ts.map