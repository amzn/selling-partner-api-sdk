/**
 * The ValidVerificationDetail model module.
 * @module orders_v0/model/ValidVerificationDetail
 * @version v0
 */
export class ValidVerificationDetail {
    /**
     * Constructs a <code>ValidVerificationDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ValidVerificationDetail} obj Optional instance to populate.
     * @return {ValidVerificationDetail} The populated <code>ValidVerificationDetail</code> instance.
     */
    static constructFromObject(data: any, obj: ValidVerificationDetail): ValidVerificationDetail;
    /**
     * Constructs a new <code>ValidVerificationDetail</code>.
     * The types of verification details that may be provided for the order and the criteria required for when the type of verification detail can be provided. The types of verification details allowed depend on the type of regulated product and will not change order to order.
     * @alias module:orders_v0/model/ValidVerificationDetail
     * @class
     * @param verificationDetailType {String} A supported type of verification detail. The type indicates which verification detail could be shared while updating the regulated order. Valid value: `prescriptionDetail`.
     * @param validVerificationStatuses {Array[]} A list of valid verification statuses where the associated verification detail type may be provided. For example, if the value of this field is [\"Approved\"], calls to provide the associated verification detail will fail for orders with a `VerificationStatus` of `Pending`, `Rejected`, `Expired`, or `Cancelled`.
     */
    constructor(verificationDetailType: string, validVerificationStatuses: any[][]);
    verificationDetailType: string;
    validVerificationStatuses: any[][];
}
//# sourceMappingURL=ValidVerificationDetail.d.ts.map