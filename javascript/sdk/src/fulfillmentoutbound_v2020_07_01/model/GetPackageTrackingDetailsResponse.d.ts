/**
 * The GetPackageTrackingDetailsResponse model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetPackageTrackingDetailsResponse
 * @version 2020-07-01
 */
export class GetPackageTrackingDetailsResponse {
    /**
     * Constructs a <code>GetPackageTrackingDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetPackageTrackingDetailsResponse} obj Optional instance to populate.
     * @return {GetPackageTrackingDetailsResponse} The populated <code>GetPackageTrackingDetailsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetPackageTrackingDetailsResponse): GetPackageTrackingDetailsResponse;
    /**
     * @member {PackageTrackingDetails} payload
     * @type {PackageTrackingDetails}
     */
    payload: PackageTrackingDetails;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { PackageTrackingDetails } from './PackageTrackingDetails.js';
//# sourceMappingURL=GetPackageTrackingDetailsResponse.d.ts.map