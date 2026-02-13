/**
 * The UpdateFulfillmentOrderRequest model module.
 * @module fulfillmentoutbound_v2020_07_01/model/UpdateFulfillmentOrderRequest
 * @version 2020-07-01
 */
export class UpdateFulfillmentOrderRequest {
    /**
     * Constructs a <code>UpdateFulfillmentOrderRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateFulfillmentOrderRequest} obj Optional instance to populate.
     * @return {UpdateFulfillmentOrderRequest} The populated <code>UpdateFulfillmentOrderRequest</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateFulfillmentOrderRequest): UpdateFulfillmentOrderRequest;
    /**
     * The marketplace the fulfillment order is placed against.
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
    /**
     * A fulfillment order identifier that the seller creates. This value displays as the order identifier in recipient-facing materials such as the outbound shipment packing slip. The value of `DisplayableOrderId` should match the order identifier that the seller provides to the recipient. The seller can use the `SellerFulfillmentOrderId` for this value or they can specify an alternate value if they want the recipient to reference an alternate order identifier.
     * @member {String} displayableOrderId
     * @type {String}
     */
    displayableOrderId: string;
    /**
     * Date timestamp
     * @member {Date} displayableOrderDate
     * @type {Date}
     */
    displayableOrderDate: Date;
    /**
     * Order-specific text that appears in recipient-facing materials such as the outbound shipment packing slip.
     * @member {String} displayableOrderComment
     * @type {String}
     */
    displayableOrderComment: string;
    /**
     * @member {ShippingSpeedCategory} shippingSpeedCategory
     * @type {ShippingSpeedCategory}
     */
    shippingSpeedCategory: ShippingSpeedCategory;
    /**
     * @member {Address} destinationAddress
     * @type {Address}
     */
    destinationAddress: Address;
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
     * The two-character country code for the country from which the fulfillment order ships. Must be in ISO 3166-1 alpha-2 format.
     * @member {String} shipFromCountryCode
     * @type {String}
     */
    shipFromCountryCode: string;
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
    /**
     * An array of fulfillment order item information for updating a fulfillment order.
     * @member {UpdateFulfillmentOrderItem[]} items
     * @type {UpdateFulfillmentOrderItem[]}
     */
    items: UpdateFulfillmentOrderItem[];
}
import { ShippingSpeedCategory } from './ShippingSpeedCategory.js';
import { Address } from './Address.js';
import { FulfillmentAction } from './FulfillmentAction.js';
import { FulfillmentPolicy } from './FulfillmentPolicy.js';
import { FeatureSettings } from './FeatureSettings.js';
import { UpdateFulfillmentOrderItem } from './UpdateFulfillmentOrderItem.js';
//# sourceMappingURL=UpdateFulfillmentOrderRequest.d.ts.map