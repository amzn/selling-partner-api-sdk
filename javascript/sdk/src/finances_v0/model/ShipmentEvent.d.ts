/**
 * The ShipmentEvent model module.
 * @module finances_v0/model/ShipmentEvent
 * @version v0
 */
export class ShipmentEvent {
    /**
     * Constructs a <code>ShipmentEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentEvent} obj Optional instance to populate.
     * @return {ShipmentEvent} The populated <code>ShipmentEvent</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentEvent): ShipmentEvent;
    /**
     * An Amazon-defined identifier for an order.
     * @member {String} amazonOrderId
     * @type {String}
     */
    amazonOrderId: string;
    /**
     * A seller-defined identifier for an order.
     * @member {String} sellerOrderId
     * @type {String}
     */
    sellerOrderId: string;
    /**
     * The name of the marketplace where the event occurred.
     * @member {String} marketplaceName
     * @type {String}
     */
    marketplaceName: string;
    /**
     * The name of the store where the event occurred.
     * @member {String} storeName
     * @type {String}
     */
    storeName: string;
    /**
     * A list of charge information on the seller's account.
     * @member {[ChargeComponent]} orderChargeList
     * @type {[ChargeComponent]}
     */
    orderChargeList: [ChargeComponent];
    /**
     * A list of charge information on the seller's account.
     * @member {[ChargeComponent]} orderChargeAdjustmentList
     * @type {[ChargeComponent]}
     */
    orderChargeAdjustmentList: [ChargeComponent];
    /**
     * A list of fee component information.
     * @member {[FeeComponent]} shipmentFeeList
     * @type {[FeeComponent]}
     */
    shipmentFeeList: [FeeComponent];
    /**
     * A list of fee component information.
     * @member {[FeeComponent]} shipmentFeeAdjustmentList
     * @type {[FeeComponent]}
     */
    shipmentFeeAdjustmentList: [FeeComponent];
    /**
     * A list of fee component information.
     * @member {[FeeComponent]} orderFeeList
     * @type {[FeeComponent]}
     */
    orderFeeList: [FeeComponent];
    /**
     * A list of fee component information.
     * @member {[FeeComponent]} orderFeeAdjustmentList
     * @type {[FeeComponent]}
     */
    orderFeeAdjustmentList: [FeeComponent];
    /**
     * A list of direct payment information.
     * @member {[DirectPayment]} directPaymentList
     * @type {[DirectPayment]}
     */
    directPaymentList: [DirectPayment];
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * A list of shipment items.
     * @member {[ShipmentItem]} shipmentItemList
     * @type {[ShipmentItem]}
     */
    shipmentItemList: [ShipmentItem];
    /**
     * A list of shipment items.
     * @member {[ShipmentItem]} shipmentItemAdjustmentList
     * @type {[ShipmentItem]}
     */
    shipmentItemAdjustmentList: [ShipmentItem];
}
import { ChargeComponent } from './ChargeComponent.js';
import { FeeComponent } from './FeeComponent.js';
import { DirectPayment } from './DirectPayment.js';
import { ShipmentItem } from './ShipmentItem.js';
//# sourceMappingURL=ShipmentEvent.d.ts.map