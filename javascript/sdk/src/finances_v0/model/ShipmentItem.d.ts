/**
 * The ShipmentItem model module.
 * @module finances_v0/model/ShipmentItem
 * @version v0
 */
export class ShipmentItem {
    /**
     * Constructs a <code>ShipmentItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentItem} obj Optional instance to populate.
     * @return {ShipmentItem} The populated <code>ShipmentItem</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentItem): ShipmentItem;
    /**
     * The seller SKU of the item. The seller SKU is qualified by the seller's seller ID, which is included with every call to the Selling Partner API.
     * @member {String} sellerSKU
     * @type {String}
     */
    sellerSKU: string;
    /**
     * An Amazon-defined order item identifier.
     * @member {String} orderItemId
     * @type {String}
     */
    orderItemId: string;
    /**
     * An Amazon-defined order adjustment identifier defined for refunds, guarantee claims, and chargeback events.
     * @member {String} orderAdjustmentItemId
     * @type {String}
     */
    orderAdjustmentItemId: string;
    /**
     * The number of items shipped.
     * @member {Number} quantityShipped
     * @type {Number}
     */
    quantityShipped: number;
    /**
     * A list of charge information on the seller's account.
     * @member {[ChargeComponent]} itemChargeList
     * @type {[ChargeComponent]}
     */
    itemChargeList: [ChargeComponent];
    /**
     * A list of charge information on the seller's account.
     * @member {[ChargeComponent]} itemChargeAdjustmentList
     * @type {[ChargeComponent]}
     */
    itemChargeAdjustmentList: [ChargeComponent];
    /**
     * A list of fee component information.
     * @member {[FeeComponent]} itemFeeList
     * @type {[FeeComponent]}
     */
    itemFeeList: [FeeComponent];
    /**
     * A list of fee component information.
     * @member {[FeeComponent]} itemFeeAdjustmentList
     * @type {[FeeComponent]}
     */
    itemFeeAdjustmentList: [FeeComponent];
    /**
     * A list of information about taxes withheld.
     * @member {[TaxWithheldComponent]} itemTaxWithheldList
     * @type {[TaxWithheldComponent]}
     */
    itemTaxWithheldList: [TaxWithheldComponent];
    /**
     * A list of promotions.
     * @member {[Promotion]} promotionList
     * @type {[Promotion]}
     */
    promotionList: [Promotion];
    /**
     * A list of promotions.
     * @member {[Promotion]} promotionAdjustmentList
     * @type {[Promotion]}
     */
    promotionAdjustmentList: [Promotion];
    /**
     * @member {Currency} costOfPointsGranted
     * @type {Currency}
     */
    costOfPointsGranted: Currency;
    /**
     * @member {Currency} costOfPointsReturned
     * @type {Currency}
     */
    costOfPointsReturned: Currency;
}
import { ChargeComponent } from './ChargeComponent.js';
import { FeeComponent } from './FeeComponent.js';
import { TaxWithheldComponent } from './TaxWithheldComponent.js';
import { Promotion } from './Promotion.js';
import { Currency } from './Currency.js';
//# sourceMappingURL=ShipmentItem.d.ts.map