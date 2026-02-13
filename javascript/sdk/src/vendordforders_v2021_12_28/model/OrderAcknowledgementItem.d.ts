/**
 * The OrderAcknowledgementItem model module.
 * @module vendordforders_v2021_12_28/model/OrderAcknowledgementItem
 * @version 2021-12-28
 */
export class OrderAcknowledgementItem {
    /**
     * Constructs a <code>OrderAcknowledgementItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderAcknowledgementItem} obj Optional instance to populate.
     * @return {OrderAcknowledgementItem} The populated <code>OrderAcknowledgementItem</code> instance.
     */
    static constructFromObject(data: any, obj: OrderAcknowledgementItem): OrderAcknowledgementItem;
    /**
     * Constructs a new <code>OrderAcknowledgementItem</code>.
     * Details of an individual order being acknowledged.
     * @alias module:vendordforders_v2021_12_28/model/OrderAcknowledgementItem
     * @class
     * @param purchaseOrderNumber {String} The purchase order number for this order. Formatting Notes: alpha-numeric code.
     * @param vendorOrderNumber {String} The vendor's order number for this order.
     * @param acknowledgementDate {Date} The date and time when the order is acknowledged, in ISO-8601 date/time format. For example: 2018-07-16T23:00:00Z / 2018-07-16T23:00:00-05:00 / 2018-07-16T23:00:00-08:00.
     * @param acknowledgementStatus {AcknowledgementStatus}
     * @param sellingParty {PartyIdentification}
     * @param shipFromParty {PartyIdentification}
     * @param itemAcknowledgements {OrderItemAcknowledgement[]} Item details including acknowledged quantity.
     */
    constructor(purchaseOrderNumber: string, vendorOrderNumber: string, acknowledgementDate: Date, acknowledgementStatus: AcknowledgementStatus, sellingParty: PartyIdentification, shipFromParty: PartyIdentification, itemAcknowledgements: OrderItemAcknowledgement[]);
    purchaseOrderNumber: string;
    vendorOrderNumber: string;
    acknowledgementDate: Date;
    acknowledgementStatus: AcknowledgementStatus;
    sellingParty: PartyIdentification;
    shipFromParty: PartyIdentification;
    itemAcknowledgements: OrderItemAcknowledgement[];
}
import { AcknowledgementStatus } from './AcknowledgementStatus.js';
import { PartyIdentification } from './PartyIdentification.js';
import { OrderItemAcknowledgement } from './OrderItemAcknowledgement.js';
//# sourceMappingURL=OrderAcknowledgementItem.d.ts.map