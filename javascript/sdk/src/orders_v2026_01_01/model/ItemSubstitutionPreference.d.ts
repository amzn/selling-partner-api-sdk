/**
 * The ItemSubstitutionPreference model module.
 * @module orders_v2026_01_01/model/ItemSubstitutionPreference
 * @version 2026-01-01
 */
export class ItemSubstitutionPreference {
    /**
     * Constructs a <code>ItemSubstitutionPreference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemSubstitutionPreference} obj Optional instance to populate.
     * @return {ItemSubstitutionPreference} The populated <code>ItemSubstitutionPreference</code> instance.
     */
    static constructFromObject(data: any, obj: ItemSubstitutionPreference): ItemSubstitutionPreference;
    /**
     * Constructs a new <code>ItemSubstitutionPreference</code>.
     * Substitution preference for an order item when it becomes unavailable during fulfillment.
     * @alias module:orders_v2026_01_01/model/ItemSubstitutionPreference
     * @class
     * @param substitutionType {String} Source and nature of the substitution preferences for this item.
     */
    constructor(substitutionType: string);
    substitutionType: string;
    /**
     * List of alternative products that can be substituted for the original item if it becomes unavailable.
     * @member {ItemSubstitutionOption[]} substitutionOptions
     * @type {ItemSubstitutionOption[]}
     */
    substitutionOptions: ItemSubstitutionOption[];
}
export namespace ItemSubstitutionPreference {
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
import { ItemSubstitutionOption } from './ItemSubstitutionOption.js';
//# sourceMappingURL=ItemSubstitutionPreference.d.ts.map