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
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
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
     * @member {Array[]} feeList
     * @type {Array[]}
     */
    feeList: any[][];
    /**
     * The type of payment.  Possible values:  * `Sales`
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
     * The fulfillment channel.  Possible values:  * `AFN`: Amazon Fulfillment Network (Fulfillment by Amazon)  * `MFN`: Merchant Fulfillment Network (self-fulfilled)
     * @member {String} fulfillmentChannel
     * @type {String}
     */
    fulfillmentChannel: string;
    /**
     * The name of the store where the event occurred.
     * @member {String} storeName
     * @type {String}
     */
    storeName: string;
}
import { ChargeComponent } from './ChargeComponent.js';
//# sourceMappingURL=PayWithAmazonEvent.d.ts.map