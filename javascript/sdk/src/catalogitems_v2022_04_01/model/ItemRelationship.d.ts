/**
 * The ItemRelationship model module.
 * @module catalogitems_v2022_04_01/model/ItemRelationship
 * @version 2022-04-01
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
     * Relationship details for an Amazon catalog item.
     * @alias module:catalogitems_v2022_04_01/model/ItemRelationship
     * @class
     * @param type {String} Type of relationship.
     */
    constructor(type: string);
    type: string;
    /**
     * ASINs of the related items that are children of this item.
     * @member {[String]} childAsins
     * @type {[String]}
     */
    childAsins: [string];
    /**
     * ASINs of the related items that are parents of this item.
     * @member {[String]} parentAsins
     * @type {[String]}
     */
    parentAsins: [string];
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