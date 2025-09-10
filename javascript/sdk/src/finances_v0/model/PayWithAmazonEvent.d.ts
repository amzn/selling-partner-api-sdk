/**
 * The PayWithAmazonEvent model module.
 * @module finances_v0/model/PayWithAmazonEvent
 * @version v0
 */
export class PayWithAmazonEvent {
    /**
     * Constructs a <code>PayWithAmazonEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PayWithAmazonEvent} obj Optional instance to populate.
     * @return {PayWithAmazonEvent} The populated <code>PayWithAmazonEvent</code> instance.
     */
    static constructFromObject(data: any, obj: PayWithAmazonEvent): PayWithAmazonEvent;
    /**
     * An order identifier that is specified by the seller.
     * @member {String} sellerOrderId
     * @type {String}
     */
    sellerOrderId: string;
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @member {Date} transactionPostedDate
     * @type {Date}
     */
    transactionPostedDate: Date;
    /**
     * The type of business object.
     * @member {String} businessObjectType
     * @type {String}
     */
    businessObjectType: string;
    /**
     * The sales channel for the transaction.
     * @member {String} salesChannel
     * @type {String}
     */
    salesChannel: string;
    /**
     * @member {ChargeComponent} charge
     * @type {ChargeComponent}
     */
    charge: ChargeComponent;
    /**
     * A list of fee component information.
     * @member {[FeeComponent]} feeList
     * @type {[FeeComponent]}
     */
    feeList: [FeeComponent];
    /**
     * The type of payment.  Possible values:  * Sales
     * @member {String} paymentAmountType
     * @type {String}
     */
    paymentAmountType: string;
    /**
     * A short description of this payment event.
     * @member {String} amountDescription
     * @type {String}
     */
    amountDescription: string;
    /**
     * The fulfillment channel.  Possible values:  * AFN - Amazon Fulfillment Network (Fulfillment by Amazon)  * MFN - Merchant Fulfillment Network (self-fulfilled)
     * @member {String} fulfillmentChannel
     * @type {String}
     */
    fulfillmentChannel: string;
    /**
     * The store name where the event occurred.
     * @member {String} storeName
     * @type {String}
     */
    storeName: string;
}
import { ChargeComponent } from './ChargeComponent.js';
import { FeeComponent } from './FeeComponent.js';
//# sourceMappingURL=PayWithAmazonEvent.d.ts.map