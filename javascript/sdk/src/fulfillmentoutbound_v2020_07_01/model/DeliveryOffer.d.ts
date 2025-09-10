/**
 * The DeliveryOffer model module.
 * @module fulfillmentoutbound_v2020_07_01/model/DeliveryOffer
 * @version 2020-07-01
 */
export class DeliveryOffer {
    /**
     * Constructs a <code>DeliveryOffer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeliveryOffer} obj Optional instance to populate.
     * @return {DeliveryOffer} The populated <code>DeliveryOffer</code> instance.
     */
    static constructFromObject(data: any, obj: DeliveryOffer): DeliveryOffer;
    /**
     * Date timestamp
     * @member {Date} expiresAt
     * @type {Date}
     */
    expiresAt: Date;
    /**
     * @member {DateRange} dateRange
     * @type {DateRange}
     */
    dateRange: DateRange;
    /**
     * @member {DeliveryPolicy} policy
     * @type {DeliveryPolicy}
     */
    policy: DeliveryPolicy;
}
import { DateRange } from './DateRange.js';
import { DeliveryPolicy } from './DeliveryPolicy.js';
//# sourceMappingURL=DeliveryOffer.d.ts.map