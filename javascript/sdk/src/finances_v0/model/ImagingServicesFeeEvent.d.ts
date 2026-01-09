/**
 * The ImagingServicesFeeEvent model module.
 * @module finances_v0/model/ImagingServicesFeeEvent
 * @version v0
 */
export class ImagingServicesFeeEvent {
    /**
     * Constructs a <code>ImagingServicesFeeEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ImagingServicesFeeEvent} obj Optional instance to populate.
     * @return {ImagingServicesFeeEvent} The populated <code>ImagingServicesFeeEvent</code> instance.
     */
    static constructFromObject(data: any, obj: ImagingServicesFeeEvent): ImagingServicesFeeEvent;
    /**
     * The identifier for the imaging services request.
     * @member {String} imagingRequestBillingItemID
     * @type {String}
     */
    imagingRequestBillingItemID: string;
    /**
     * The Amazon Standard Identification Number (ASIN) of the item for which the imaging service was requested.
     * @member {String} ASIN
     * @type {String}
     */
    ASIN: string;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * A list of fee component information.
     * @member {[FeeComponent]} feeList
     * @type {[FeeComponent]}
     */
    feeList: [FeeComponent];
}
import { FeeComponent } from './FeeComponent.js';
//# sourceMappingURL=ImagingServicesFeeEvent.d.ts.map