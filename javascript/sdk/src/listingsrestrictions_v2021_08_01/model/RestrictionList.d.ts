/**
 * The RestrictionList model module.
 * @module listingsrestrictions_v2021_08_01/model/RestrictionList
 * @version 2021-08-01
 */
export class RestrictionList {
    /**
     * Constructs a <code>RestrictionList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RestrictionList} obj Optional instance to populate.
     * @return {RestrictionList} The populated <code>RestrictionList</code> instance.
     */
    static constructFromObject(data: any, obj: RestrictionList): RestrictionList;
    /**
     * Constructs a new <code>RestrictionList</code>.
     * A list of restrictions for the specified Amazon catalog item.
     * @alias module:listingsrestrictions_v2021_08_01/model/RestrictionList
     * @class
     * @param restrictions {Array[]}
     */
    constructor(restrictions: any[][]);
    restrictions: any[][];
}
//# sourceMappingURL=RestrictionList.d.ts.map