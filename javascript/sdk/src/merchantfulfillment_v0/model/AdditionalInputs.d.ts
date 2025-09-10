/**
 * The AdditionalInputs model module.
 * @module merchantfulfillment_v0/model/AdditionalInputs
 * @version v0
 */
export class AdditionalInputs {
    /**
     * Constructs a <code>AdditionalInputs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AdditionalInputs} obj Optional instance to populate.
     * @return {AdditionalInputs} The populated <code>AdditionalInputs</code> instance.
     */
    static constructFromObject(data: any, obj: AdditionalInputs): AdditionalInputs;
    /**
     * The field name.
     * @member {String} additionalInputFieldName
     * @type {String}
     */
    additionalInputFieldName: string;
    /**
     * @member {SellerInputDefinition} sellerInputDefinition
     * @type {SellerInputDefinition}
     */
    sellerInputDefinition: SellerInputDefinition;
}
import { SellerInputDefinition } from './SellerInputDefinition.js';
//# sourceMappingURL=AdditionalInputs.d.ts.map