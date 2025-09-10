/**
 * The ItemBrowseClassification model module.
 * @module catalogitems_v2022_04_01/model/ItemBrowseClassification
 * @version 2022-04-01
 */
export class ItemBrowseClassification {
    /**
     * Constructs a <code>ItemBrowseClassification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemBrowseClassification} obj Optional instance to populate.
     * @return {ItemBrowseClassification} The populated <code>ItemBrowseClassification</code> instance.
     */
    static constructFromObject(data: any, obj: ItemBrowseClassification): ItemBrowseClassification;
    /**
     * Constructs a new <code>ItemBrowseClassification</code>.
     * Classification (browse node) for an Amazon catalog item.
     * @alias module:catalogitems_v2022_04_01/model/ItemBrowseClassification
     * @class
     * @param displayName {String} Display name for the classification.
     * @param classificationId {String} Identifier of the classification.
     */
    constructor(displayName: string, classificationId: string);
    displayName: string;
    classificationId: string;
    /**
     * @member {ItemBrowseClassification} parent
     * @type {ItemBrowseClassification}
     */
    parent: ItemBrowseClassification;
}
//# sourceMappingURL=ItemBrowseClassification.d.ts.map