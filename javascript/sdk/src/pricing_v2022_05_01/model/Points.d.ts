/**
 * The Points model module.
 * @module pricing_v2022_05_01/model/Points
 * @version 2022-05-01
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
     * The number of Amazon Points.
     * @member {Number} pointsNumber
     * @type {Number}
     */
    pointsNumber: number;
    /**
     * @member {MoneyType} pointsMonetaryValue
     * @type {MoneyType}
     */
    pointsMonetaryValue: MoneyType;
}
import { MoneyType } from './MoneyType.js';
//# sourceMappingURL=Points.d.ts.map