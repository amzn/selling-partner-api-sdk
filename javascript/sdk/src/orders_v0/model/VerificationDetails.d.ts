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
    static constructFromObject(data: any, obj: VerificationDetails): VerificationDetails;
    /**
     * @member {PrescriptionDetail} prescriptionDetail
     * @type {PrescriptionDetail}
     */
    prescriptionDetail: PrescriptionDetail;
}
import { PrescriptionDetail } from './PrescriptionDetail.js';
//# sourceMappingURL=VerificationDetails.d.ts.map