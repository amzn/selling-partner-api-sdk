/**
 * The ItemClassificationSalesRank model module.
 * @module catalogitems_v2022_04_01/model/ItemClassificationSalesRank
 * @version 2022-04-01
 */
export class ItemClassificationSalesRank {
    /**
     * Constructs a <code>ItemClassificationSalesRank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemClassificationSalesRank} obj Optional instance to populate.
     * @return {ItemClassificationSalesRank} The populated <code>ItemClassificationSalesRank</code> instance.
     */
    static constructFromObject(data: any, obj: ItemClassificationSalesRank): ItemClassificationSalesRank;
    /**
     * Constructs a new <code>ItemClassificationSalesRank</code>.
     * Sales rank of an Amazon catalog item.
     * @alias module:catalogitems_v2022_04_01/model/ItemClassificationSalesRank
     * @class
     * @param classificationId {String} Identifier of the classification that is associated with the sales rank.
     * @param title {String} Name of the sales rank.
     * @param rank {Number} Sales rank.
     */
    constructor(classificationId: string, title: string, rank: number);
    classificationId: string;
    title: string;
    rank: number;
    /**
     * Corresponding Amazon retail website URL for the sales category.
     * @member {String} link
     * @type {String}
     */
    link: string;
}
//# sourceMappingURL=ItemClassificationSalesRank.d.ts.map