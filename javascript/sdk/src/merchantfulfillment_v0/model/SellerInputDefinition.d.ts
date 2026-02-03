/**
 * The SellerInputDefinition model module.
 * @module merchantfulfillment_v0/model/SellerInputDefinition
 * @version v0
 */
export class SellerInputDefinition {
    /**
     * Constructs a <code>SellerInputDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SellerInputDefinition} obj Optional instance to populate.
     * @return {SellerInputDefinition} The populated <code>SellerInputDefinition</code> instance.
     */
    static constructFromObject(data: any, obj: SellerInputDefinition): SellerInputDefinition;
    /**
     * Constructs a new <code>SellerInputDefinition</code>.
     * Specifies characteristics that apply to a seller input.
     * @alias module:merchantfulfillment_v0/model/SellerInputDefinition
     * @class
     * @param isRequired {Boolean} When true, the additional input field is required.
     * @param dataType {String} The data type of the additional input field.
     * @param constraints {Array[]} List of constraints.
     * @param inputDisplayText {String} The display text for the additional input field.
     * @param storedValue {AdditionalSellerInput}
     */
    constructor(isRequired: boolean, dataType: string, constraints: any[][], inputDisplayText: string, storedValue: AdditionalSellerInput);
    isRequired: boolean;
    dataType: string;
    constraints: any[][];
    inputDisplayText: string;
    storedValue: AdditionalSellerInput;
    /**
     * @member {InputTargetType} inputTarget
     * @type {InputTargetType}
     */
    inputTarget: InputTargetType;
    /**
     * The set of fixed values in an additional seller input.
     * @member {Array[]} restrictedSetValues
     * @type {Array[]}
     */
    restrictedSetValues: any[][];
}
import { AdditionalSellerInput } from './AdditionalSellerInput.js';
import { InputTargetType } from './InputTargetType.js';
//# sourceMappingURL=SellerInputDefinition.d.ts.map