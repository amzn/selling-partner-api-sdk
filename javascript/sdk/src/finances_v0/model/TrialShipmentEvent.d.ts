/**
 * The TrialShipmentEvent model module.
 * @module finances_v0/model/TrialShipmentEvent
 * @version v0
 */
export class TrialShipmentEvent {
    /**
     * Constructs a <code>TrialShipmentEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TrialShipmentEvent} obj Optional instance to populate.
     * @return {TrialShipmentEvent} The populated <code>TrialShipmentEvent</code> instance.
     */
    static constructFromObject(data: any, obj: TrialShipmentEvent): TrialShipmentEvent;
    /**
     * An Amazon-defined identifier for an order.
     * @member {String} amazonOrderId
     * @type {String}
     */
    amazonOrderId: string;
    /**
     * The identifier of the financial event group.
     * @member {String} financialEventGroupId
     * @type {String}
     */
    financialEventGroupId: string;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * The seller SKU of the item. The seller SKU is qualified by the seller's seller ID, which is included with every call to the Selling Partner API.
     * @member {String} SKU
     * @type {String}
     */
    SKU: string;
    /**
     * A list of fee component information.
     * @member {FeeComponent[]} feeList
     * @type {FeeComponent[]}
     */
    feeList: FeeComponent[];
}
import { FeeComponent } from './FeeComponent.js';
//# sourceMappingURL=TrialShipmentEvent.d.ts.map