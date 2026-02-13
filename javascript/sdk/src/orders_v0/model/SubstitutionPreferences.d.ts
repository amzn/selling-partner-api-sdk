/**
 * The SubstitutionPreferences model module.
 * @module orders_v0/model/SubstitutionPreferences
 * @version v0
 */
export class SubstitutionPreferences {
    /**
     * Constructs a <code>SubstitutionPreferences</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SubstitutionPreferences} obj Optional instance to populate.
     * @return {SubstitutionPreferences} The populated <code>SubstitutionPreferences</code> instance.
     */
    static constructFromObject(data: any, obj: SubstitutionPreferences): SubstitutionPreferences;
    /**
     * Constructs a new <code>SubstitutionPreferences</code>.
     * Substitution preferences for an order item.
     * @alias module:orders_v0/model/SubstitutionPreferences
     * @class
     * @param substitutionType {String} The type of substitution that these preferences represent.
     */
    constructor(substitutionType: string);
    substitutionType: string;
    /**
     * A collection of substitution options.
     * @member {SubstitutionOption[]} substitutionOptions
     * @type {SubstitutionOption[]}
     */
    substitutionOptions: SubstitutionOption[];
}
export namespace SubstitutionPreferences {
    namespace SubstitutionTypeEnum {
        let CUSTOMER_PREFERENCE: string;
        let AMAZON_RECOMMENDED: string;
        let DO_NOT_SUBSTITUTE: string;
    }
    /**
     * *
     */
    type SubstitutionTypeEnum = string;
}
import { SubstitutionOption } from './SubstitutionOption.js';
//# sourceMappingURL=SubstitutionPreferences.d.ts.map