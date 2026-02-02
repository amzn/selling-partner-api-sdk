/**
 * The ItemPicking model module.
 * @module orders_v2026_01_01/model/ItemPicking
 * @version 2026-01-01
 */
export class ItemPicking {
    /**
     * Constructs a <code>ItemPicking</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemPicking} obj Optional instance to populate.
     * @return {ItemPicking} The populated <code>ItemPicking</code> instance.
     */
    static constructFromObject(data: any, obj: ItemPicking): ItemPicking;
    /**
     * @member {ItemSubstitutionPreference} substitutionPreference
     * @type {ItemSubstitutionPreference}
     */
    substitutionPreference: ItemSubstitutionPreference;
}
import { ItemSubstitutionPreference } from './ItemSubstitutionPreference.js';
//# sourceMappingURL=ItemPicking.d.ts.map