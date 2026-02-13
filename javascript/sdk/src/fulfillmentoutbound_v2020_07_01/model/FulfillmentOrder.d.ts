/**
 * The FulfillmentOrder model module.
 * @module fulfillmentoutbound_v2020_07_01/model/FulfillmentOrder
 * @version 2020-07-01
 */
export class FulfillmentOrder {
    /**
     * Constructs a <code>FulfillmentOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FulfillmentOrder} obj Optional instance to populate.
     * @return {FulfillmentOrder} The populated <code>FulfillmentOrder</code> instance.
     */
    static constructFromObject(data: any, obj: FulfillmentOrder): FulfillmentOrder;
    /**
     * Constructs a new <code>FulfillmentOrder</code>.
     * General information about a fulfillment order, including its status.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/FulfillmentOrder
     * @class
     * @param sellerFulfillmentOrderId {String} The fulfillment order identifier submitted with the `createFulfillmentOrder` operation.
     * @param marketplaceId {String} The identifier for the marketplace the fulfillment order is placed against.
     * @param displayableOrderId {String} A fulfillment order identifier submitted with the `createFulfillmentOrder` operation. Displays as the order identifier in recipient-facing materials such as the packing slip.
     * @param displayableOrderDate {Date} Date timestamp
     * @param displayableOrderComment {String} A text block submitted with the `createFulfillmentOrder` operation. Displays in recipient-facing materials such as the packing slip.
     * @param shippingSpeedCategory {ShippingSpeedCategory}
     * @param destinationAddress {Address}
     * @param receivedDate {Date} Date timestamp
     * @param fulfillmentOrderStatus {FulfillmentOrderStatus}
     * @param statusUpdatedDate {Date} Date timestamp
     */
    constructor(sellerFulfillmentOrderId: string, marketplaceId: string, displayableOrderId: string, displayableOrderDate: Date, displayableOrderComment: string, shippingSpeedCategory: ShippingSpeedCategory, destinationAddress: Address, receivedDate: Date, fulfillmentOrderStatus: FulfillmentOrderStatus, statusUpdatedDate: Date);
    sellerFulfillmentOrderId: string;
    marketplaceId: string;
    displayableOrderId: string;
    displayableOrderDate: Date;
    displayableOrderComment: string;
    shippingSpeedCategory: ShippingSpeedCategory;
    destinationAddress: Address;
    receivedDate: Date;
    fulfillmentOrderStatus: FulfillmentOrderStatus;
    statusUpdatedDate: Date;
    /**
     * @member {DeliveryWindow} deliveryWindow
     * @type {DeliveryWindow}
     */
    deliveryWindow: DeliveryWindow;
    /**
     * @member {FulfillmentAction} fulfillmentAction
     * @type {FulfillmentAction}
     */
    fulfillmentAction: FulfillmentAction;
    /**
     * @member {FulfillmentPolicy} fulfillmentPolicy
     * @type {FulfillmentPolicy}
     */
    fulfillmentPolicy: FulfillmentPolicy;
    /**
     * @member {CODSettings} codSettings
     * @type {CODSettings}
     */
    codSettings: CODSettings;
    /**
     * A list of email addresses that the seller provides that are used by Amazon to send ship-complete notifications to recipients on behalf of the seller.
     * @member {String[]} notificationEmails
     * @type {String[]}
     */
    notificationEmails: string[];
    /**
     * A list of features and their fulfillment policies to apply to the order.
     * @member {FeatureSettings[]} featureConstraints
     * @type {FeatureSettings[]}
     */
    featureConstraints: FeatureSettings[];
}
import { ShippingSpeedCategory } from './ShippingSpeedCategory.js';
import { Address } from './Address.js';
import { FulfillmentOrderStatus } from './FulfillmentOrderStatus.js';
import { DeliveryWindow } from './DeliveryWindow.js';
import { FulfillmentAction } from './FulfillmentAction.js';
import { FulfillmentPolicy } from './FulfillmentPolicy.js';
import { CODSettings } from './CODSettings.js';
import { FeatureSettings } from './FeatureSettings.js';
//# sourceMappingURL=FulfillmentOrder.d.ts.map