/**
 * The SetPackingInformationRequest model module.
 * @module fulfillmentinbound_v2024_03_20/model/SetPackingInformationRequest
 * @version 2024-03-20
 */
export class SetPackingInformationRequest {
    /**
     * Constructs a <code>SetPackingInformationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SetPackingInformationRequest} obj Optional instance to populate.
     * @return {SetPackingInformationRequest} The populated <code>SetPackingInformationRequest</code> instance.
     */
    static constructFromObject(data: any, obj: SetPackingInformationRequest): SetPackingInformationRequest;
    /**
     * Constructs a new <code>SetPackingInformationRequest</code>.
     * The &#x60;setPackingInformation&#x60; request.
     * @alias module:fulfillmentinbound_v2024_03_20/model/SetPackingInformationRequest
     * @class
     * @param packageGroupings {[PackageGroupingInput]} List of packing information for the inbound plan.
     */
    constructor(packageGroupings: [PackageGroupingInput]);
    packageGroupings: [PackageGroupingInput];
}
import { PackageGroupingInput } from './PackageGroupingInput.js';
//# sourceMappingURL=SetPackingInformationRequest.d.ts.map