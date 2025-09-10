/**
 * The RemovalShipmentEvent model module.
 * @module finances_v0/model/RemovalShipmentEvent
 * @version v0
 */
export class RemovalShipmentEvent {
    /**
     * Constructs a <code>RemovalShipmentEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RemovalShipmentEvent} obj Optional instance to populate.
     * @return {RemovalShipmentEvent} The populated <code>RemovalShipmentEvent</code> instance.
     */
    static constructFromObject(data: any, obj: RemovalShipmentEvent): RemovalShipmentEvent;
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * The merchant removal orderId.
     * @member {String} merchantOrderId
     * @type {String}
     */
    merchantOrderId: string;
    /**
     * The identifier for the removal shipment order.
     * @member {String} orderId
     * @type {String}
     */
    orderId: string;
    /**
     * The type of removal order.  Possible values:  * WHOLESALE_LIQUIDATION
     * @member {String} transactionType
     * @type {String}
     */
    transactionType: string;
    /**
     * The name of the store where the event occurred.
     * @member {String} storeName
     * @type {String}
     */
    storeName: string;
    /**
     * A list of information about removal shipment items.
     * @member {[RemovalShipmentItem]} removalShipmentItemList
     * @type {[RemovalShipmentItem]}
     */
    removalShipmentItemList: [RemovalShipmentItem];
}
import { RemovalShipmentItem } from './RemovalShipmentItem.js';
//# sourceMappingURL=RemovalShipmentEvent.d.ts.map