/**
 * The CreateScheduledPackageRequest model module.
 * @module easyship_v2022_03_23/model/CreateScheduledPackageRequest
 * @version 2022-03-23
 */
export class CreateScheduledPackageRequest {
    /**
     * Constructs a <code>CreateScheduledPackageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateScheduledPackageRequest} obj Optional instance to populate.
     * @return {CreateScheduledPackageRequest} The populated <code>CreateScheduledPackageRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateScheduledPackageRequest): CreateScheduledPackageRequest;
    /**
     * Constructs a new <code>CreateScheduledPackageRequest</code>.
     * The request schema for the &#x60;createScheduledPackage&#x60; operation.
     * @alias module:easyship_v2022_03_23/model/CreateScheduledPackageRequest
     * @class
     * @param amazonOrderId {String} An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
     * @param marketplaceId {String} A string of up to 255 characters.
     * @param packageDetails {PackageDetails}
     */
    constructor(amazonOrderId: string, marketplaceId: string, packageDetails: PackageDetails);
    amazonOrderId: string;
    marketplaceId: string;
    packageDetails: PackageDetails;
}
import { PackageDetails } from './PackageDetails.js';
//# sourceMappingURL=CreateScheduledPackageRequest.d.ts.map