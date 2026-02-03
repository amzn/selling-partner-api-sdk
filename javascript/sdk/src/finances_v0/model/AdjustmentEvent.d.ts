/**
 * The AdjustmentEvent model module.
 * @module finances_v0/model/AdjustmentEvent
 * @version v0
 */
export class AdjustmentEvent {
    /**
     * Constructs a <code>AdjustmentEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AdjustmentEvent} obj Optional instance to populate.
     * @return {AdjustmentEvent} The populated <code>AdjustmentEvent</code> instance.
     */
    static constructFromObject(data: any, obj: AdjustmentEvent): AdjustmentEvent;
    /**
     * The type of adjustment.  Possible values:  * `FBAInventoryReimbursement`: An FBA inventory reimbursement to a seller's account. This occurs if a seller's inventory is damaged. * `ReserveEvent`: A reserve event that is generated at the time a settlement period closes. This occurs when some money from a seller's account is held back. * `PostageBilling`: The amount paid by a seller for shipping labels. * `PostageRefund`: The reimbursement of shipping labels purchased for orders that were canceled or refunded. * `LostOrDamagedReimbursement`: An Amazon Easy Ship reimbursement to a seller's account for a package that we lost or damaged. * `CanceledButPickedUpReimbursement`: An Amazon Easy Ship reimbursement to a seller's account. This occurs when a package is picked up and the order is subsequently canceled. This value is used only in the India marketplace. * `ReimbursementClawback`: An Amazon Easy Ship reimbursement clawback from a seller's account. This occurs when a prior reimbursement is reversed. This value is used only in the India marketplace. * `SellerRewards`: An award credited to a seller's account for their participation in an offer in the Seller Rewards program. Applies only to the India marketplace.
     * @member {String} adjustmentType
     * @type {String}
     */
    adjustmentType: string;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * The name of the store where the event occurred.
     * @member {String} storeName
     * @type {String}
     */
    storeName: string;
    /**
     * @member {Currency} adjustmentAmount
     * @type {Currency}
     */
    adjustmentAmount: Currency;
    /**
     * A list of information about items in an adjustment to the seller's account.
     * @member {Array[]} adjustmentItemList
     * @type {Array[]}
     */
    adjustmentItemList: any[][];
}
import { Currency } from './Currency.js';
//# sourceMappingURL=AdjustmentEvent.d.ts.map