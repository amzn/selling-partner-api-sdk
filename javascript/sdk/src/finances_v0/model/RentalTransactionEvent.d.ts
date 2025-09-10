/**
 * The RentalTransactionEvent model module.
 * @module finances_v0/model/RentalTransactionEvent
 * @version v0
 */
export class RentalTransactionEvent {
    /**
     * Constructs a <code>RentalTransactionEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RentalTransactionEvent} obj Optional instance to populate.
     * @return {RentalTransactionEvent} The populated <code>RentalTransactionEvent</code> instance.
     */
    static constructFromObject(data: any, obj: RentalTransactionEvent): RentalTransactionEvent;
    /**
     * An Amazon-defined identifier for an order.
     * @member {String} amazonOrderId
     * @type {String}
     */
    amazonOrderId: string;
    /**
     * The type of rental event.  Possible values:  * RentalCustomerPayment-Buyout - Transaction type that represents when the customer wants to buy out a rented item.  * RentalCustomerPayment-Extension - Transaction type that represents when the customer wants to extend the rental period.  * RentalCustomerRefund-Buyout - Transaction type that represents when the customer requests a refund for the buyout of the rented item.  * RentalCustomerRefund-Extension - Transaction type that represents when the customer requests a refund over the extension on the rented item.  * RentalHandlingFee - Transaction type that represents the fee that Amazon charges sellers who rent through Amazon.  * RentalChargeFailureReimbursement - Transaction type that represents when Amazon sends money to the seller to compensate for a failed charge.  * RentalLostItemReimbursement - Transaction type that represents when Amazon sends money to the seller to compensate for a lost item.
     * @member {String} rentalEventType
     * @type {String}
     */
    rentalEventType: string;
    /**
     * The number of days that the buyer extended an already rented item. This value is only returned for RentalCustomerPayment-Extension and RentalCustomerRefund-Extension events.
     * @member {Number} extensionLength
     * @type {Number}
     */
    extensionLength: number;
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * A list of charge information on the seller's account.
     * @member {[ChargeComponent]} rentalChargeList
     * @type {[ChargeComponent]}
     */
    rentalChargeList: [ChargeComponent];
    /**
     * A list of fee component information.
     * @member {[FeeComponent]} rentalFeeList
     * @type {[FeeComponent]}
     */
    rentalFeeList: [FeeComponent];
    /**
     * The name of the marketplace.
     * @member {String} marketplaceName
     * @type {String}
     */
    marketplaceName: string;
    /**
     * @member {Currency} rentalInitialValue
     * @type {Currency}
     */
    rentalInitialValue: Currency;
    /**
     * @member {Currency} rentalReimbursement
     * @type {Currency}
     */
    rentalReimbursement: Currency;
    /**
     * A list of information about taxes withheld.
     * @member {[TaxWithheldComponent]} rentalTaxWithheldList
     * @type {[TaxWithheldComponent]}
     */
    rentalTaxWithheldList: [TaxWithheldComponent];
}
import { ChargeComponent } from './ChargeComponent.js';
import { FeeComponent } from './FeeComponent.js';
import { Currency } from './Currency.js';
import { TaxWithheldComponent } from './TaxWithheldComponent.js';
//# sourceMappingURL=RentalTransactionEvent.d.ts.map