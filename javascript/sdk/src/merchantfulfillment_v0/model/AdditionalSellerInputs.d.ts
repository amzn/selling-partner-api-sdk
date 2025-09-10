/**
 * The AdditionalSellerInputs model module.
 * @module merchantfulfillment_v0/model/AdditionalSellerInputs
 * @version v0
 */
export class AdditionalSellerInputs {
    /**
     * Constructs a <code>AdditionalSellerInputs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AdditionalSellerInputs} obj Optional instance to populate.
     * @return {AdditionalSellerInputs} The populated <code>AdditionalSellerInputs</code> instance.
     */
    static constructFromObject(data: any, obj: AdditionalSellerInputs): AdditionalSellerInputs;
    /**
     * Constructs a new <code>AdditionalSellerInputs</code>.
     * An additional set of seller inputs required to purchase shipping.
     * @alias module:merchantfulfillment_v0/model/AdditionalSellerInputs
     * @class
     * @param additionalInputFieldName {String} The name of the additional input field.
     * @param additionalSellerInput {AdditionalSellerInput}
     */
    constructor(additionalInputFieldName: string, additionalSellerInput: AdditionalSellerInput);
    additionalInputFieldName: string;
    additionalSellerInput: AdditionalSellerInput;
}
import { AdditionalSellerInput } from './AdditionalSellerInput.js';
//# sourceMappingURL=AdditionalSellerInputs.d.ts.map