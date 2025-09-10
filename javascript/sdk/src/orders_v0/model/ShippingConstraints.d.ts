/**
 * The ShippingConstraints model module.
 * @module orders_v0/model/ShippingConstraints
 * @version v0
 */
export class ShippingConstraints {
    /**
     * Constructs a <code>ShippingConstraints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShippingConstraints} obj Optional instance to populate.
     * @return {ShippingConstraints} The populated <code>ShippingConstraints</code> instance.
     */
    static constructFromObject(data: any, obj: ShippingConstraints): ShippingConstraints;
    /**
     * @member {ConstraintType} palletDelivery
     * @type {ConstraintType}
     */
    palletDelivery: ConstraintType;
    /**
     * @member {ConstraintType} signatureConfirmation
     * @type {ConstraintType}
     */
    signatureConfirmation: ConstraintType;
    /**
     * @member {ConstraintType} recipientIdentityVerification
     * @type {ConstraintType}
     */
    recipientIdentityVerification: ConstraintType;
    /**
     * @member {ConstraintType} recipientAgeVerification
     * @type {ConstraintType}
     */
    recipientAgeVerification: ConstraintType;
}
import { ConstraintType } from './ConstraintType.js';
//# sourceMappingURL=ShippingConstraints.d.ts.map