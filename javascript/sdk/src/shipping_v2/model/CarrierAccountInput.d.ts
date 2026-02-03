/**
 * The CarrierAccountInput model module.
 * @module shipping_v2/model/CarrierAccountInput
 * @version v2
 */
export class CarrierAccountInput {
    /**
     * Constructs a <code>CarrierAccountInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CarrierAccountInput} obj Optional instance to populate.
     * @return {CarrierAccountInput} The populated <code>CarrierAccountInput</code> instance.
     */
    static constructFromObject(data: any, obj: CarrierAccountInput): CarrierAccountInput;
    /**
     * descriptionLocalizationKey value .
     * @member {String} descriptionLocalizationKey
     * @type {String}
     */
    descriptionLocalizationKey: string;
    /**
     * name value .
     * @member {String} name
     * @type {String}
     */
    name: string;
    /**
     * groupName value .
     * @member {String} groupName
     * @type {String}
     */
    groupName: string;
    /**
     * @member {InputType} inputType
     * @type {InputType}
     */
    inputType: InputType;
    /**
     * mandatory or not  value .
     * @member {Boolean} isMandatory
     * @type {Boolean}
     */
    isMandatory: boolean;
    /**
     * is value is Confidential .
     * @member {Boolean} isConfidential
     * @type {Boolean}
     */
    isConfidential: boolean;
    /**
     * is value is hidden .
     * @member {Boolean} isHidden
     * @type {Boolean}
     */
    isHidden: boolean;
    /**
     * A list of ValidationMetadata
     * @member {Array[]} validationMetadata
     * @type {Array[]}
     */
    validationMetadata: any[][];
}
import { InputType } from './InputType.js';
//# sourceMappingURL=CarrierAccountInput.d.ts.map