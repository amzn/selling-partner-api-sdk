/**
 * The BoxContentsFeeDetails model module.
 * @module fulfillmentinbound_v0/model/BoxContentsFeeDetails
 * @version v0
 */
export class BoxContentsFeeDetails {
    /**
     * Constructs a <code>BoxContentsFeeDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BoxContentsFeeDetails} obj Optional instance to populate.
     * @return {BoxContentsFeeDetails} The populated <code>BoxContentsFeeDetails</code> instance.
     */
    static constructFromObject(data: any, obj: BoxContentsFeeDetails): BoxContentsFeeDetails;
    /**
     * The item quantity.
     * @member {Number} totalUnits
     * @type {Number}
     */
    totalUnits: number;
    /**
     * @member {Amount} feePerUnit
     * @type {Amount}
     */
    feePerUnit: Amount;
    /**
     * @member {Amount} totalFee
     * @type {Amount}
     */
    totalFee: Amount;
}
import { Amount } from './Amount.js';
//# sourceMappingURL=BoxContentsFeeDetails.d.ts.map