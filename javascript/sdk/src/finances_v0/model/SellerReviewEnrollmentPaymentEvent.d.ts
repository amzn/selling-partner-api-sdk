/**
 * The SellerReviewEnrollmentPaymentEvent model module.
 * @module finances_v0/model/SellerReviewEnrollmentPaymentEvent
 * @version v0
 */
export class SellerReviewEnrollmentPaymentEvent {
    /**
     * Constructs a <code>SellerReviewEnrollmentPaymentEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SellerReviewEnrollmentPaymentEvent} obj Optional instance to populate.
     * @return {SellerReviewEnrollmentPaymentEvent} The populated <code>SellerReviewEnrollmentPaymentEvent</code> instance.
     */
    static constructFromObject(data: any, obj: SellerReviewEnrollmentPaymentEvent): SellerReviewEnrollmentPaymentEvent;
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * An enrollment identifier.
     * @member {String} enrollmentId
     * @type {String}
     */
    enrollmentId: string;
    /**
     * The Amazon Standard Identification Number (ASIN) of the item that was enrolled in the Early Reviewer Program.
     * @member {String} parentASIN
     * @type {String}
     */
    parentASIN: string;
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
//# sourceMappingURL=SellerReviewEnrollmentPaymentEvent.d.ts.map