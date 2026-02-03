/**
 * The ItemRelationship model module.
 * @module listingsitems_v2021_08_01/model/ItemRelationship
 * @version 2021-08-01
 */
export class ItemRelationship {
    /**
     * Constructs a <code>ItemRelationship</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemRelationship} obj Optional instance to populate.
     * @return {ItemRelationship} The populated <code>ItemRelationship</code> instance.
     */
    static constructFromObject(data: any, obj: ItemRelationship): ItemRelationship;
    /**
     * Constructs a new <code>ItemRelationship</code>.
     * The relationship details for a listing item.
     * @alias module:listingsitems_v2021_08_01/model/ItemRelationship
     * @class
     * @param type {String} The type of relationship.
     */
    constructor(type: string);
    type: string;
    /**
     * Identifiers (SKUs) of the related items that are children of this listing item.
     * @member {Array[]} childSkus
     * @type {Array[]}
     */
    childSkus: any[][];
    /**
     * Identifiers (SKUs) of the related items that are parents of this listing item.
     * @member {Array[]} parentSkus
     * @type {Array[]}
     */
    parentSkus: any[][];
    /**
     * @member {ItemVariationTheme} variationTheme
     * @type {ItemVariationTheme}
     */
    variationTheme: ItemVariationTheme;
}
export namespace ItemRelationship {
    namespace TypeEnum {
        let VARIATION: string;
        let PACKAGE_HIERARCHY: string;
    }
    /**
     * *
     */
    type TypeEnum = string;
}
import { ItemVariationTheme } from './ItemVariationTheme.js';
//# sourceMappingURL=ItemRelationship.d.ts.map