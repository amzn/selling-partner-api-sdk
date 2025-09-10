/**
 * The SAFETReimbursementItem model module.
 * @module finances_v0/model/SAFETReimbursementItem
 * @version v0
 */
export class SAFETReimbursementItem {
    /**
     * Constructs a <code>SAFETReimbursementItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SAFETReimbursementItem} obj Optional instance to populate.
     * @return {SAFETReimbursementItem} The populated <code>SAFETReimbursementItem</code> instance.
     */
    static constructFromObject(data: any, obj: SAFETReimbursementItem): SAFETReimbursementItem;
    /**
     * A list of charge information on the seller's account.
     * @member {[ChargeComponent]} itemChargeList
     * @type {[ChargeComponent]}
     */
    itemChargeList: [ChargeComponent];
    /**
     * The description of the item as shown on the product detail page on the retail website.
     * @member {String} productDescription
     * @type {String}
     */
    productDescription: string;
    /**
     * The number of units of the item being reimbursed.
     * @member {String} quantity
     * @type {String}
     */
    quantity: string;
}
import { ChargeComponent } from './ChargeComponent.js';
//# sourceMappingURL=SAFETReimbursementItem.d.ts.map