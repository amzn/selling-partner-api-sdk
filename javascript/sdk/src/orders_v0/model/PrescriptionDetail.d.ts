/**
 * The PrescriptionDetail model module.
 * @module orders_v0/model/PrescriptionDetail
 * @version v0
 */
export class PrescriptionDetail {
    /**
     * Constructs a <code>PrescriptionDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PrescriptionDetail} obj Optional instance to populate.
     * @return {PrescriptionDetail} The populated <code>PrescriptionDetail</code> instance.
     */
    static constructFromObject(data: any, obj: PrescriptionDetail): PrescriptionDetail;
    /**
     * Constructs a new <code>PrescriptionDetail</code>.
     * Information about the prescription that is used to verify a regulated product. This must be provided once per order and reflect the seller’s own records. Only approved orders can have prescriptions.
     * @alias module:orders_v0/model/PrescriptionDetail
     * @class
     * @param prescriptionId {String} The identifier for the prescription used to verify the regulated product.
     * @param expirationDate {Date} The expiration date of the prescription used to verify the regulated product, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format.
     * @param writtenQuantity {Number} The number of units in each fill as provided in the prescription.
     * @param totalRefillsAuthorized {Number} The total number of refills written in the original prescription used to verify the regulated product. If a prescription originally had no refills, this value must be 0.
     * @param refillsRemaining {Number} The number of refills remaining for the prescription used to verify the regulated product. If a prescription originally had 10 total refills, this value must be `10` for the first order, `9` for the second order, and `0` for the eleventh order. If a prescription originally had no refills, this value must be 0.
     * @param clinicId {String} The identifier for the clinic which provided the prescription used to verify the regulated product.
     * @param usageInstructions {String} The instructions for the prescription as provided by the approver of the regulated product.
     */
    constructor(prescriptionId: string, expirationDate: Date, writtenQuantity: number, totalRefillsAuthorized: number, refillsRemaining: number, clinicId: string, usageInstructions: string);
    prescriptionId: string;
    expirationDate: Date;
    writtenQuantity: number;
    totalRefillsAuthorized: number;
    refillsRemaining: number;
    clinicId: string;
    usageInstructions: string;
}
//# sourceMappingURL=PrescriptionDetail.d.ts.map