/**
 * The PackageTrackingDetails model module.
 * @module fulfillmentoutbound_v2020_07_01/model/PackageTrackingDetails
 * @version 2020-07-01
 */
export class PackageTrackingDetails {
    /**
     * Constructs a <code>PackageTrackingDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackageTrackingDetails} obj Optional instance to populate.
     * @return {PackageTrackingDetails} The populated <code>PackageTrackingDetails</code> instance.
     */
    static constructFromObject(data: any, obj: PackageTrackingDetails): PackageTrackingDetails;
    /**
     * Constructs a new <code>PackageTrackingDetails</code>.
     * Tracking details of package
     * @alias module:fulfillmentoutbound_v2020_07_01/model/PackageTrackingDetails
     * @class
     * @param packageNumber {Number} The package identifier.
     */
    constructor(packageNumber: number);
    packageNumber: number;
    /**
     * The tracking number for the package.
     * @member {String} trackingNumber
     * @type {String}
     */
    trackingNumber: string;
    /**
     * Link on swiship.com that allows customers to track the package.
     * @member {String} customerTrackingLink
     * @type {String}
     */
    customerTrackingLink: string;
    /**
     * The name of the carrier.
     * @member {String} carrierCode
     * @type {String}
     */
    carrierCode: string;
    /**
     * The phone number of the carrier.
     * @member {String} carrierPhoneNumber
     * @type {String}
     */
    carrierPhoneNumber: string;
    /**
     * The URL of the carrier's website.
     * @member {String} carrierURL
     * @type {String}
     */
    carrierURL: string;
    /**
     * Date timestamp
     * @member {Date} shipDate
     * @type {Date}
     */
    shipDate: Date;
    /**
     * Date timestamp
     * @member {Date} estimatedArrivalDate
     * @type {Date}
     */
    estimatedArrivalDate: Date;
    /**
     * @member {TrackingAddress} shipToAddress
     * @type {TrackingAddress}
     */
    shipToAddress: TrackingAddress;
    /**
     * @member {CurrentStatus} currentStatus
     * @type {CurrentStatus}
     */
    currentStatus: CurrentStatus;
    /**
     * Description corresponding to the `CurrentStatus` value.
     * @member {String} currentStatusDescription
     * @type {String}
     */
    currentStatusDescription: string;
    /**
     * @member {DateRange} deliveryWindow
     * @type {DateRange}
     */
    deliveryWindow: DateRange;
    /**
     * The name of the person who signed for the package.
     * @member {String} signedForBy
     * @type {String}
     */
    signedForBy: string;
    /**
     * @member {AdditionalLocationInfo} additionalLocationInfo
     * @type {AdditionalLocationInfo}
     */
    additionalLocationInfo: AdditionalLocationInfo;
    /**
     * An array of tracking event information.
     * @member {TrackingEvent[]} trackingEvents
     * @type {TrackingEvent[]}
     */
    trackingEvents: TrackingEvent[];
}
import { TrackingAddress } from './TrackingAddress.js';
import { CurrentStatus } from './CurrentStatus.js';
import { DateRange } from './DateRange.js';
import { AdditionalLocationInfo } from './AdditionalLocationInfo.js';
import { TrackingEvent } from './TrackingEvent.js';
//# sourceMappingURL=PackageTrackingDetails.d.ts.map