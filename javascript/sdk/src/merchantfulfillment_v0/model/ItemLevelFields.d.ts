/**
 * The ItemLevelFields model module.
 * @module merchantfulfillment_v0/model/ItemLevelFields
 * @version v0
 */
export class ItemLevelFields {
    /**
     * Constructs a <code>ItemLevelFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemLevelFields} obj Optional instance to populate.
     * @return {ItemLevelFields} The populated <code>ItemLevelFields</code> instance.
     */
    static constructFromObject(data: any, obj: ItemLevelFields): ItemLevelFields;
    /**
     * Constructs a new <code>ItemLevelFields</code>.
     * A list of item level fields.
     * @alias module:merchantfulfillment_v0/model/ItemLevelFields
     * @class
     * @param asin {String} The Amazon Standard Identification Number (ASIN) of the item.
     * @param additionalInputs {[AdditionalInputs]} A list of additional inputs.
     */
    constructor(asin: string, additionalInputs: [AdditionalInputs]);
    asin: string;
    additionalInputs: AdditionalInputs[];
}
import { AdditionalInputs } from './AdditionalInputs.js';
//# sourceMappingURL=ItemLevelFields.d.ts.map