/**
 * The FulfillmentPreview model module.
 * @module fulfillmentoutbound_v2020_07_01/model/FulfillmentPreview
 * @version 2020-07-01
 */
export class FulfillmentPreview {
    /**
     * Constructs a <code>FulfillmentPreview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FulfillmentPreview} obj Optional instance to populate.
     * @return {FulfillmentPreview} The populated <code>FulfillmentPreview</code> instance.
     */
    static constructFromObject(data: any, obj: FulfillmentPreview): FulfillmentPreview;
    /**
     * Constructs a new <code>FulfillmentPreview</code>.
     * Information about a fulfillment order preview, including delivery and fee information based on shipping method.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/FulfillmentPreview
     * @class
     * @param shippingSpeedCategory {ShippingSpeedCategory}
     * @param isFulfillable {Boolean} When true, this fulfillment order preview is fulfillable.
     * @param isCODCapable {Boolean} When true, this fulfillment order preview is for COD (Cash On Delivery).
     * @param marketplaceId {String} The marketplace the fulfillment order is placed against.
     */
    constructor(shippingSpeedCategory: ShippingSpeedCategory, isFulfillable: boolean, isCODCapable: boolean, marketplaceId: string);
    shippingSpeedCategory: ShippingSpeedCategory;
    isFulfillable: boolean;
    isCODCapable: boolean;
    marketplaceId: string;
    /**
     * @member {ScheduledDeliveryInfo} scheduledDeliveryInfo
     * @type {ScheduledDeliveryInfo}
     */
    scheduledDeliveryInfo: ScheduledDeliveryInfo;
    /**
     * @member {Weight} estimatedShippingWeight
     * @type {Weight}
     */
    estimatedShippingWeight: Weight;
    /**
     * An array of fee type and cost pairs.
     * @member {Array[]} estimatedFees
     * @type {Array[]}
     */
    estimatedFees: any[][];
    /**
     * An array of fulfillment preview shipment information.
     * @member {Array[]} fulfillmentPreviewShipments
     * @type {Array[]}
     */
    fulfillmentPreviewShipments: any[][];
    /**
     * An array of unfulfillable preview item information.
     * @member {Array[]} unfulfillablePreviewItems
     * @type {Array[]}
     */
    unfulfillablePreviewItems: any[][];
    /**
     * String list
     * @member {Array[]} orderUnfulfillableReasons
     * @type {Array[]}
     */
    orderUnfulfillableReasons: any[][];
    /**
     * A list of features and their fulfillment policies to apply to the order.
     * @member {Array[]} featureConstraints
     * @type {Array[]}
     */
    featureConstraints: any[][];
}
import { ShippingSpeedCategory } from './ShippingSpeedCategory.js';
import { ScheduledDeliveryInfo } from './ScheduledDeliveryInfo.js';
import { Weight } from './Weight.js';
//# sourceMappingURL=FulfillmentPreview.d.ts.map