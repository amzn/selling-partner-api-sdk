/**
 * The UpdateVerificationStatusRequest model module.
 * @module orders_v0/model/UpdateVerificationStatusRequest
 * @version v0
 */
export class UpdateVerificationStatusRequest {
    /**
     * Constructs a <code>UpdateVerificationStatusRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateVerificationStatusRequest} obj Optional instance to populate.
     * @return {UpdateVerificationStatusRequest} The populated <code>UpdateVerificationStatusRequest</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateVerificationStatusRequest): UpdateVerificationStatusRequest;
    /**
     * Constructs a new <code>UpdateVerificationStatusRequest</code>.
     * The request body for the &#x60;updateVerificationStatus&#x60; operation.
     * @alias module:orders_v0/model/UpdateVerificationStatusRequest
     * @class
     * @param regulatedOrderVerificationStatus {UpdateVerificationStatusRequestBody}
     */
    constructor(regulatedOrderVerificationStatus: UpdateVerificationStatusRequestBody);
    regulatedOrderVerificationStatus: UpdateVerificationStatusRequestBody;
}
import { UpdateVerificationStatusRequestBody } from './UpdateVerificationStatusRequestBody.js';
//# sourceMappingURL=UpdateVerificationStatusRequest.d.ts.map