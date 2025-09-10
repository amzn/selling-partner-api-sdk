/**
 * The ItemDisplayGroupSalesRank model module.
 * @module catalogitems_v2022_04_01/model/ItemDisplayGroupSalesRank
 * @version 2022-04-01
 */
export class ItemDisplayGroupSalesRank {
    /**
     * Constructs a <code>ItemDisplayGroupSalesRank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemDisplayGroupSalesRank} obj Optional instance to populate.
     * @return {ItemDisplayGroupSalesRank} The populated <code>ItemDisplayGroupSalesRank</code> instance.
     */
    static constructFromObject(data: any, obj: ItemDisplayGroupSalesRank): ItemDisplayGroupSalesRank;
    /**
     * Constructs a new <code>ItemDisplayGroupSalesRank</code>.
     * Sales rank of an Amazon catalog item, grouped by website display group.
     * @alias module:catalogitems_v2022_04_01/model/ItemDisplayGroupSalesRank
     * @class
     * @param websiteDisplayGroup {String} Name of the website display group that is associated with the sales rank
     * @param title {String} Name of the sales rank.
     * @param rank {Number} Sales rank.
     */
    constructor(websiteDisplayGroup: string, title: string, rank: number);
    websiteDisplayGroup: string;
    title: string;
    rank: number;
    /**
     * Corresponding Amazon retail website URL for the sales rank.
     * @member {String} link
     * @type {String}
     */
    link: string;
}
//# sourceMappingURL=ItemDisplayGroupSalesRank.d.ts.map