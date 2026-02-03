/**
 * The RegulatedOrderVerificationStatus model module.
 * @module orders_v0/model/RegulatedOrderVerificationStatus
 * @version v0
 */
export class RegulatedOrderVerificationStatus {
    /**
     * Constructs a <code>RegulatedOrderVerificationStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RegulatedOrderVerificationStatus} obj Optional instance to populate.
     * @return {RegulatedOrderVerificationStatus} The populated <code>RegulatedOrderVerificationStatus</code> instance.
     */
    static constructFromObject(data: any, obj: RegulatedOrderVerificationStatus): RegulatedOrderVerificationStatus;
    /**
     * Constructs a new <code>RegulatedOrderVerificationStatus</code>.
     * The verification status of the order, along with associated approval or rejection metadata.
     * @alias module:orders_v0/model/RegulatedOrderVerificationStatus
     * @class
     * @param status {VerificationStatus}
     * @param requiresMerchantAction {Boolean} When true, the regulated information provided in the order requires a review by the merchant.
     * @param validRejectionReasons {Array[]} A list of valid rejection reasons that may be used to reject the order's regulated information.
     */
    constructor(status: VerificationStatus, requiresMerchantAction: boolean, validRejectionReasons: any[][]);
    status: VerificationStatus;
    requiresMerchantAction: boolean;
    validRejectionReasons: any[][];
    /**
     * @member {RejectionReason} rejectionReason
     * @type {RejectionReason}
     */
    rejectionReason: RejectionReason;
    /**
     * The date the order was reviewed. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format.
     * @member {String} reviewDate
     * @type {String}
     */
    reviewDate: string;
    /**
     * The identifier for the order's regulated information reviewer.
     * @member {String} externalReviewerId
     * @type {String}
     */
    externalReviewerId: string;
    /**
     * A list of valid verification details that may be provided and the criteria required for when the verification detail can be provided.
     * @member {Array[]} validVerificationDetails
     * @type {Array[]}
     */
    validVerificationDetails: any[][];
}
import { VerificationStatus } from './VerificationStatus.js';
import { RejectionReason } from './RejectionReason.js';
//# sourceMappingURL=RegulatedOrderVerificationStatus.d.ts.map