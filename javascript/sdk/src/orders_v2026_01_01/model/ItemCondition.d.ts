/**
 * The ItemCondition model module.
 * @module orders_v2026_01_01/model/ItemCondition
 * @version 2026-01-01
 */
export class ItemCondition {
    /**
     * Constructs a <code>ItemCondition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemCondition} obj Optional instance to populate.
     * @return {ItemCondition} The populated <code>ItemCondition</code> instance.
     */
    static constructFromObject(data: any, obj: ItemCondition): ItemCondition;
    /**
     * The primary condition category that broadly describes the item's state.  **Possible values**: `NEW`, `USED`, `COLLECTIBLE`, `REFURBISHED`, `PREORDER`, `CLUB`.
     * @member {String} conditionType
     * @type {String}
     */
    conditionType: string;
    /**
     * A more specific condition classification that provides additional detail about the item's quality within the main condition type.  **Possible values**: `NEW`, `MINT`, `VERY_GOOD`, `GOOD`, `ACCEPTABLE`, `POOR`, `CLUB`, `OEM`, `WARRANTY`, `REFURBISHED_WARRANTY`, `REFURBISHED`, `OPEN_BOX`, `ANY`, `OTHER`.
     * @member {String} conditionSubtype
     * @type {String}
     */
    conditionSubtype: string;
    /**
     * Additional details provided by the seller to describe the specific condition of this particular item.
     * @member {String} conditionNote
     * @type {String}
     */
    conditionNote: string;
}
//# sourceMappingURL=ItemCondition.d.ts.map