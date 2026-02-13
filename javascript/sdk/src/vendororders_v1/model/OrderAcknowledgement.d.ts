/**
 * The OrderAcknowledgement model module.
 * @module vendororders_v1/model/OrderAcknowledgement
 * @version v1
 */
export class OrderAcknowledgement {
    /**
     * Constructs a <code>OrderAcknowledgement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderAcknowledgement} obj Optional instance to populate.
     * @return {OrderAcknowledgement} The populated <code>OrderAcknowledgement</code> instance.
     */
    static constructFromObject(data: any, obj: OrderAcknowledgement): OrderAcknowledgement;
    /**
     * Constructs a new <code>OrderAcknowledgement</code>.
     * Represents an acknowledgement for an order, including the purchase order number, selling party details, acknowledgement date, and a list of acknowledged items.
     * @alias module:vendororders_v1/model/OrderAcknowledgement
     * @class
     * @param purchaseOrderNumber {String} The purchase order number. Formatting Notes: 8-character alpha-numeric code.
     * @param sellingParty {PartyIdentification}
     * @param acknowledgementDate {Date} The date and time when the purchase order is acknowledged, in ISO-8601 date/time format.
     * @param items {[OrderAcknowledgementItem]} A list of the items being acknowledged with associated details.
     */
    constructor(purchaseOrderNumber: string, sellingParty: PartyIdentification, acknowledgementDate: Date, items: [OrderAcknowledgementItem]);
    purchaseOrderNumber: string;
    sellingParty: PartyIdentification;
    acknowledgementDate: Date;
    items: OrderAcknowledgementItem[];
}
import { PartyIdentification } from './PartyIdentification.js';
import { OrderAcknowledgementItem } from './OrderAcknowledgementItem.js';
//# sourceMappingURL=OrderAcknowledgement.d.ts.map