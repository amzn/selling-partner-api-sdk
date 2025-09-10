/**
 * The PointsGrantedDetail model module.
 * @module orders_v0/model/PointsGrantedDetail
 * @version v0
 */
export class PointsGrantedDetail {
    /**
     * Constructs a <code>PointsGrantedDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PointsGrantedDetail} obj Optional instance to populate.
     * @return {PointsGrantedDetail} The populated <code>PointsGrantedDetail</code> instance.
     */
    static constructFromObject(data: any, obj: PointsGrantedDetail): PointsGrantedDetail;
    /**
     * The number of Amazon Points granted with the purchase of an item.
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
//# sourceMappingURL=PointsGrantedDetail.d.ts.map