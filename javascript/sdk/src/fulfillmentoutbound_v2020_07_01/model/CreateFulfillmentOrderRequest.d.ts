/**
 * The CreateFulfillmentOrderRequest model module.
 * @module fulfillmentoutbound_v2020_07_01/model/CreateFulfillmentOrderRequest
 * @version 2020-07-01
 */
export class CreateFulfillmentOrderRequest {
    /**
     * Constructs a <code>CreateFulfillmentOrderRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateFulfillmentOrderRequest} obj Optional instance to populate.
     * @return {CreateFulfillmentOrderRequest} The populated <code>CreateFulfillmentOrderRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateFulfillmentOrderRequest): CreateFulfillmentOrderRequest;
    /**
     * Constructs a new <code>CreateFulfillmentOrderRequest</code>.
     * The request body schema for the &#x60;createFulfillmentOrder&#x60; operation.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/CreateFulfillmentOrderRequest
     * @class
     * @param sellerFulfillmentOrderId {String} A fulfillment order identifier that the seller creates to track their fulfillment order. The `sellerFulfillmentOrderId` must be unique for each fulfillment order that a seller creates. If the seller's system already creates unique order identifiers, then these might be good values for them to use.
     * @param displayableOrderId {String} A fulfillment order identifier that the seller creates. This value displays as the order identifier in recipient-facing materials such as the outbound shipment packing slip. The value of `displayableOrderId` should match the order identifier that the seller provides to the recipient. The seller can use the SellerFulfillmentOrderId for this value or they can specify an alternate value if they want the recipient to reference an alternate order identifier.  The value must be an alpha-numeric or ISO 8859-1 compliant string from one to 40 characters in length. Cannot contain two spaces in a row. Leading and trailing white space is removed.
     * @param displayableOrderDate {Date} Date timestamp
     * @param displayableOrderComment {String} Order-specific text that appears in recipient-facing materials such as the outbound shipment packing slip.
     * @param shippingSpeedCategory {ShippingSpeedCategory}
     * @param destinationAddress {Address}
     * @param items {Array[]} An array of item information for creating a fulfillment order.
     */
    constructor(sellerFulfillmentOrderId: string, displayableOrderId: string, displayableOrderDate: Date, displayableOrderComment: string, shippingSpeedCategory: ShippingSpeedCategory, destinationAddress: Address, items: any[][]);
    sellerFulfillmentOrderId: string;
    displayableOrderId: string;
    displayableOrderDate: Date;
    displayableOrderComment: string;
    shippingSpeedCategory: ShippingSpeedCategory;
    destinationAddress: Address;
    items: any[][];
    /**
     * The marketplace the fulfillment order is placed against.
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
    /**
     * @member {DeliveryWindow} deliveryWindow
     * @type {DeliveryWindow}
     */
    deliveryWindow: DeliveryWindow;
    /**
     * @member {DeliveryPreferences} deliveryPreferences
     * @type {DeliveryPreferences}
     */
    deliveryPreferences: DeliveryPreferences;
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
     * The two-character country code for the country from which the fulfillment order ships. Must be in ISO 3166-1 alpha-2 format.
     * @member {String} shipFromCountryCode
     * @type {String}
     */
    shipFromCountryCode: string;
    /**
     * A list of email addresses that the seller provides that are used by Amazon to send ship-complete notifications to recipients on behalf of the seller.
     * @member {Array[]} notificationEmails
     * @type {Array[]}
     */
    notificationEmails: any[][];
    /**
     * A list of features and their fulfillment policies to apply to the order.
     * @member {Array[]} featureConstraints
     * @type {Array[]}
     */
    featureConstraints: any[][];
    /**
     * An array of various payment attributes related to this fulfillment order.
     * @member {Array[]} paymentInformation
     * @type {Array[]}
     */
    paymentInformation: any[][];
}
import { ShippingSpeedCategory } from './ShippingSpeedCategory.js';
import { Address } from './Address.js';
import { DeliveryWindow } from './DeliveryWindow.js';
import { DeliveryPreferences } from './DeliveryPreferences.js';
import { FulfillmentAction } from './FulfillmentAction.js';
import { FulfillmentPolicy } from './FulfillmentPolicy.js';
import { CODSettings } from './CODSettings.js';
//# sourceMappingURL=CreateFulfillmentOrderRequest.d.ts.map