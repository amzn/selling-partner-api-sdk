/**
 * The CouponPaymentEvent model module.
 * @module finances_v0/model/CouponPaymentEvent
 * @version v0
 */
export class CouponPaymentEvent {
    /**
     * Constructs a <code>CouponPaymentEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CouponPaymentEvent} obj Optional instance to populate.
     * @return {CouponPaymentEvent} The populated <code>CouponPaymentEvent</code> instance.
     */
    static constructFromObject(data: any, obj: CouponPaymentEvent): CouponPaymentEvent;
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * A coupon identifier.
     * @member {String} couponId
     * @type {String}
     */
    couponId: string;
    /**
     * The description provided by the seller when they created the coupon.
     * @member {String} sellerCouponDescription
     * @type {String}
     */
    sellerCouponDescription: string;
    /**
     * The number of coupon clips or redemptions.
     * @member {Number} clipOrRedemptionCount
     * @type {Number}
     */
    clipOrRedemptionCount: number;
    /**
     * A payment event identifier.
     * @member {String} paymentEventId
     * @type {String}
     */
    paymentEventId: string;
    /**
     * @member {FeeComponent} feeComponent
     * @type {FeeComponent}
     */
    feeComponent: FeeComponent;
    /**
     * @member {ChargeComponent} chargeComponent
     * @type {ChargeComponent}
     */
    chargeComponent: ChargeComponent;
    /**
     * @member {Currency} totalAmount
     * @type {Currency}
     */
    totalAmount: Currency;
}
import { FeeComponent } from './FeeComponent.js';
import { ChargeComponent } from './ChargeComponent.js';
import { Currency } from './Currency.js';
//# sourceMappingURL=CouponPaymentEvent.d.ts.map