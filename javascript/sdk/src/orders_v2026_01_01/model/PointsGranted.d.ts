/**
 * The PointsGranted model module.
 * @module orders_v2026_01_01/model/PointsGranted
 * @version 2026-01-01
 */
export class PointsGranted {
    /**
     * Constructs a <code>PointsGranted</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PointsGranted} obj Optional instance to populate.
     * @return {PointsGranted} The populated <code>PointsGranted</code> instance.
     */
    static constructFromObject(data: any, obj: PointsGranted): PointsGranted;
    /**
     * Total number of Amazon Points granted to the customer's account for this item purchase.
     * @member {Number} pointsNumber
     * @type {Number}
     */
    pointsNumber: number;
    /**
     * @member {Money} pointsMonetaryValue
     * @type {Money}
     */
    pointsMonetaryValue: Money;
}
import { Money } from './Money.js';
//# sourceMappingURL=PointsGranted.d.ts.map