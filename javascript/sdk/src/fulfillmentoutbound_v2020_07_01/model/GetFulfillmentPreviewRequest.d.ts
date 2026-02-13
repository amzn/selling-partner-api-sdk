/**
 * The GetFulfillmentPreviewRequest model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetFulfillmentPreviewRequest
 * @version 2020-07-01
 */
export class GetFulfillmentPreviewRequest {
    /**
     * Constructs a <code>GetFulfillmentPreviewRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetFulfillmentPreviewRequest} obj Optional instance to populate.
     * @return {GetFulfillmentPreviewRequest} The populated <code>GetFulfillmentPreviewRequest</code> instance.
     */
    static constructFromObject(data: any, obj: GetFulfillmentPreviewRequest): GetFulfillmentPreviewRequest;
    /**
     * Constructs a new <code>GetFulfillmentPreviewRequest</code>.
     * The request body schema for the &#x60;getFulfillmentPreview&#x60; operation.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/GetFulfillmentPreviewRequest
     * @class
     * @param address {Address}
     * @param items {[GetFulfillmentPreviewItem]} An array of fulfillment preview item information.
     */
    constructor(address: Address, items: [GetFulfillmentPreviewItem]);
    address: Address;
    items: GetFulfillmentPreviewItem[];
    /**
     * The marketplace the fulfillment order is placed against.
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
    /**
     * List of shipping speed categories.
     * @member {ShippingSpeedCategory[]} shippingSpeedCategories
     * @type {ShippingSpeedCategory[]}
     */
    shippingSpeedCategories: ShippingSpeedCategory[];
    /**
     * When true, returns all fulfillment order previews both for COD and not for COD. Otherwise, returns only fulfillment order previews that are not for COD.
     * @member {Boolean} includeCODFulfillmentPreview
     * @type {Boolean}
     */
    includeCODFulfillmentPreview: boolean;
    /**
     * When true, returns the `ScheduledDeliveryInfo` response object, which contains the available delivery windows for a Scheduled Delivery. The `ScheduledDeliveryInfo` response object can only be returned for fulfillment order previews with `ShippingSpeedCategories` equal to `ScheduledDelivery`.
     * @member {Boolean} includeDeliveryWindows
     * @type {Boolean}
     */
    includeDeliveryWindows: boolean;
    /**
     * A list of features and their fulfillment policies to apply to the order.
     * @member {FeatureSettings[]} featureConstraints
     * @type {FeatureSettings[]}
     */
    featureConstraints: FeatureSettings[];
}
import { Address } from './Address.js';
import { GetFulfillmentPreviewItem } from './GetFulfillmentPreviewItem.js';
import { ShippingSpeedCategory } from './ShippingSpeedCategory.js';
import { FeatureSettings } from './FeatureSettings.js';
//# sourceMappingURL=GetFulfillmentPreviewRequest.d.ts.map