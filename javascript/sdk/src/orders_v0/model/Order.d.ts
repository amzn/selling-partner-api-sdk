/**
 * The Order model module.
 * @module orders_v0/model/Order
 * @version v0
 */
export class Order {
    /**
     * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Order} obj Optional instance to populate.
     * @return {Order} The populated <code>Order</code> instance.
     */
    static constructFromObject(data: any, obj: Order): Order;
    /**
     * Constructs a new <code>Order</code>.
     * Order information.
     * @alias module:orders_v0/model/Order
     * @class
     * @param amazonOrderId {String} An Amazon-defined order identifier, in 3-7-7 format.
     * @param purchaseDate {String} The date when the order was created.
     * @param lastUpdateDate {String} The date when the order was last updated.  __Note__: `LastUpdateDate` is returned with an incorrect date for orders that were last updated before 2009-04-01.
     * @param orderStatus {String} The current order status.
     */
    constructor(amazonOrderId: string, purchaseDate: string, lastUpdateDate: string, orderStatus: string);
    amazonOrderId: string;
    purchaseDate: string;
    lastUpdateDate: string;
    orderStatus: string;
    /**
     * A seller-defined order identifier.
     * @member {String} sellerOrderId
     * @type {String}
     */
    sellerOrderId: string;
    /**
     * Whether the order was fulfilled by Amazon (`AFN`) or by the seller (`MFN`).
     * @member {String} fulfillmentChannel
     * @type {String}
     */
    fulfillmentChannel: string;
    /**
     * The sales channel for the first item in the order.
     * @member {String} salesChannel
     * @type {String}
     */
    salesChannel: string;
    /**
     * The order channel for the first item in the order.
     * @member {String} orderChannel
     * @type {String}
     */
    orderChannel: string;
    /**
     * The order's shipment service level.
     * @member {String} shipServiceLevel
     * @type {String}
     */
    shipServiceLevel: string;
    /**
     * @member {Money} orderTotal
     * @type {Money}
     */
    orderTotal: Money;
    /**
     * The number of items shipped.
     * @member {Number} numberOfItemsShipped
     * @type {Number}
     */
    numberOfItemsShipped: number;
    /**
     * The number of items unshipped.
     * @member {Number} numberOfItemsUnshipped
     * @type {Number}
     */
    numberOfItemsUnshipped: number;
    /**
     * A list of payment execution detail items.
     * @member {[PaymentExecutionDetailItem]} paymentExecutionDetail
     * @type {[PaymentExecutionDetailItem]}
     */
    paymentExecutionDetail: [PaymentExecutionDetailItem];
    /**
     * The payment method for the order. This property is limited to COD and CVS payment methods. Unless you need the specific COD payment information provided by the `PaymentExecutionDetailItem` object, we recommend using the `PaymentMethodDetails` property to get payment method information.
     * @member {String} paymentMethod
     * @type {String}
     */
    paymentMethod: string;
    /**
     * A list of payment method detail items.
     * @member {[String]} paymentMethodDetails
     * @type {[String]}
     */
    paymentMethodDetails: [string];
    /**
     * The identifier for the marketplace where the order was placed.
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
    /**
     * The shipment service level category for the order.  **Possible values**: `Expedited`, `FreeEconomy`, `NextDay`, `Priority`, `SameDay`, `SecondDay`, `Scheduled`, and `Standard`.
     * @member {String} shipmentServiceLevelCategory
     * @type {String}
     */
    shipmentServiceLevelCategory: string;
    /**
     * @member {EasyShipShipmentStatus} easyShipShipmentStatus
     * @type {EasyShipShipmentStatus}
     */
    easyShipShipmentStatus: EasyShipShipmentStatus;
    /**
     * Custom ship label for Checkout by Amazon (CBA).
     * @member {String} cbaDisplayableShippingLabel
     * @type {String}
     */
    cbaDisplayableShippingLabel: string;
    /**
     * The order's type.
     * @member {String} orderType
     * @type {String}
     */
    orderType: string;
    /**
     * The start of the time period within which you have committed to ship the order. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format. Only returned for seller-fulfilled orders.  __Note__: `EarliestShipDate` might not be returned for orders placed before February 1, 2013.
     * @member {String} earliestShipDate
     * @type {String}
     */
    earliestShipDate: string;
    /**
     * The end of the time period within which you have committed to ship the order. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format. Only returned for seller-fulfilled orders.  __Note__: `LatestShipDate` might not be returned for orders placed before February 1, 2013.
     * @member {String} latestShipDate
     * @type {String}
     */
    latestShipDate: string;
    /**
     * The start of the time period within which you have committed to fulfill the order. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format. Only returned for seller-fulfilled orders.
     * @member {String} earliestDeliveryDate
     * @type {String}
     */
    earliestDeliveryDate: string;
    /**
     * The end of the time period within which you have committed to fulfill the order. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format. Only returned for seller-fulfilled orders that do not have a `PendingAvailability`, `Pending`, or `Canceled` status.
     * @member {String} latestDeliveryDate
     * @type {String}
     */
    latestDeliveryDate: string;
    /**
     * When true, the order is an Amazon Business order. An Amazon Business order is an order where the buyer is a Verified Business Buyer.
     * @member {Boolean} isBusinessOrder
     * @type {Boolean}
     */
    isBusinessOrder: boolean;
    /**
     * When true, the order is a seller-fulfilled Amazon Prime order.
     * @member {Boolean} isPrime
     * @type {Boolean}
     */
    isPrime: boolean;
    /**
     * When true, the order has a Premium Shipping Service Level Agreement. For more information about Premium Shipping orders, refer to \"Premium Shipping Options\" in the Seller Central Help for your marketplace.
     * @member {Boolean} isPremiumOrder
     * @type {Boolean}
     */
    isPremiumOrder: boolean;
    /**
     * When true, the order is a `GlobalExpress` order.
     * @member {Boolean} isGlobalExpressEnabled
     * @type {Boolean}
     */
    isGlobalExpressEnabled: boolean;
    /**
     * The order ID value for the order that is being replaced. Returned only if IsReplacementOrder = true.
     * @member {String} replacedOrderId
     * @type {String}
     */
    replacedOrderId: string;
    /**
     * When true, this is a replacement order.
     * @member {Boolean} isReplacementOrder
     * @type {Boolean}
     */
    isReplacementOrder: boolean;
    /**
     * Indicates the date by which the seller must respond to the buyer with an estimated ship date. Only returned for Sourcing on Demand orders.
     * @member {String} promiseResponseDueDate
     * @type {String}
     */
    promiseResponseDueDate: string;
    /**
     * When true, the estimated ship date is set for the order. Only returned for Sourcing on Demand orders.
     * @member {Boolean} isEstimatedShipDateSet
     * @type {Boolean}
     */
    isEstimatedShipDateSet: boolean;
    /**
     * When true, the item within this order was bought and re-sold by Amazon Business EU SARL (ABEU). By buying and instantly re-selling your items, ABEU becomes the seller of record, making your inventory available for sale to customers who would not otherwise purchase from a third-party seller.
     * @member {Boolean} isSoldByAB
     * @type {Boolean}
     */
    isSoldByAB: boolean;
    /**
     * When true, the item within this order was bought and re-sold by Amazon Business EU SARL (ABEU). By buying and instantly re-selling your items, ABEU becomes the seller of record, making your inventory available for sale to customers who would not otherwise purchase from a third-party seller.
     * @member {Boolean} isIBA
     * @type {Boolean}
     */
    isIBA: boolean;
    /**
     * @member {Address} defaultShipFromLocationAddress
     * @type {Address}
     */
    defaultShipFromLocationAddress: Address;
    /**
     * The buyer's invoicing preference. Sellers can use this data to issue electronic invoices for orders in Turkey.  **Note**: This attribute is only available in the Turkey marketplace.
     * @member {String} buyerInvoicePreference
     * @type {String}
     */
    buyerInvoicePreference: string;
    /**
     * @member {BuyerTaxInformation} buyerTaxInformation
     * @type {BuyerTaxInformation}
     */
    buyerTaxInformation: BuyerTaxInformation;
    /**
     * @member {FulfillmentInstruction} fulfillmentInstruction
     * @type {FulfillmentInstruction}
     */
    fulfillmentInstruction: FulfillmentInstruction;
    /**
     * When true, this order is marked to be picked up from a store rather than delivered.
     * @member {Boolean} isISPU
     * @type {Boolean}
     */
    isISPU: boolean;
    /**
     * When true, this order is marked to be delivered to an Access Point. The access location is chosen by the customer. Access Points include Amazon Hub Lockers, Amazon Hub Counters, and pickup points operated by carriers.
     * @member {Boolean} isAccessPointOrder
     * @type {Boolean}
     */
    isAccessPointOrder: boolean;
    /**
     * @member {MarketplaceTaxInfo} marketplaceTaxInfo
     * @type {MarketplaceTaxInfo}
     */
    marketplaceTaxInfo: MarketplaceTaxInfo;
    /**
     * The seller’s friendly name registered in the marketplace where the sale took place. Sellers can use this data to issue electronic invoices for orders in Brazil.  **Note**: This attribute is only available in the Brazil marketplace for the orders with `Pending` or `Unshipped` status.
     * @member {String} sellerDisplayName
     * @type {String}
     */
    sellerDisplayName: string;
    /**
     * @member {Address} shippingAddress
     * @type {Address}
     */
    shippingAddress: Address;
    /**
     * @member {BuyerInfo} buyerInfo
     * @type {BuyerInfo}
     */
    buyerInfo: BuyerInfo;
    /**
     * @member {AutomatedShippingSettings} automatedShippingSettings
     * @type {AutomatedShippingSettings}
     */
    automatedShippingSettings: AutomatedShippingSettings;
    /**
     * Whether the order contains regulated items which may require additional approval steps before being fulfilled.
     * @member {Boolean} hasRegulatedItems
     * @type {Boolean}
     */
    hasRegulatedItems: boolean;
    /**
     * @member {ElectronicInvoiceStatus} electronicInvoiceStatus
     * @type {ElectronicInvoiceStatus}
     */
    electronicInvoiceStatus: ElectronicInvoiceStatus;
}
export namespace Order {
    namespace OrderStatusEnum {
        let Pending: string;
        let Unshipped: string;
        let PartiallyShipped: string;
        let Shipped: string;
        let Canceled: string;
        let Unfulfillable: string;
        let InvoiceUnconfirmed: string;
        let PendingAvailability: string;
    }
    /**
     * *
     */
    type OrderStatusEnum = string;
    namespace FulfillmentChannelEnum {
        let MFN: string;
        let AFN: string;
    }
    /**
     * *
     */
    type FulfillmentChannelEnum = string;
    namespace PaymentMethodEnum {
        let COD: string;
        let CVS: string;
        let Other: string;
    }
    /**
     * *
     */
    type PaymentMethodEnum = string;
    namespace OrderTypeEnum {
        let StandardOrder: string;
        let LongLeadTimeOrder: string;
        let Preorder: string;
        let BackOrder: string;
        let SourcingOnDemandOrder: string;
    }
    /**
     * *
     */
    type OrderTypeEnum = string;
    namespace BuyerInvoicePreferenceEnum {
        let INDIVIDUAL: string;
        let BUSINESS: string;
    }
    /**
     * *
     */
    type BuyerInvoicePreferenceEnum = string;
}
import { Money } from './Money.js';
import { PaymentExecutionDetailItem } from './PaymentExecutionDetailItem.js';
import { EasyShipShipmentStatus } from './EasyShipShipmentStatus.js';
import { Address } from './Address.js';
import { BuyerTaxInformation } from './BuyerTaxInformation.js';
import { FulfillmentInstruction } from './FulfillmentInstruction.js';
import { MarketplaceTaxInfo } from './MarketplaceTaxInfo.js';
import { BuyerInfo } from './BuyerInfo.js';
import { AutomatedShippingSettings } from './AutomatedShippingSettings.js';
import { ElectronicInvoiceStatus } from './ElectronicInvoiceStatus.js';
//# sourceMappingURL=Order.d.ts.map