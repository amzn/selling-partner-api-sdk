/**
 * The OrderStatus model module.
 * @module vendororders_v1/model/OrderStatus
 * @version v1
 */
export class OrderStatus {
    /**
     * Constructs a <code>OrderStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderStatus} obj Optional instance to populate.
     * @return {OrderStatus} The populated <code>OrderStatus</code> instance.
     */
    static constructFromObject(data: any, obj: OrderStatus): OrderStatus;
    /**
     * Constructs a new <code>OrderStatus</code>.
     * Current status of a purchase order.
     * @alias module:vendororders_v1/model/OrderStatus
     * @class
     * @param purchaseOrderNumber {String} The buyer's purchase order number for this order. Formatting Notes: 8-character alpha-numeric code.
     * @param purchaseOrderStatus {String} The status of the buyer's purchase order for this order.
     * @param purchaseOrderDate {Date} The date the purchase order was placed. Must be in ISO-8601 date/time format.
     * @param sellingParty {PartyIdentification}
     * @param shipToParty {PartyIdentification}
     * @param itemStatus {Array[]} Detailed description of items order status.
     */
    constructor(purchaseOrderNumber: string, purchaseOrderStatus: string, purchaseOrderDate: Date, sellingParty: PartyIdentification, shipToParty: PartyIdentification, itemStatus: any[][]);
    purchaseOrderNumber: string;
    purchaseOrderStatus: string;
    purchaseOrderDate: Date;
    sellingParty: PartyIdentification;
    shipToParty: PartyIdentification;
    itemStatus: any[][];
    /**
     * The date when the purchase order was last updated. Must be in ISO-8601 date/time format.
     * @member {Date} lastUpdatedDate
     * @type {Date}
     */
    lastUpdatedDate: Date;
}
export namespace OrderStatus {
    namespace PurchaseOrderStatusEnum {
        let OPEN: string;
        let CLOSED: string;
    }
    /**
     * *
     */
    type PurchaseOrderStatusEnum = string;
}
import { PartyIdentification } from './PartyIdentification.js';
//# sourceMappingURL=OrderStatus.d.ts.map