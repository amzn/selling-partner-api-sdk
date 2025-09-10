/**
 * The SalesRankType model module.
 * @module pricing_v0/model/SalesRankType
 * @version v0
 */
export class SalesRankType {
    /**
     * Constructs a <code>SalesRankType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SalesRankType} obj Optional instance to populate.
     * @return {SalesRankType} The populated <code>SalesRankType</code> instance.
     */
    static constructFromObject(data: any, obj: SalesRankType): SalesRankType;
    /**
     * Constructs a new <code>SalesRankType</code>.
     * Sales rank information for the item, by category
     * @alias module:pricing_v0/model/SalesRankType
     * @class
     * @param productCategoryId {String}  Identifies the item category from which the sales rank is taken.
     * @param rank {Number} The sales rank of the item within the item category.
     */
    constructor(productCategoryId: string, rank: number);
    productCategoryId: string;
    rank: number;
}
//# sourceMappingURL=SalesRankType.d.ts.map