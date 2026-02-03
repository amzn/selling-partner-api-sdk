/**
 * The FeesEstimate model module.
 * @module productfees_v0/model/FeesEstimate
 * @version v0
 */
export class FeesEstimate {
    /**
     * Constructs a <code>FeesEstimate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FeesEstimate} obj Optional instance to populate.
     * @return {FeesEstimate} The populated <code>FeesEstimate</code> instance.
     */
    static constructFromObject(data: any, obj: FeesEstimate): FeesEstimate;
    /**
     * Constructs a new <code>FeesEstimate</code>.
     * The total estimated fees for an item and a list of details.
     * @alias module:productfees_v0/model/FeesEstimate
     * @class
     * @param timeOfFeesEstimation {Date} The time at which the fees were estimated. This defaults to the time the request is made.
     */
    constructor(timeOfFeesEstimation: Date);
    timeOfFeesEstimation: Date;
    /**
     * @member {MoneyType} totalFeesEstimate
     * @type {MoneyType}
     */
    totalFeesEstimate: MoneyType;
    /**
     * A list of other fees that contribute to a given fee.
     * @member {Array[]} feeDetailList
     * @type {Array[]}
     */
    feeDetailList: any[][];
}
import { MoneyType } from './MoneyType.js';
//# sourceMappingURL=FeesEstimate.d.ts.map