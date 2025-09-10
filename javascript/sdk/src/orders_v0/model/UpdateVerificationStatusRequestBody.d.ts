/**
 * The UpdateVerificationStatusRequestBody model module.
 * @module orders_v0/model/UpdateVerificationStatusRequestBody
 * @version v0
 */
export class UpdateVerificationStatusRequestBody {
    /**
     * Constructs a <code>UpdateVerificationStatusRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateVerificationStatusRequestBody} obj Optional instance to populate.
     * @return {UpdateVerificationStatusRequestBody} The populated <code>UpdateVerificationStatusRequestBody</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateVerificationStatusRequestBody): UpdateVerificationStatusRequestBody;
    /**
     * Constructs a new <code>UpdateVerificationStatusRequestBody</code>.
     * The updated values of the &#x60;VerificationStatus&#x60; field.
     * @alias module:orders_v0/model/UpdateVerificationStatusRequestBody
     * @class
     * @param externalReviewerId {String} The identifier of the order's regulated information reviewer.
     */
    constructor(externalReviewerId: string);
    externalReviewerId: string;
    /**
     * @member {VerificationStatus} status
     * @type {VerificationStatus}
     */
    status: VerificationStatus;
    /**
     * The unique identifier of the rejection reason used for rejecting the order's regulated information. Only required if the new status is rejected.
     * @member {String} rejectionReasonId
     * @type {String}
     */
    rejectionReasonId: string;
    /**
     * @member {VerificationDetails} verificationDetails
     * @type {VerificationDetails}
     */
    verificationDetails: VerificationDetails;
}
import { VerificationStatus } from './VerificationStatus.js';
import { VerificationDetails } from './VerificationDetails.js';
//# sourceMappingURL=UpdateVerificationStatusRequestBody.d.ts.map