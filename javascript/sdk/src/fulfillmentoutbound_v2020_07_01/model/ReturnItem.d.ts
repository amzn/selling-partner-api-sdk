/**
 * The ReturnItem model module.
 * @module fulfillmentoutbound_v2020_07_01/model/ReturnItem
 * @version 2020-07-01
 */
export class ReturnItem {
    /**
     * Constructs a <code>ReturnItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ReturnItem} obj Optional instance to populate.
     * @return {ReturnItem} The populated <code>ReturnItem</code> instance.
     */
    static constructFromObject(data: any, obj: ReturnItem): ReturnItem;
    /**
     * Constructs a new <code>ReturnItem</code>.
     * An item that Amazon accepted for return.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/ReturnItem
     * @class
     * @param sellerReturnItemId {String} An identifier the seller assigns to the return item.
     * @param sellerFulfillmentOrderItemId {String} The identifier assigned to the item by the seller when the fulfillment order was created.
     * @param amazonShipmentId {String} The identifier for the shipment that is associated with the return item.
     * @param sellerReturnReasonCode {String} The return reason code assigned to the return item by the seller.
     * @param status {FulfillmentReturnItemStatus}
     * @param statusChangedDate {Date} Date timestamp
     */
    constructor(sellerReturnItemId: string, sellerFulfillmentOrderItemId: string, amazonShipmentId: string, sellerReturnReasonCode: string, status: FulfillmentReturnItemStatus, statusChangedDate: Date);
    sellerReturnItemId: string;
    sellerFulfillmentOrderItemId: string;
    amazonShipmentId: string;
    sellerReturnReasonCode: string;
    status: FulfillmentReturnItemStatus;
    statusChangedDate: Date;
    /**
     * An optional comment about the return item.
     * @member {String} returnComment
     * @type {String}
     */
    returnComment: string;
    /**
     * The return reason code that the Amazon fulfillment center assigned to the return item.
     * @member {String} amazonReturnReasonCode
     * @type {String}
     */
    amazonReturnReasonCode: string;
    /**
     * Identifies the return authorization used to return this item. Refer to `ReturnAuthorization`.
     * @member {String} returnAuthorizationId
     * @type {String}
     */
    returnAuthorizationId: string;
    /**
     * @member {ReturnItemDisposition} returnReceivedCondition
     * @type {ReturnItemDisposition}
     */
    returnReceivedCondition: ReturnItemDisposition;
    /**
     * The identifier for the Amazon fulfillment center that processed the return item.
     * @member {String} fulfillmentCenterId
     * @type {String}
     */
    fulfillmentCenterId: string;
}
import { FulfillmentReturnItemStatus } from './FulfillmentReturnItemStatus.js';
import { ReturnItemDisposition } from './ReturnItemDisposition.js';
//# sourceMappingURL=ReturnItem.d.ts.map