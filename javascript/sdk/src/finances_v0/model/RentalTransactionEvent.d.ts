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
     * The type of rental event.  Possible values:  * `RentalCustomerPayment-Buyout`: A transaction type that represents when the customer wants to buy out a rented item.  * `RentalCustomerPayment-Extension`: A transaction type that represents when the customer wants to extend the rental period.  * `RentalCustomerRefund-Buyout`: A transaction type that represents when the customer requests a refund for the buyout of the rented item.  * `RentalCustomerRefund-Extension`: A transaction type that represents when the customer requests a refund over the extension on the rented item.  * `RentalHandlingFee`: A transaction type that represents the fee that Amazon charges sellers who rent through Amazon.  * `RentalChargeFailureReimbursement`: A transaction type that represents when Amazon sends money to the seller to compensate for a failed charge.  * `RentalLostItemReimbursement`: A transaction type that represents when Amazon sends money to the seller to compensate for a lost item.
     * @member {String} rentalEventType
     * @type {String}
     */
    rentalEventType: string;
    /**
     * The number of days that the buyer extended an already rented item. This value is only returned for `RentalCustomerPayment-Extension` and `RentalCustomerRefund-Extension` events.
     * @member {Number} extensionLength
     * @type {Number}
     */
    extensionLength: number;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * A list of charge information on the seller's account.
     * @member {Array[]} rentalChargeList
     * @type {Array[]}
     */
    rentalChargeList: any[][];
    /**
     * A list of fee component information.
     * @member {Array[]} rentalFeeList
     * @type {Array[]}
     */
    rentalFeeList: any[][];
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
     * @member {Array[]} rentalTaxWithheldList
     * @type {Array[]}
     */
    rentalTaxWithheldList: any[][];
}
import { Currency } from './Currency.js';
//# sourceMappingURL=RentalTransactionEvent.d.ts.map