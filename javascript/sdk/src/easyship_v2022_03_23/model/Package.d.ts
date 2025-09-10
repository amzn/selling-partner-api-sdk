/**
 * The Package model module.
 * @module easyship_v2022_03_23/model/Package
 * @version 2022-03-23
 */
export class Package {
    /**
     * Constructs a <code>Package</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Package} obj Optional instance to populate.
     * @return {Package} The populated <code>Package</code> instance.
     */
    static constructFromObject(data: any, obj: Package): Package;
    /**
     * Constructs a new <code>Package</code>.
     * This object contains all the details of the scheduled Easy Ship package.
     * @alias module:easyship_v2022_03_23/model/Package
     * @class
     * @param scheduledPackageId {ScheduledPackageId}
     * @param packageDimensions {Dimensions}
     * @param packageWeight {Weight}
     * @param packageTimeSlot {TimeSlot}
     */
    constructor(scheduledPackageId: ScheduledPackageId, packageDimensions: Dimensions, packageWeight: Weight, packageTimeSlot: TimeSlot);
    scheduledPackageId: ScheduledPackageId;
    packageDimensions: Dimensions;
    packageWeight: Weight;
    packageTimeSlot: TimeSlot;
    /**
     * A list of items contained in the package.
     * @member {[Item]} packageItems
     * @type {[Item]}
     */
    packageItems: [Item];
    /**
     * Optional seller-created identifier that is printed on the shipping label to help the seller identify the package.
     * @member {String} packageIdentifier
     * @type {String}
     */
    packageIdentifier: string;
    /**
     * @member {InvoiceData} invoice
     * @type {InvoiceData}
     */
    invoice: InvoiceData;
    /**
     * @member {PackageStatus} packageStatus
     * @type {PackageStatus}
     */
    packageStatus: PackageStatus;
    /**
     * @member {TrackingDetails} trackingDetails
     * @type {TrackingDetails}
     */
    trackingDetails: TrackingDetails;
}
import { ScheduledPackageId } from './ScheduledPackageId.js';
import { Dimensions } from './Dimensions.js';
import { Weight } from './Weight.js';
import { TimeSlot } from './TimeSlot.js';
import { Item } from './Item.js';
import { InvoiceData } from './InvoiceData.js';
import { PackageStatus } from './PackageStatus.js';
import { TrackingDetails } from './TrackingDetails.js';
//# sourceMappingURL=Package.d.ts.map