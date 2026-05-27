/**
 * The VerificationDetails model module.
 * @module orders_v0/model/VerificationDetails
 * @version v0
 */
export class VerificationDetails {
    /**
     * Constructs a <code>VerificationDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {VerificationDetails} obj Optional instance to populate.
     * @return {VerificationDetails} The populated <code>VerificationDetails</code> instance.
     */
    static constructFromObject(data: Object, obj: VerificationDetails): VerificationDetails;
    /**
     * @member {PrescriptionDetail} prescriptionDetail
     * @type {PrescriptionDetail}
     */
    prescriptionDetail: PrescriptionDetail;
    /**
     * Pre-approved alternative product attributes available for a rejected order. Each element contains an attribute name, its original value from the rejected order, and the corrected value that would result in approval (for example, a substituted `asin` or adjusted `petWeight`).
     * @member {ApprovedAttribute[]} approvedAlternativeDetails
     * @type {ApprovedAttribute[]}
     */
    approvedAlternativeDetails: ApprovedAttribute[];
    /**
     * @member {InterimStatusDetail} interimStatusDetail
     * @type {InterimStatusDetail}
     */
    interimStatusDetail: InterimStatusDetail;
}
import { PrescriptionDetail } from './PrescriptionDetail.js';
import { ApprovedAttribute } from './ApprovedAttribute.js';
import { InterimStatusDetail } from './InterimStatusDetail.js';
//# sourceMappingURL=VerificationDetails.d.ts.map