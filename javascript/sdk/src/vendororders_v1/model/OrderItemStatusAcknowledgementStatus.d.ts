/**
 * The OrderItemStatusAcknowledgementStatus model module.
 * @module vendororders_v1/model/OrderItemStatusAcknowledgementStatus
 * @version v1
 */
export class OrderItemStatusAcknowledgementStatus {
    /**
     * Constructs a <code>OrderItemStatusAcknowledgementStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderItemStatusAcknowledgementStatus} obj Optional instance to populate.
     * @return {OrderItemStatusAcknowledgementStatus} The populated <code>OrderItemStatusAcknowledgementStatus</code> instance.
     */
    static constructFromObject(data: any, obj: OrderItemStatusAcknowledgementStatus): OrderItemStatusAcknowledgementStatus;
    /**
     * Confirmation status of line item.
     * @member {String} confirmationStatus
     * @type {String}
     */
    confirmationStatus: string;
    /**
     * @member {ItemQuantity} acceptedQuantity
     * @type {ItemQuantity}
     */
    acceptedQuantity: ItemQuantity;
    /**
     * @member {ItemQuantity} rejectedQuantity
     * @type {ItemQuantity}
     */
    rejectedQuantity: ItemQuantity;
    /**
     * Details of item quantity confirmed.
     * @member {[AcknowledgementStatusDetails]} acknowledgementStatusDetails
     * @type {[AcknowledgementStatusDetails]}
     */
    acknowledgementStatusDetails: [AcknowledgementStatusDetails];
}
export namespace OrderItemStatusAcknowledgementStatus {
    namespace ConfirmationStatusEnum {
        let ACCEPTED: string;
        let PARTIALLY_ACCEPTED: string;
        let REJECTED: string;
        let UNCONFIRMED: string;
    }
    /**
     * *
     */
    type ConfirmationStatusEnum = string;
}
import { ItemQuantity } from './ItemQuantity.js';
import { AcknowledgementStatusDetails } from './AcknowledgementStatusDetails.js';
//# sourceMappingURL=OrderItemStatusAcknowledgementStatus.d.ts.map