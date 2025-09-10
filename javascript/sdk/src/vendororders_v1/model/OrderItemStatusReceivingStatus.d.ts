/**
 * The OrderItemStatusReceivingStatus model module.
 * @module vendororders_v1/model/OrderItemStatusReceivingStatus
 * @version v1
 */
export class OrderItemStatusReceivingStatus {
    /**
     * Constructs a <code>OrderItemStatusReceivingStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderItemStatusReceivingStatus} obj Optional instance to populate.
     * @return {OrderItemStatusReceivingStatus} The populated <code>OrderItemStatusReceivingStatus</code> instance.
     */
    static constructFromObject(data: any, obj: OrderItemStatusReceivingStatus): OrderItemStatusReceivingStatus;
    /**
     * Receive status of the line item.
     * @member {String} receiveStatus
     * @type {String}
     */
    receiveStatus: string;
    /**
     * @member {ItemQuantity} receivedQuantity
     * @type {ItemQuantity}
     */
    receivedQuantity: ItemQuantity;
    /**
     * The date when the most recent item was received at the buyer's warehouse. Must be in ISO-8601 date/time format.
     * @member {Date} lastReceiveDate
     * @type {Date}
     */
    lastReceiveDate: Date;
}
export namespace OrderItemStatusReceivingStatus {
    namespace ReceiveStatusEnum {
        let NOT_RECEIVED: string;
        let PARTIALLY_RECEIVED: string;
        let RECEIVED: string;
    }
    /**
     * *
     */
    type ReceiveStatusEnum = string;
}
import { ItemQuantity } from './ItemQuantity.js';
//# sourceMappingURL=OrderItemStatusReceivingStatus.d.ts.map