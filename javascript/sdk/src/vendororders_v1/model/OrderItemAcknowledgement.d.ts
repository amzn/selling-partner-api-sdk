/**
 * The OrderItemAcknowledgement model module.
 * @module vendororders_v1/model/OrderItemAcknowledgement
 * @version v1
 */
export class OrderItemAcknowledgement {
    /**
     * Constructs a <code>OrderItemAcknowledgement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderItemAcknowledgement} obj Optional instance to populate.
     * @return {OrderItemAcknowledgement} The populated <code>OrderItemAcknowledgement</code> instance.
     */
    static constructFromObject(data: any, obj: OrderItemAcknowledgement): OrderItemAcknowledgement;
    /**
     * Constructs a new <code>OrderItemAcknowledgement</code>.
     * Represents the acknowledgement details for an individual order item, including the acknowledgement code, acknowledged quantity, scheduled ship and delivery dates, and rejection reason (if applicable).
     * @alias module:vendororders_v1/model/OrderItemAcknowledgement
     * @class
     * @param acknowledgementCode {String} This indicates the acknowledgement code.
     * @param acknowledgedQuantity {ItemQuantity}
     */
    constructor(acknowledgementCode: string, acknowledgedQuantity: ItemQuantity);
    acknowledgementCode: string;
    acknowledgedQuantity: ItemQuantity;
    /**
     * Estimated ship date per line item. Must be in ISO-8601 date/time format.
     * @member {Date} scheduledShipDate
     * @type {Date}
     */
    scheduledShipDate: Date;
    /**
     * Estimated delivery date per line item. Must be in ISO-8601 date/time format.
     * @member {Date} scheduledDeliveryDate
     * @type {Date}
     */
    scheduledDeliveryDate: Date;
    /**
     * Indicates the reason for rejection.
     * @member {String} rejectionReason
     * @type {String}
     */
    rejectionReason: string;
}
export namespace OrderItemAcknowledgement {
    namespace AcknowledgementCodeEnum {
        let Accepted: string;
        let Backordered: string;
        let Rejected: string;
    }
    /**
     * *
     */
    type AcknowledgementCodeEnum = string;
    namespace RejectionReasonEnum {
        let TemporarilyUnavailable: string;
        let InvalidProductIdentifier: string;
        let ObsoleteProduct: string;
    }
    /**
     * *
     */
    type RejectionReasonEnum = string;
}
import { ItemQuantity } from './ItemQuantity.js';
//# sourceMappingURL=OrderItemAcknowledgement.d.ts.map