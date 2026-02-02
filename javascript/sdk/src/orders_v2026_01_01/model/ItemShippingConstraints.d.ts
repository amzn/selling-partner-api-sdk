/**
 * The ItemShippingConstraints model module.
 * @module orders_v2026_01_01/model/ItemShippingConstraints
 * @version 2026-01-01
 */
export class ItemShippingConstraints {
    /**
     * Constructs a <code>ItemShippingConstraints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemShippingConstraints} obj Optional instance to populate.
     * @return {ItemShippingConstraints} The populated <code>ItemShippingConstraints</code> instance.
     */
    static constructFromObject(data: any, obj: ItemShippingConstraints): ItemShippingConstraints;
    /**
     * @member {ConstraintType} palletDelivery
     * @type {ConstraintType}
     */
    palletDelivery: ConstraintType;
    /**
     * @member {ConstraintType} cashOnDelivery
     * @type {ConstraintType}
     */
    cashOnDelivery: ConstraintType;
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
//# sourceMappingURL=ItemShippingConstraints.d.ts.map