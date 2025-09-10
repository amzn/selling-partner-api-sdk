/**
 * The AcknowledgementStatusDetails model module.
 * @module vendororders_v1/model/AcknowledgementStatusDetails
 * @version v1
 */
export class AcknowledgementStatusDetails {
    /**
     * Constructs a <code>AcknowledgementStatusDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AcknowledgementStatusDetails} obj Optional instance to populate.
     * @return {AcknowledgementStatusDetails} The populated <code>AcknowledgementStatusDetails</code> instance.
     */
    static constructFromObject(data: any, obj: AcknowledgementStatusDetails): AcknowledgementStatusDetails;
    /**
     * The date when the line item was confirmed by vendor. Must be in ISO-8601 date/time format.
     * @member {Date} acknowledgementDate
     * @type {Date}
     */
    acknowledgementDate: Date;
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
}
import { ItemQuantity } from './ItemQuantity.js';
//# sourceMappingURL=AcknowledgementStatusDetails.d.ts.map