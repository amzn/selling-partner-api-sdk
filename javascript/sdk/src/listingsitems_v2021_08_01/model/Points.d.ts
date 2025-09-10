/**
 * The Points model module.
 * @module listingsitems_v2021_08_01/model/Points
 * @version 2021-08-01
 */
export class Points {
    /**
     * Constructs a <code>Points</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Points} obj Optional instance to populate.
     * @return {Points} The populated <code>Points</code> instance.
     */
    static constructFromObject(data: any, obj: Points): Points;
    /**
     * Constructs a new <code>Points</code>.
     * The number of Amazon Points offered with the purchase of an item, and their monetary value. Note that the &#x60;Points&#x60; element is only returned in Japan (JP).
     * @alias module:listingsitems_v2021_08_01/model/Points
     * @class
     * @param pointsNumber {Number}
     */
    constructor(pointsNumber: number);
    pointsNumber: number;
}
//# sourceMappingURL=Points.d.ts.map