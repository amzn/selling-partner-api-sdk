/**
 * The ApprovedAttribute model module.
 * @module orders_v0/model/ApprovedAttribute
 * @version v0
 */
export class ApprovedAttribute {
    /**
     * Constructs a <code>ApprovedAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ApprovedAttribute} obj Optional instance to populate.
     * @return {ApprovedAttribute} The populated <code>ApprovedAttribute</code> instance.
     */
    static constructFromObject(data: Object, obj: ApprovedAttribute): ApprovedAttribute;
    /**
     * Constructs a new <code>ApprovedAttribute</code>.
     * An order attribute with its original value and the pre-approved alternative value suggested by the vet.
     * @alias module:orders_v0/model/ApprovedAttribute
     * @class
     * @param attributeName {String} The name of the attribute requiring correction (for example, `asin`, `petWeight`).
     * @param originalValue {String} The original value of the attribute in the rejected order.
     * @param approvedValue {String} The pre-approved value that would result in order approval.
     */
    constructor(attributeName: string, originalValue: string, approvedValue: string);
    attributeName: string;
    originalValue: string;
    approvedValue: string;
}
//# sourceMappingURL=ApprovedAttribute.d.ts.map