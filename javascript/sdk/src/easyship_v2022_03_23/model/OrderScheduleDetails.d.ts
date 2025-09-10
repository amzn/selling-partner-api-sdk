/**
 * The OrderScheduleDetails model module.
 * @module easyship_v2022_03_23/model/OrderScheduleDetails
 * @version 2022-03-23
 */
export class OrderScheduleDetails {
    /**
     * Constructs a <code>OrderScheduleDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderScheduleDetails} obj Optional instance to populate.
     * @return {OrderScheduleDetails} The populated <code>OrderScheduleDetails</code> instance.
     */
    static constructFromObject(data: any, obj: OrderScheduleDetails): OrderScheduleDetails;
    /**
     * Constructs a new <code>OrderScheduleDetails</code>.
     * This object allows users to specify an order to be scheduled. Only the amazonOrderId is required.
     * @alias module:easyship_v2022_03_23/model/OrderScheduleDetails
     * @class
     * @param amazonOrderId {String} An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
     */
    constructor(amazonOrderId: string);
    amazonOrderId: string;
    /**
     * @member {PackageDetails} packageDetails
     * @type {PackageDetails}
     */
    packageDetails: PackageDetails;
}
import { PackageDetails } from './PackageDetails.js';
//# sourceMappingURL=OrderScheduleDetails.d.ts.map