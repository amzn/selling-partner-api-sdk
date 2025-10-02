/**
 * The ComplianceAttributes model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/ComplianceAttributes
 * @version 2024-09-11
 */
export class ComplianceAttributes {
    /**
     * Constructs a <code>ComplianceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ComplianceAttributes} obj Optional instance to populate.
     * @return {ComplianceAttributes} The populated <code>ComplianceAttributes</code> instance.
     */
    static constructFromObject(data: any, obj: ComplianceAttributes): ComplianceAttributes;
    /**
     * Constructs a new <code>ComplianceAttributes</code>.
     * All necessary compliance attributes specific to the line item.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/ComplianceAttributes
     * @class
     * @param hazmatLabelsRequirement {RequirementLevel}
     * @param serialNumberRequirement {RequirementLevel}
     * @param countryOfOriginRequirement {RequirementLevel}
     * @param itemValueRequirement {RequirementLevel}
     */
    constructor(hazmatLabelsRequirement: RequirementLevel, serialNumberRequirement: RequirementLevel, countryOfOriginRequirement: RequirementLevel, itemValueRequirement: RequirementLevel);
    hazmatLabelsRequirement: RequirementLevel;
    serialNumberRequirement: RequirementLevel;
    countryOfOriginRequirement: RequirementLevel;
    itemValueRequirement: RequirementLevel;
}
import { RequirementLevel } from './RequirementLevel.js';
//# sourceMappingURL=ComplianceAttributes.d.ts.map