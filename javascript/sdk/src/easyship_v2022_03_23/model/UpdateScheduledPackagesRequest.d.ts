/**
 * The UpdateScheduledPackagesRequest model module.
 * @module easyship_v2022_03_23/model/UpdateScheduledPackagesRequest
 * @version 2022-03-23
 */
export class UpdateScheduledPackagesRequest {
    /**
     * Constructs a <code>UpdateScheduledPackagesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateScheduledPackagesRequest} obj Optional instance to populate.
     * @return {UpdateScheduledPackagesRequest} The populated <code>UpdateScheduledPackagesRequest</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateScheduledPackagesRequest): UpdateScheduledPackagesRequest;
    /**
     * Constructs a new <code>UpdateScheduledPackagesRequest</code>.
     * The request schema for the &#x60;updateScheduledPackages&#x60; operation.
     * @alias module:easyship_v2022_03_23/model/UpdateScheduledPackagesRequest
     * @class
     * @param marketplaceId {String} A string of up to 255 characters.
     * @param updatePackageDetailsList {[UpdatePackageDetails]} A list of package update details.
     */
    constructor(marketplaceId: string, updatePackageDetailsList: [UpdatePackageDetails]);
    marketplaceId: string;
    updatePackageDetailsList: UpdatePackageDetails[];
}
import { UpdatePackageDetails } from './UpdatePackageDetails.js';
//# sourceMappingURL=UpdateScheduledPackagesRequest.d.ts.map